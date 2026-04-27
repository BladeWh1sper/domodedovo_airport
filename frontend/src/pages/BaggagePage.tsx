import { useViewport } from '../hooks/useViewport'
import { BaggageSection } from '../sections/BaggageSection'

export function BaggagePage() {
  const { isMobile, isTablet } = useViewport()

  return <BaggageSection isMobile={isMobile} isTablet={isTablet} />
}
