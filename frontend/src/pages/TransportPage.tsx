import { useViewport } from '../hooks/useViewport'
import { TransportSection } from '../sections/TransportSection'

export function TransportPage() {
  const { isMobile, isTablet } = useViewport()

  return (
    <div className="bg-[var(--surface-bg)]">
      <TransportSection isMobile={isMobile} isTablet={isTablet} />
    </div>
  )
}
