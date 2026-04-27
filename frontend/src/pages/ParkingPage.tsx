import { useViewport } from '../hooks/useViewport'
import { ParkingSection } from '../sections/ParkingSection'

export function ParkingPage() {
  const { isMobile, isTablet } = useViewport()

  return <ParkingSection isMobile={isMobile} isTablet={isTablet} />
}
