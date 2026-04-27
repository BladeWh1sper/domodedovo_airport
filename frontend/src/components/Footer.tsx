import { Link } from 'react-router-dom'
import { PAGE_PATHS } from '../data/constants'

interface FooterProps {
  isMobile: boolean
  isTablet: boolean
}

export function Footer({ isMobile, isTablet }: FooterProps) {
  return (
    <footer className="w-full bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div
        className={`mx-auto w-full max-w-[1440px] px-[20px] ${
          !isMobile ? 'md:px-[32px] xl:px-[64px]' : ''
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1440px] min-w-0 ${
            isMobile ? 'flex-col gap-[32px] py-[40px]' : 'flex-col gap-[40px] py-[48px]'
          }`}
        >
          <div
            className={`flex min-w-0 ${
              isMobile || isTablet ? 'flex-col gap-[28px]' : 'items-start justify-between gap-[32px]'
            }`}
          >
            <div className="max-w-[360px] min-w-0">
              <div
                className="mb-[12px] font-['Inter:Semi_Bold',sans-serif] text-[28px] font-semibold tracking-[-0.56px]"
                style={{ overflowWrap: 'anywhere' }}
              >
                Домодедово
              </div>
              <p
                className="text-[15px] leading-[1.6] text-[var(--footer-subtext)]"
                style={{ overflowWrap: 'anywhere' }}
              >
                Международный аэропорт с удобными сервисами для пассажиров, транспорта и парковки.
              </p>
            </div>

            <div
              className={`grid min-w-0 ${
                isMobile
                  ? 'grid-cols-1 gap-[24px]'
                  : isTablet
                    ? 'grid-cols-2 gap-[28px]'
                    : 'grid-cols-4 gap-[32px]'
              }`}
            >
              <div className="flex min-w-0 flex-col gap-[12px]">
                <div className="text-[14px] text-[var(--footer-muted)]">Навигация</div>
                <Link to={PAGE_PATHS.home} className="text-left text-[15px] text-[var(--footer-link)]">
                  Главная
                </Link>
                <Link to={PAGE_PATHS.flight} className="text-left text-[15px] text-[var(--footer-link)]">
                  Табло
                </Link>
                <Link to={PAGE_PATHS.transport} className="text-left text-[15px] text-[var(--footer-link)]">
                  Транспорт
                </Link>
                <Link to={PAGE_PATHS.parking} className="text-left text-[15px] text-[var(--footer-link)]">
                  Парковка
                </Link>
                <Link to={PAGE_PATHS.baggage} className="text-left text-[15px] text-[var(--footer-link)]">
                  Багаж
                </Link>
              </div>

              <div className="flex min-w-0 flex-col gap-[12px]">
                <div className="text-[14px] text-[var(--footer-muted)]">Пассажирам</div>
                <div className="text-[15px] text-[var(--footer-link)]">Онлайн-табло</div>
                <div className="text-[15px] text-[var(--footer-link)]">Регистрация</div>
                <div className="text-[15px] text-[var(--footer-link)]">Багаж</div>
                <div className="text-[15px] text-[var(--footer-link)]">Сервисы</div>
              </div>

              <div className="flex min-w-0 flex-col gap-[12px]">
                <div className="text-[14px] text-[var(--footer-muted)]">Контакты</div>
                <div className="text-[15px] text-[var(--footer-link)]">+7 (495) 000-00-00</div>
                <div className="text-[15px] text-[var(--footer-link)]">info@dme.aero</div>
                <div className="text-[15px] text-[var(--footer-link)]">Москва, Домодедово</div>
              </div>

              <div className="flex min-w-0 flex-col gap-[12px]">
                <div className="text-[14px] text-[var(--footer-muted)]">Режим работы</div>
                <div className="text-[15px] text-[var(--footer-link)]">Круглосуточно</div>
                <div className="text-[15px] text-[var(--footer-link)]">24/7</div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-[10px] border-t border-[var(--footer-border)] pt-[18px] text-[14px] text-[var(--footer-muted)] md:flex-row md:items-center md:justify-between">
            <div style={{ overflowWrap: 'anywhere' }}>© 2026 Домодедово. Концепт интерфейса.</div>
            <div style={{ overflowWrap: 'anywhere' }}>
              Политика конфиденциальности · Пользовательское соглашение
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
