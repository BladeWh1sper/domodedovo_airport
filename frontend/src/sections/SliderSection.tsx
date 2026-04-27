import { useState } from 'react'
import { SLIDES } from '../data/constants'
import { Container } from '../components/Container'

interface SliderSectionProps {
  isMobile: boolean
  isTablet: boolean
}

export function SliderSection({ isMobile, isTablet }: SliderSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = SLIDES[activeIndex]

  if (isMobile || isTablet) {
    return (
      <section className="w-full py-[56px]">
        <Container mobile={isMobile}>
          <div className="flex w-full min-w-0 flex-col gap-[24px]">
            <div className="block w-full overflow-hidden rounded-[20px]">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-[8px]">
              <h2
                className="font-['Inter:Semi_Bold',sans-serif] text-[28px] font-semibold leading-[1.15] tracking-[-0.56px] text-[var(--slider-title)]"
                style={{ overflowWrap: 'anywhere' }}
              >
                {activeSlide.title}
              </h2>
              <p
                className="font-['Inter:Medium',sans-serif] text-[18px] font-medium leading-[1.45] tracking-[-0.09px] text-[var(--slider-subtitle)]"
                style={{ overflowWrap: 'anywhere' }}
              >
                {activeSlide.subtitle}
              </p>
            </div>

            <div className="flex w-full gap-[12px] overflow-x-auto pb-[4px]">
              {SLIDES.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[12px] border ${
                    activeIndex === index
                      ? 'border-[var(--slider-thumb-active)]'
                      : 'border-[var(--slider-thumb-border)]'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="w-full py-[70px]">
      <Container>
        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch gap-[40px]">
          <div className="block min-w-0 overflow-hidden rounded-[20px]">
            <div className="relative aspect-[637/475] w-full">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-between gap-[24px]">
            <div className="flex min-w-0 max-w-[420px] flex-col gap-[8px]">
              <h2
                className="font-['Inter:Semi_Bold',sans-serif] text-[40px] font-semibold leading-[1.05] tracking-[-0.8px] text-[var(--slider-title)]"
                style={{ overflowWrap: 'anywhere' }}
              >
                {activeSlide.title}
              </h2>
              <p
                className="font-['Inter:Medium',sans-serif] text-[18px] font-medium leading-[1.4] tracking-[-0.09px] text-[var(--slider-subtitle)]"
                style={{ overflowWrap: 'anywhere' }}
              >
                {activeSlide.subtitle}
              </p>
            </div>

            <div className="flex w-full gap-[12px] overflow-x-auto pb-[4px]">
              {SLIDES.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[12px] border ${
                    activeIndex === index
                      ? 'border-[var(--slider-thumb-active)]'
                      : 'border-[var(--slider-thumb-border)]'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
