import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LOGO_IMAGE, NAV_ITEMS } from '../data/constants'
import type { PageKey, ThemeMode } from '../types'
import { Nav } from './Nav'
import { Container } from './Container'

interface HeaderProps {
  currentPage: PageKey
  isMobile: boolean
  theme: ThemeMode
  onToggleTheme: () => void
}

export function Header({ currentPage, isMobile, theme, onToggleTheme }: HeaderProps) {
  return (
    <motion.header
      className="relative z-20 w-full shrink-0"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container mobile={isMobile}>
        <div
          className={`flex w-full min-w-0 ${
            isMobile
              ? 'flex-col items-center gap-[14px] py-[20px]'
              : 'items-center justify-between gap-[16px] py-[24px]'
          }`}
        >
          <div className="flex items-center gap-[10px]">
            <Link
              to="/"
              className="relative block size-[40px] shrink-0 overflow-hidden rounded-full"
              aria-label="Домой"
            >
              <motion.img
                alt="Logomark"
                className="absolute inset-0 h-full w-full object-cover"
                src={LOGO_IMAGE}
                whileHover={{ rotate: -6, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            <motion.button
              type="button"
              className="rounded-[12px] border border-[var(--hero-toggle-border)] bg-[var(--hero-toggle-bg)] px-[10px] py-[8px] font-['Inter:Medium',sans-serif] text-[13px] font-medium text-[var(--hero-text)] backdrop-blur-[6px]"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              onClick={onToggleTheme}
            >
              {theme === 'light' ? 'Тёмная' : 'Светлая'}
            </motion.button>
          </div>

          <Nav currentPage={currentPage} items={NAV_ITEMS} mobile={isMobile} />
        </div>
      </Container>
    </motion.header>
  )
}
