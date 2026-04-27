import { ChecklistCard } from '../components/ChecklistCard'
import { Container } from '../components/Container'
import { InfoCard } from '../components/InfoCard'
import { SectionHeading } from '../components/SectionHeading'
import { TRANSPORT_CARDS, TRANSPORT_TIPS } from '../data/constants'

interface TransportSectionProps {
  isMobile: boolean
  isTablet: boolean
}

export function TransportSection({ isMobile, isTablet }: TransportSectionProps) {
  return (
    <section className="w-full py-[56px] md:py-[72px]">
      <Container mobile={isMobile}>
        <div className="mx-auto flex w-full max-w-[1440px] min-w-0 flex-col gap-[28px]">
          <SectionHeading
            title="Как добраться до аэропорта"
            subtitle="Здесь собраны основные способы поездки до терминала и обратно."
          />

          <div
            className={`grid min-w-0 gap-[20px] ${
              isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
            }`}
          >
            {TRANSPORT_CARDS.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>

          <div
            className={`grid min-w-0 gap-[18px] ${
              isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-1' : 'grid-cols-3'
            }`}
          >
            {TRANSPORT_TIPS.map((item) => (
              <ChecklistCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
