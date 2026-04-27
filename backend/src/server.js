const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;
const YANDEX_API_BASE = process.env.YANDEX_API_BASE || 'https://api.rasp.yandex.net/v3.0';
const YANDEX_API_KEY = process.env.YANDEX_API_KEY;
const YANDEX_STATION = process.env.YANDEX_STATION || 'DME';
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || '*';

app.use(
  cors({
    origin: FRONTEND_ORIGIN === '*' ? true : FRONTEND_ORIGIN.split(',').map((item) => item.trim()),
  })
);
app.use(express.json());

function ensureApiKey(req, res, next) {
  if (!YANDEX_API_KEY) {
    return res.status(500).json({
      error: 'YANDEX_API_KEY не задан. Добавьте ключ в backend/.env',
    });
  }
  return next();
}

function toFlight(item, event = 'departure') {
  const scheduledTime = event === 'departure' ? item.departure : item.arrival;

  return {
    id: item.thread?.uid || item.thread?.number || `${event}-${Math.random().toString(16).slice(2)}`,
    event,
    flightNumber: item.thread?.number || '—',
    title: item.thread?.title || item.thread?.short_title || '—',
    airline: item.thread?.carrier?.title || '—',
    airlineCode: item.thread?.carrier?.code || '',
    city: item.thread?.short_title || item.thread?.title || '—',
    terminal: item.terminal || '—',
    gate: item.platform || '—',
    station: item.station?.title || YANDEX_STATION,
    transportSubtype: item.thread?.transport_subtype?.title || '',
    timezone: item.thread?.carrier?.codes?.sirena || '',
    scheduledTime,
    actualTime: event === 'departure' ? item.departure : item.arrival,
    rawStatus: item.thread?.transport_type || 'plane',
  };
}

async function fetchSchedule({ event = 'departure', date }) {
  const targetDate = date || new Date().toISOString().slice(0, 10);
  const url = new URL(`${YANDEX_API_BASE}/schedule/`);

  url.searchParams.set('apikey', YANDEX_API_KEY);
  url.searchParams.set('station', YANDEX_STATION);
  url.searchParams.set('system', 'iata');
  url.searchParams.set('transport_types', 'plane');
  url.searchParams.set('event', event);
  url.searchParams.set('lang', 'ru_RU');
  url.searchParams.set('format', 'json');
  url.searchParams.set('date', targetDate);

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    const message = data?.error || `Ошибка Яндекс API (${response.status})`;
    throw new Error(message);
  }

  const flights = (data.schedule || []).map((item) => toFlight(item, event));

  return {
    event,
    date: targetDate,
    station: data.station?.title || YANDEX_STATION,
    flights,
    raw: data.schedule || [],
  };
}

app.get('/api/health', (_, res) => {
  res.json({ ok: true });
});

app.get('/api/flights', ensureApiKey, async (req, res) => {
  try {
    const event = req.query.type === 'arrival' ? 'arrival' : 'departure';
    const date = typeof req.query.date === 'string' ? req.query.date : undefined;

    const result = await fetchSchedule({ event, date });

    res.json({
      updatedAt: new Date().toISOString(),
      ...result,
    });
  } catch (error) {
    res.status(502).json({ error: error.message || 'Не удалось получить расписание' });
  }
});

app.get('/api/flights/:id', ensureApiKey, async (req, res) => {
  try {
    const { id } = req.params;
    const date = typeof req.query.date === 'string' ? req.query.date : undefined;

    const [departure, arrival] = await Promise.all([
      fetchSchedule({ event: 'departure', date }),
      fetchSchedule({ event: 'arrival', date }),
    ]);

    const depRaw = departure.raw.find((item) => item.thread?.uid === id || item.thread?.number === id);
    const arrRaw = arrival.raw.find((item) => item.thread?.uid === id || item.thread?.number === id);
    const foundRaw = depRaw || arrRaw;

    if (!foundRaw) {
      return res.status(404).json({ error: 'Рейс не найден' });
    }

    const event = depRaw ? 'departure' : 'arrival';
    const baseFlight = toFlight(foundRaw, event);

    // Детальная информация о нитке маршрута
    const threadUrl = new URL(`${YANDEX_API_BASE}/thread/`);
    threadUrl.searchParams.set('apikey', YANDEX_API_KEY);
    threadUrl.searchParams.set('uid', foundRaw.thread?.uid || id);
    threadUrl.searchParams.set('lang', 'ru_RU');
    threadUrl.searchParams.set('show_systems', 'iata');

    let threadData = null;
    try {
      const threadResponse = await fetch(threadUrl);
      const threadJson = await threadResponse.json();
      if (threadResponse.ok) {
        threadData = threadJson;
      }
    } catch (e) {
      // Возвращаем основную информацию даже если thread недоступен
      threadData = null;
    }

    return res.json({
      updatedAt: new Date().toISOString(),
      flight: {
        ...baseFlight,
        from: foundRaw.thread?.title || '—',
        number: foundRaw.thread?.number || '—',
        transportType: foundRaw.thread?.transport_type || 'plane',
        stops: threadData?.stops?.map((stop) => ({
          station: stop.station?.title || '—',
          arrival: stop.arrival || null,
          departure: stop.departure || null,
          terminal: stop.terminal || '',
          platform: stop.platform || '',
        })) || [],
        thread: {
          uid: foundRaw.thread?.uid || id,
          title: foundRaw.thread?.title || '',
          shortTitle: foundRaw.thread?.short_title || '',
          carrier: foundRaw.thread?.carrier?.title || '',
          vehicle: foundRaw.thread?.vehicle || '',
        },
      },
    });
  } catch (error) {
    return res.status(502).json({ error: error.message || 'Не удалось получить детали рейса' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend started on port ${PORT}`);
});
