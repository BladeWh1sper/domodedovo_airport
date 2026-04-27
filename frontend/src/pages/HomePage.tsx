import { useViewport } from '../hooks/useViewport'
import { HomeInfoSection } from '../sections/HomeInfoSection'
import { SliderSection } from '../sections/SliderSection'

export function HomePage() {
  const { isMobile, isTablet } = useViewport()

  return (
    <div className="bg-[var(--surface-bg)]">
      <SliderSection isMobile={isMobile} isTablet={isTablet} />
      <HomeInfoSection isMobile={isMobile} isTablet={isTablet} />
    </div>
  )
}
