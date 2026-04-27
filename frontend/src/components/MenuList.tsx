import { Link } from 'react-router-dom'
import { HOME_MENU, PAGE_PATHS } from '../data/constants'
import { ArrowIcon } from './ArrowIcon'

export function MenuList() {
  return (
    <section className="flex w-full min-w-0 flex-col items-start gap-[12px]">
      {HOME_MENU.map((item) => (
        <Link
          key={item.title}
          to={PAGE_PATHS.home}
          className="group flex min-h-[72px] w-full min-w-0 items-center justify-between gap-[16px] rounded-[16px] border border-[var(--menu-border)] px-[24px] py-[20px] text-left transition-all hover:border-[var(--menu-border-hover)]"
        >
          <div className="flex min-w-0 items-center gap-[8px]">
            <div
              className="min-w-0 font-['Inter:Medium',sans-serif] text-[18px] font-medium leading-[1.25] tracking-[-0.22px] text-[var(--menu-text)] md:text-[22px]"
              style={{ overflowWrap: 'anywhere' }}
            >
              {item.title}
            </div>

            {item.external && (
              <div className="font-['Inter:Medium',sans-serif] shrink-0 text-[14px] font-medium leading-none text-[var(--menu-ext)]">
                ↗
              </div>
            )}
          </div>

          <ArrowIcon />
        </Link>
      ))}
    </section>
  )
}
