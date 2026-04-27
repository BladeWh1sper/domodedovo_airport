import { useViewport } from '../hooks/useViewport'
import { FlightTableSection } from '../sections/FlightTableSection'

export function FlightPage() {
  const { isMobile } = useViewport()

  return <FlightTableSection isMobile={isMobile} />
}
