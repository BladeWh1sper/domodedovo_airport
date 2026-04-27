# Domodedovo Airport App

Полноценный проект из двух частей:

- `frontend/` — React + TypeScript + Vite + React Router + framer-motion
- `backend/` — Node.js + Express (прокси к Яндекс Расписания API)

## Что реализовано

- Backend API:
  - `GET /api/flights?type=departure|arrival` — расписание рейсов
  - `GET /api/flights/:id` — детальная информация о рейсе
  - CORS
  - хранение `YANDEX_API_KEY` только на сервере
- Frontend:
  - Роуты: `/`, `/flight`, `/flight/:id`, `/transport`, `/parking`, `/baggage`
  - Детальная страница рейса
  - Фильтрация по тексту и времени суток (утро/день/вечер/ночь)
  - Кликабельные строки таблицы с переходом к деталям
  - Запросы только к собственному backend
  - Переключение темы (сохранение в LocalStorage)

## Локальный запуск

### 1) Backend

```bash
cd backend
cp .env.example .env
# вставьте ваш YANDEX_API_KEY в .env
npm install
npm run dev
```

По умолчанию backend стартует на `http://localhost:8080`.

### 2) Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

По умолчанию frontend стартует на `http://localhost:5173`.

## Переменные окружения

### Backend (`backend/.env`)

```env
PORT=8080
YANDEX_API_KEY=your_key
YANDEX_STATION=DME
YANDEX_API_BASE=https://api.rasp.yandex.net/v3.0
FRONTEND_ORIGIN=http://localhost:5173
```

### Frontend (`frontend/.env`)

```env
VITE_API_BASE=http://localhost:8080/api
```

## Деплой backend на Railway

1. Создайте новый проект на Railway и подключите репозиторий.
2. В качестве Root Directory укажите `backend`.
3. Добавьте переменные окружения:
   - `YANDEX_API_KEY`
   - `YANDEX_STATION=DME` (опционально)
   - `YANDEX_API_BASE=https://api.rasp.yandex.net/v3.0` (опционально)
   - `FRONTEND_ORIGIN=https://<ваш-frontend-домен>`
4. Команда запуска определяется через `npm start` (есть в `backend/package.json`).
5. После деплоя получите публичный URL backend и укажите его во frontend:
   - `VITE_API_BASE=https://<railway-backend>/api`

