import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { getPageKeyByPathname } from '../data/constants'
import { useTheme } from '../hooks/useTheme'
import { useViewport } from '../hooks/useViewport'
import { Footer } from './Footer'
import { HeroSection } from '../sections/HeroSection'

const pageVariants = {
  initial: { opacity: 0, y: 22 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
}

export function Layout() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { isMobile, isTablet } = useViewport()
  const currentPage = getPageKeyByPathname(location.pathname)

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--page-bg)]">
      <div className="flex-1">
        <HeroSection
          currentPage={currentPage}
          isMobile={isMobile}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer isMobile={isMobile} isTablet={isTablet} />
    </div>
  )
}
