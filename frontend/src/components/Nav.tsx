import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { NavItem, PageKey } from '../types'

interface NavProps {
  currentPage: PageKey
  items: NavItem[]
  mobile?: boolean
}

export function Nav({ currentPage, items, mobile = false }: NavProps) {
  return (
    <nav
      className={`flex min-w-0 ${
        mobile
          ? 'w-full flex-wrap items-center justify-center gap-[4px] sm:gap-[6px]'
          : 'flex-1 flex-wrap items-center justify-end gap-[6px]'
      }`}
    >
      {items.map((item) => {
        const isActive = currentPage === item.key

        return (
          <motion.div
            key={item.key}
            className={`relative overflow-hidden rounded-[14px] ${
              mobile ? 'px-[10px] py-[8px] sm:px-[12px] sm:py-[10px]' : 'px-[14px] py-[10px]'
            }`}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            <motion.span
              className="absolute inset-0 rounded-[14px] border"
              animate={{
                backgroundColor: isActive
                  ? 'rgba(var(--hero-nav-active-bg-rgb), 0.16)'
                  : 'rgba(var(--hero-nav-active-bg-rgb), 0)',
                borderColor: isActive
                  ? 'rgba(var(--hero-nav-border-rgb), 0.28)'
                  : 'rgba(var(--hero-nav-border-rgb), 0)',
              }}
              transition={{ duration: 0.2 }}
            />

            <Link
              to={item.path}
              className={`relative block max-w-full whitespace-nowrap font-['Inter:Medium',sans-serif] font-medium tracking-[-0.08px] text-[var(--hero-text)] ${
                mobile ? 'text-[13px] sm:text-[14px]' : 'text-[15px]'
              }`}
            >
              {item.label}
            </Link>

            {isActive && (
              <motion.span
                layoutId={mobile ? 'nav-active-pill-mobile' : 'nav-active-pill-desktop'}
                className="absolute bottom-[6px] left-[12px] right-[12px] h-[2px] rounded-full bg-[var(--hero-text)]"
                transition={{ type: 'spring', stiffness: 500, damping: 38 }}
              />
            )}
          </motion.div>
        )
      })}
    </nav>
  )
}
