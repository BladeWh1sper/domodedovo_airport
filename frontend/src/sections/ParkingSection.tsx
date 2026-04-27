import { ChecklistCard } from '../components/ChecklistCard'
import { Container } from '../components/Container'
import { InfoCard } from '../components/InfoCard'
import { SectionHeading } from '../components/SectionHeading'
import { PARKING_CARDS, PARKING_STEPS } from '../data/constants'

interface ParkingSectionProps {
  isMobile: boolean
  isTablet: boolean
}

export function ParkingSection({ isMobile, isTablet }: ParkingSectionProps) {
  return (
    <section className="w-full bg-[var(--parking-bg)] py-[56px] md:py-[72px]">
      <Container mobile={isMobile}>
        <div className="mx-auto flex w-full max-w-[1440px] min-w-0 flex-col gap-[28px]">
          <SectionHeading
            title="Официальный паркинг"
            subtitle="Короткая остановка, длительная стоянка, расчет стоимости и правила пользования парковкой."
          />

          <div
            className={`grid min-w-0 gap-[20px] ${
              isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
            }`}
          >
            {PARKING_CARDS.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>

          <div
            className={`grid min-w-0 gap-[18px] ${
              isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-1' : 'grid-cols-3'
            }`}
          >
            {PARKING_STEPS.map((item) => (
              <ChecklistCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
