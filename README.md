# Domodedovo Airport App

Веб-приложение для отображения информации аэропорта Домодедово: расписание рейсов, транспорт, парковка и багаж. Проект разделён на frontend и backend. Frontend отвечает за пользовательский интерфейс, а backend проксирует запросы к API Яндекс Расписаний, чтобы API-ключ не хранился на клиентской стороне.

## Содержание

- [Описание проекта](#описание-проекта)
- [Функциональность](#функциональность)
- [Технологии](#технологии)
- [Структура проекта](#структура-проекта)
- [Требования](#требования)
- [Переменные окружения](#переменные-окружения)
- [Локальный запуск](#локальный-запуск)
- [API backend](#api-backend)
- [Сборка frontend](#сборка-frontend)
- [Деплой](#деплой)
- [Примечания](#примечания)

## Описание проекта

Domodedovo Airport App — это учебный/демонстрационный fullstack-проект, имитирующий сайт аэропорта Домодедово. Пользователь может просматривать главную страницу, расписание рейсов, информацию о транспорте, парковке и багаже. Расписание рейсов загружается через backend из Яндекс Расписаний.

Основная идея проекта — показать работу React-приложения с отдельным сервером на Express, который безопасно хранит ключ внешнего API и отдаёт frontend уже обработанные данные.

## Функциональность

### Frontend

- Главная страница аэропорта.
- Страница расписания рейсов.
- Переключение между вылетами и прилётами.
- Поиск по рейсам, авиакомпаниям, направлениям, терминалам и статусам.
- Автоматическое обновление расписания каждые 60 секунд.
- Fallback на mock-данные, если backend или внешний API недоступен.
- Страницы:
  - `/` — главная страница;
  - `/flight` — расписание рейсов;
  - `/transport` — транспорт;
  - `/parking` — парковка;
  - `/baggage` — багаж.
- Переключение светлой и тёмной темы.
- Адаптивная вёрстка.
- Анимации интерфейса через `framer-motion`.

### Backend

- Express-сервер для работы с расписанием.
- Прокси-запросы к API Яндекс Расписаний.
- Хранение `YANDEX_API_KEY` только на сервере.
- CORS-настройки для доступа frontend.
- Проверка работоспособности сервера через `/api/health`.
- Получение списка рейсов.
- Получение детальной информации о рейсе.

## Технологии

### Frontend

- React
- TypeScript
- Vite
- React Router DOM
- Framer Motion
- Tailwind CSS
- ESLint

### Backend

- Node.js
- Express
- CORS
- dotenv
- Яндекс Расписания API

## Структура проекта

```text
domodedovo_airport-main/
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── sections/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md
```

## Требования

Перед запуском нужно установить:

- Node.js 18 или выше;
- npm;
- API-ключ Яндекс Расписаний для получения реального расписания.

Проверить версии можно командами:

```bash
node -v
npm -v
```

## Переменные окружения

### Backend

Файл: `backend/.env`

Создаётся на основе `backend/.env.example`.

```env
PORT=8080
YANDEX_API_KEY=your_yandex_api_key
YANDEX_STATION=DME
YANDEX_API_BASE=https://api.rasp.yandex.net/v3.0
FRONTEND_ORIGIN=http://localhost:5173
```

Описание переменных:

| Переменная | Назначение |
|---|---|
| `PORT` | Порт, на котором запускается backend. По умолчанию `8080`. |
| `YANDEX_API_KEY` | API-ключ Яндекс Расписаний. Обязательная переменная. |
| `YANDEX_STATION` | Код станции/аэропорта. Для Домодедово используется `DME`. |
| `YANDEX_API_BASE` | Базовый URL API Яндекс Расписаний. |
| `FRONTEND_ORIGIN` | Адрес frontend-приложения для CORS. |

### Frontend

Файл: `frontend/.env`

Создаётся на основе `frontend/.env.example`.

```env
VITE_API_BASE=http://localhost:8080/api
```

Описание переменной:

| Переменная | Назначение |
|---|---|
| `VITE_API_BASE` | Базовый URL backend API, к которому обращается frontend. |

## Локальный запуск

Проект запускается в двух отдельных терминалах: отдельно backend и отдельно frontend.

### 1. Запуск backend

Перейдите в папку backend:

```bash
cd backend
```

Установите зависимости:

```bash
npm install
```

Создайте файл `.env`:

```bash
cp .env.example .env
```

Откройте `.env` и укажите свой ключ Яндекс Расписаний:

```env
YANDEX_API_KEY=your_yandex_api_key
```

Запустите backend в режиме разработки:

```bash
npm run dev
```

Backend будет доступен по адресу:

```text
http://localhost:8080
```

Проверка работы backend:

```text
http://localhost:8080/api/health
```

Ожидаемый ответ:

```json
{
  "ok": true
}
```

### 2. Запуск frontend

Откройте второй терминал и перейдите в папку frontend:

```bash
cd frontend
```

Установите зависимости:

```bash
npm install
```

Создайте файл `.env`:

```bash
cp .env.example .env
```

Проверьте, что в `.env` указан адрес backend:

```env
VITE_API_BASE=http://localhost:8080/api
```

Запустите frontend:

```bash
npm run dev
```

Frontend будет доступен по адресу:

```text
http://localhost:5173
```

## API backend

### Проверка сервера

```http
GET /api/health
```

Пример ответа:

```json
{
  "ok": true
}
```

### Получение рейсов

```http
GET /api/flights?type=departure&date=2026-04-27
```

Параметры:

| Параметр | Описание |
|---|---|
| `type` | Тип события: `departure` для вылетов или `arrival` для прилётов. |
| `date` | Дата расписания в формате `YYYY-MM-DD`. Необязательный параметр. |

Пример ответа:

```json
{
  "updatedAt": "2026-04-27T10:00:00.000Z",
  "event": "departure",
  "date": "2026-04-27",
  "station": "Домодедово",
  "flights": []
}
```

### Получение информации о конкретном рейсе

```http
GET /api/flights/:id
```

Пример:

```http
GET /api/flights/SU-1234
```

Метод ищет рейс среди вылетов и прилётов, после чего возвращает расширенную информацию и остановки маршрута, если они доступны во внешнем API.

## Сборка frontend

Для production-сборки frontend выполните:

```bash
cd frontend
npm run build
```

Готовая сборка будет создана в папке:

```text
frontend/dist
```

Для локального просмотра production-сборки:

```bash
npm run preview
```


## Примечания

- Без `YANDEX_API_KEY` backend не сможет получить реальные данные расписания.
- Если backend или внешний API недоступны, frontend использует mock-данные из проекта.
- API-ключ нельзя хранить во frontend, потому что frontend-код доступен пользователю в браузере.
- Папка `frontend/dist` содержит production-сборку и может быть пересобрана командой `npm run build`.
- Файлы `.env` не должны попадать в публичный репозиторий.

## Автор

Проект разработан как fullstack-приложение для демонстрации работы сайта аэропорта Домодедово с frontend на React и backend на Node.js/Express.
