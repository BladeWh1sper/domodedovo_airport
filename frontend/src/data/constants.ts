import type {
  ChecklistItem,
  Flight,
  HeroContent,
  InfoCardItem,
  MenuItem,
  NavItem,
  NewsItem,
  PageKey,
  SlideItem,
} from '../types'

export const HERO_IMAGE =
  'https://lh3.googleusercontent.com/d/1Gh5I8pGsIppQs6xXubZ7ZMPJDLQnJWWA'
export const LOGO_IMAGE =
  'https://lh3.googleusercontent.com/d/1HayIYLgWRtfEdC2iSM0ozKwSzZaowaa3'

const slide1 =
  'https://lh3.googleusercontent.com/d/1IsZiL8EOMPuT2J3FrhvNNCvqy5nF8NSe'
const slide2 =
  'https://lh3.googleusercontent.com/d/1sEnDHyBlDrLSj_pV0QmHV1m66Ji4Odwg'
const slide3 =
  'https://lh3.googleusercontent.com/d/1TwmHINUpOgt2LaInp41cDIINFS8m9_Qp'

export const YANDEX_STATION = 'DME'

export const PAGE_PATHS: Record<PageKey, string> = {
  home: '/',
  flight: '/flight',
  transport: '/transport',
  parking: '/parking',
  baggage: '/baggage',
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', label: 'Главная', path: PAGE_PATHS.home },
  { key: 'flight', label: 'Табло', path: PAGE_PATHS.flight },
  { key: 'transport', label: 'Транспорт', path: PAGE_PATHS.transport },
  { key: 'parking', label: 'Парковка', path: PAGE_PATHS.parking },
  { key: 'baggage', label: 'Багаж', path: PAGE_PATHS.baggage },
]

export function getPageKeyByPathname(pathname: string): PageKey {
  if (pathname.startsWith('/flight')) return 'flight'
  if (pathname.startsWith('/transport')) return 'transport'
  if (pathname.startsWith('/parking')) return 'parking'
  if (pathname.startsWith('/baggage')) return 'baggage'
  return 'home'
}

export const PAGE_CONTENT: Record<PageKey, HeroContent> = {
  home: {
    title: 'Домодедово',
    subtitle:
      'Современный аэропортовый сервис с быстрым доступом к рейсам, транспорту, парковке и полезным услугам.',
    primaryCta: 'Проверить рейс',
    primaryTarget: 'flight',
    secondaryCta: 'Как добраться',
    secondaryTarget: 'transport',
  },
  flight: {
    title: 'Табло рейсов',
    subtitle:
      'Проверяйте статус вылета и прилета, находите нужный рейс и получайте актуальную информацию без лишних шагов.',
    primaryCta: 'Парковка',
    primaryTarget: 'parking',
    secondaryCta: 'На главную',
    secondaryTarget: 'home',
  },
  transport: {
    title: 'Транспорт',
    subtitle:
      'Выберите удобный способ добраться до аэропорта: аэроэкспресс, пригородный поезд, автобус, автомобиль или каршеринг.',
    primaryCta: 'Парковка',
    primaryTarget: 'parking',
    secondaryCta: 'На главную',
    secondaryTarget: 'home',
  },
  parking: {
    title: 'Парковка',
    subtitle:
      'Официальный паркинг Домодедово с краткосрочными и долгосрочными тарифами, оплатой онлайн и понятной схемой подъезда.',
    primaryCta: 'Транспорт',
    primaryTarget: 'transport',
    secondaryCta: 'На главную',
    secondaryTarget: 'home',
  },
  baggage: {
    title: 'Багаж',
    subtitle:
      'Правила провоза багажа, ручной клади, запрещённые предметы и полезные услуги аэропорта Домодедово.',
    primaryCta: 'Табло рейсов',
    primaryTarget: 'flight',
    secondaryCta: 'На главную',
    secondaryTarget: 'home',
  },
}

export const SLIDES: SlideItem[] = [
  {
    title: 'Домодедово',
    subtitle: 'Узнайте об услугах и сервисах аэропорта',
    image: slide1,
  },
  {
    title: 'Регистрация на рейс',
    subtitle: 'Проверьте правила и подготовьтесь к вылету заранее',
    image: slide2,
  },
  {
    title: 'Пассажирам',
    subtitle: 'Важная информация перед поездкой',
    image: slide3,
  },
]

export const HOME_NEWS: NewsItem[] = [
  {
    title: 'Домодедово расширяет цифровые сервисы для пассажиров',
    date: '5 февр. 2026 г.',
  },
  {
    title:
      'Аэропорт Домодедово работает в штатном режиме и обслуживает рейсы без ограничений',
    date: '27 янв. 2026 г.',
  },
]

export const HOME_MENU: MenuItem[] = [
  { title: 'Бизнес-залы' },
  { title: 'VIP-залы' },
  { title: 'Пассажирам с ОВЗ' },
  { title: 'Работа в Домодедово', external: true },
  { title: 'Грузовые перевозки' },
]

export const TRANSPORT_CARDS: InfoCardItem[] = [
  {
    title: 'Аэроэкспресс',
    badge: 'Ж/д',
    description:
      'Скоростной поезд следует по маршруту Павелецкий вокзал — Верхние Котлы — Аэропорт Домодедово.',
    meta: ['Павелецкий вокзал', 'Верхние Котлы', 'Аэропорт Домодедово'],
  },
  {
    title: 'Пригородный поезд',
    badge: 'Электропоезд',
    description:
      'Пригородный поезд идет от Павелецкого вокзала до аэропорта с промежуточными остановками.',
    meta: ['Павелецкое направление', 'Промежуточные остановки', 'До терминала'],
  },
  {
    title: 'Автобус №308',
    badge: 'Автобус',
    description:
      'Маршрут соединяет аэропорт и станцию метро Домодедовская. Время в пути зависит от загруженности дороги.',
    meta: ['м. Домодедовская', 'Регулярное сообщение', 'До терминала'],
  },
  {
    title: 'На автомобиле',
    badge: 'A-105',
    description:
      'С Москвой аэропорт соединяет автомагистраль А-105. При движении по МКАД используйте съезд №25.',
    meta: ['А-105', 'Съезд №25', 'Указатели до терминала'],
  },
  {
    title: 'Каршеринг',
    badge: 'P3',
    description:
      'Оставить автомобиль каршеринга можно на парковке P3 рядом с аэропортом.',
    meta: ['Парковка P3', 'Близко к терминалу', 'Удобный доступ'],
  },
]

export const TRANSPORT_TIPS: ChecklistItem[] = [
  {
    title: 'Как выбрать маршрут',
    text: 'Для стабильного времени поездки выбирайте железнодорожный транспорт. Для гибкости подойдут автобус или автомобиль.',
  },
  {
    title: 'Когда лучше выезжать',
    text: 'Для поездки на автомобиле и автобусе лучше закладывать дополнительное время в часы пик.',
  },
  {
    title: 'Что проверить заранее',
    text: 'Перед выездом проверьте табло рейса, терминал, схему подъезда и парковку.',
  },
]

export const PARKING_CARDS: InfoCardItem[] = [
  {
    title: 'Краткосрочная парковка',
    badge: 'Ближе к терминалу',
    description:
      'Подходит для коротких поездок, встречи и проводов. Удобна для быстрой остановки рядом с терминалом.',
    meta: ['Почасовой тариф', 'Быстрый доступ', 'Короткая стоянка'],
  },
  {
    title: 'Суточная парковка',
    badge: 'Долгосрочно',
    description:
      'Подходит для пассажиров, которые уезжают на несколько дней и хотят оставить автомобиль на территории аэропорта.',
    meta: ['На несколько дней', 'Официальный паркинг', 'Удобный подъезд'],
  },
  {
    title: 'Оплата и правила',
    badge: 'Онлайн',
    description:
      'На официальном сайте доступны правила пользования парковкой, калькулятор стоимости и способы оплаты.',
    meta: ['Калькулятор', 'Онлайн-оплата', 'Правила паркинга'],
  },
  {
    title: 'Подъезд к парковке',
    badge: 'Маршрут',
    description:
      'До парковок удобно ехать по автомагистрали А-105. Лучше заранее открыть схему расположения зон.',
    meta: ['А-105', 'Схема парковок', 'Навигация'],
  },
  {
    title: 'Спецусловия',
    badge: 'ОВЗ',
    description:
      'Для пассажиров с ограниченными возможностями предусмотрены специальные условия и выделенные места.',
    meta: ['Специальные места', 'Льготные условия', 'Уточнение до въезда'],
  },
]

export const PARKING_STEPS: ChecklistItem[] = [
  {
    title: '1. Выберите тип стоянки',
    text: 'Краткосрочная парковка подходит для встречи и проводов, а суточная — для длительного отъезда.',
  },
  {
    title: '2. Проверьте схему въезда',
    text: 'Перед поездкой откройте схему расположения парковок и выберите нужную зону.',
  },
  {
    title: '3. Рассчитайте стоимость',
    text: 'Используйте официальный калькулятор, если хотите заранее понять итоговую стоимость.',
  },
]

export const BAGGAGE_RULES_CARDS: InfoCardItem[] = [
  {
    title: 'Нормы провоза багажа',
    badge: 'Вес',
    description:
      'Нормы определяются авиакомпанией. В эконом-классе обычно 20–23 кг, в бизнес-классе — 30–32 кг. Регистрация багажа начинается за 2 часа до вылета и заканчивается за 40 минут.',
    meta: ['20–23 кг эконом', '30–32 кг бизнес', 'Регистрация за 2 ч'],
  },
  {
    title: 'Ручная кладь',
    badge: 'Салон',
    description:
      'Обычно допускается до 10 кг. Сумма трёх измерений (длина + ширина + высота) не должна превышать 115 см. Точные нормы уточняйте у авиакомпании.',
    meta: ['До 10 кг', 'До 115 см', 'Проверяйте у авиакомпании'],
  },
  {
    title: 'Жидкости в ручной клади',
    badge: '100 мл',
    description:
      'Жидкости, гели и аэрозоли допускаются в контейнерах объёмом до 100 мл. Все контейнеры должны помещаться в один прозрачный пластиковый пакет размером не более 18×20 см.',
    meta: ['Контейнер до 100 мл', 'Пакет 18×20 см', 'Прозрачный пакет'],
  },
]

export const BAGGAGE_PROHIBITED_CARDS: InfoCardItem[] = [
  {
    title: 'Взрывчатые вещества и оружие',
    badge: 'Запрещено',
    description:
      'Запрещены к провозу в багаже и ручной клади: взрывчатые вещества, боеприпасы, фейерверки, сигнальные ракеты, любое оружие (кроме специально оформленного).',
    meta: ['Взрывчатка', 'Боеприпасы', 'Оружие'],
  },
  {
    title: 'Опасные вещества',
    badge: 'Запрещено',
    description:
      'Токсичные, ядовитые и радиоактивные вещества, легковоспламеняющиеся жидкости (метанол, ацетон, бензин), сжатые газы полностью запрещены к перевозке.',
    meta: ['Токсичные', 'Легковоспламеняющиеся', 'Сжатые газы'],
  },
]

export const BAGGAGE_SERVICES_CARDS: InfoCardItem[] = [
  {
    title: 'Упаковка багажа',
    badge: 'от 700 ₽',
    description:
      'Стойки упаковки расположены на уровне 1, напротив входов №2 и №3. Стоимость от 700 до 2 700 рублей в зависимости от размера. Также доступны чехлы для чемоданов (2 100–2 700 ₽).',
    meta: ['Уровень 1', 'Входы №2 и №3', 'Чехлы 2 100–2 700 ₽'],
  },
  {
    title: 'Хранение багажа',
    badge: 'от 500 ₽',
    description:
      'Камера хранения находится на цокольном этаже зала прилёта. Стоимость от 500 до 1 500 рублей за сутки в зависимости от размера вещей.',
    meta: ['Цокольный этаж', 'Зал прилёта', 'Посуточная оплата'],
  },
  {
    title: 'Доставка багажа',
    badge: 'от 2 100 ₽',
    description:
      'Служба доставки багажа по Москве и области. Стоимость зависит от зоны доставки: от 2 100 до 3 300 рублей.',
    meta: ['Москва и область', 'Зоны доставки', '2 100–3 300 ₽'],
  },
]

export const BAGGAGE_SPECIAL_CARDS: InfoCardItem[] = [
  {
    title: 'Негабаритный багаж',
    badge: 'Стойки 46, 96',
    description:
      'Спортивное снаряжение, музыкальные инструменты и другой негабаритный багаж регистрируется отдельно на стойках 46 и 96. Оплата по фактическому весу.',
    meta: ['Спортивный инвентарь', 'Музыкальные инструменты', 'По весу'],
  },
  {
    title: 'Животные',
    badge: 'Ветконтроль',
    description:
      'Перевозка животных требует обязательного ветеринарного контроля. Переноски для животных можно приобрести в аэропорту (2 850–4 500 ₽). GPS-трекеры — 5 700 ₽.',
    meta: ['Ветеринарный контроль', 'Переноски', 'GPS-трекеры'],
  },
  {
    title: 'Растения и оружие',
    badge: 'Контроль',
    description:
      'Растения требуют фитосанитарного контроля. Оружие декларируется при регистрации и сдаётся на временное хранение на время полёта.',
    meta: ['Фитосанитарный контроль', 'Декларирование', 'Временное хранение'],
  },
]

export const BAGGAGE_TIPS: ChecklistItem[] = [
  {
    title: 'Что проверить перед вылетом',
    text: 'Уточните нормы багажа у вашей авиакомпании. Взвесьте чемодан дома, чтобы избежать доплаты в аэропорту.',
  },
  {
    title: 'Ручная кладь',
    text: 'Убедитесь, что жидкости упакованы в прозрачный пакет. Ноутбук и планшет при досмотре нужно доставать из сумки.',
  },
  {
    title: 'Запрещённые предметы',
    text: 'Полный список запрещённых предметов уточняйте на сайте авиакомпании или аэропорта. При сомнениях — сдайте вещь в багаж.',
  },
]

export const MOCK_FLIGHT_DATA: Record<'departure' | 'arrival', Flight[]> = {
  departure: [
    {
      id: 'dep-1',
      flightNumber: 'SU 1234',
      airline: 'Аэрофлот',
      city: 'Санкт-Петербург',
      direction: 'Санкт-Петербург',
      terminal: 'T2',
      gate: 'A12',
      scheduledTime: '06:30',
      status: 'Вылетел',
    },
    {
      id: 'dep-2',
      flightNumber: 'S7 1045',
      airline: 'S7 Airlines',
      city: 'Сочи',
      direction: 'Сочи',
      terminal: 'T1',
      gate: 'B4',
      scheduledTime: '07:15',
      status: 'По расписанию',
    },
    {
      id: 'dep-3',
      flightNumber: 'U6 2871',
      airline: 'Уральские авиалинии',
      city: 'Екатеринбург',
      direction: 'Екатеринбург',
      terminal: 'T2',
      gate: 'C7',
      scheduledTime: '08:00',
      status: 'Регистрация',
    },
    {
      id: 'dep-4',
      flightNumber: 'DP 406',
      airline: 'Победа',
      city: 'Казань',
      direction: 'Казань',
      terminal: 'T1',
      gate: 'D2',
      scheduledTime: '09:20',
      status: 'Посадка',
    },
    {
      id: 'dep-5',
      flightNumber: 'SU 1500',
      airline: 'Аэрофлот',
      city: 'Новосибирск',
      direction: 'Новосибирск',
      terminal: 'T2',
      gate: 'A8',
      scheduledTime: '10:45',
      status: 'Задержан',
    },
  ],
  arrival: [
    {
      id: 'arr-1',
      flightNumber: 'SU 1235',
      airline: 'Аэрофлот',
      city: 'Санкт-Петербург',
      direction: 'Санкт-Петербург',
      terminal: 'T2',
      gate: '—',
      scheduledTime: '07:00',
      status: 'Прибыл',
    },
    {
      id: 'arr-2',
      flightNumber: 'S7 1046',
      airline: 'S7 Airlines',
      city: 'Сочи',
      direction: 'Сочи',
      terminal: 'T1',
      gate: '—',
      scheduledTime: '08:30',
      status: 'Прибыл',
    },
    {
      id: 'arr-3',
      flightNumber: 'U6 2872',
      airline: 'Уральские авиалинии',
      city: 'Екатеринбург',
      direction: 'Екатеринбург',
      terminal: 'T2',
      gate: '—',
      scheduledTime: '09:45',
      status: 'По расписанию',
    },
    {
      id: 'arr-4',
      flightNumber: 'DP 407',
      airline: 'Победа',
      city: 'Владивосток',
      direction: 'Владивосток',
      terminal: 'T1',
      gate: '—',
      scheduledTime: '11:10',
      status: 'Задержан',
    },
    {
      id: 'arr-5',
      flightNumber: 'SU 1501',
      airline: 'Аэрофлот',
      city: 'Новосибирск',
      direction: 'Новосибирск',
      terminal: 'T2',
      gate: '—',
      scheduledTime: '12:20',
      status: 'По расписанию',
    },
  ],
}
