import { MenuList } from '../components/MenuList'
import { NewsList } from '../components/NewsList'
import { Container } from '../components/Container'

interface HomeInfoSectionProps {
  isMobile: boolean
  isTablet: boolean
}

export function HomeInfoSection({ isMobile, isTablet }: HomeInfoSectionProps) {
  if (isMobile || isTablet) {
    return (
      <section className="w-full py-[72px]">
        <Container mobile={isMobile}>
          <div className="flex w-full min-w-0 flex-col items-start gap-[40px]">
            <NewsList />
            <MenuList />
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="w-full py-[70px]">
      <Container>
        <div className="grid min-w-0 grid-cols-[minmax(0,637px)_minmax(0,1fr)] items-start gap-[64px]">
          <div className="min-w-0">
            <NewsList />
          </div>

          <div className="min-w-0 max-w-[637px]">
            <MenuList />
          </div>
        </div>
      </Container>
    </section>
  )
}
