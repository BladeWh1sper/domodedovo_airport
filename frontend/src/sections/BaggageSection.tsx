import { ChecklistCard } from '../components/ChecklistCard'
import { Container } from '../components/Container'
import { InfoCard } from '../components/InfoCard'
import { SectionHeading } from '../components/SectionHeading'
import {
  BAGGAGE_PROHIBITED_CARDS,
  BAGGAGE_RULES_CARDS,
  BAGGAGE_SERVICES_CARDS,
  BAGGAGE_SPECIAL_CARDS,
  BAGGAGE_TIPS,
} from '../data/constants'

interface BaggageSectionProps {
  isMobile: boolean
  isTablet: boolean
}

export function BaggageSection({ isMobile, isTablet }: BaggageSectionProps) {
  return (
    <div className="bg-[var(--surface-bg)]">
      <section className="w-full py-[56px] md:py-[72px]">
        <Container mobile={isMobile}>
          <div className="mx-auto flex w-full max-w-[1440px] min-w-0 flex-col gap-[40px]">
            <div className="flex flex-col gap-[28px]">
              <SectionHeading
                title="Правила провоза багажа"
                subtitle="Нормы веса, ручная кладь и жидкости — основная информация для пассажиров."
              />
              <div
                className={`grid min-w-0 gap-[20px] ${
                  isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
                }`}
              >
                {BAGGAGE_RULES_CARDS.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[28px]">
              <SectionHeading
                title="Запрещённые предметы"
                subtitle="Перечень предметов и веществ, запрещённых к перевозке воздушным транспортом."
              />
              <div className={`grid min-w-0 gap-[20px] ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {BAGGAGE_PROHIBITED_CARDS.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[28px]">
              <SectionHeading
                title="Услуги аэропорта"
                subtitle="Упаковка, хранение и доставка багажа в аэропорту Домодедово."
              />
              <div
                className={`grid min-w-0 gap-[20px] ${
                  isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
                }`}
              >
                {BAGGAGE_SERVICES_CARDS.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[28px]">
              <SectionHeading
                title="Негабаритный багаж и особые категории"
                subtitle="Спортивное снаряжение, животные, растения и оружие — правила перевозки."
              />
              <div
                className={`grid min-w-0 gap-[20px] ${
                  isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
                }`}
              >
                {BAGGAGE_SPECIAL_CARDS.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
              </div>
            </div>

            <div
              className={`grid min-w-0 gap-[18px] ${
                isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-1' : 'grid-cols-3'
              }`}
            >
              {BAGGAGE_TIPS.map((item) => (
                <ChecklistCard key={item.title} title={item.title} text={item.text} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
