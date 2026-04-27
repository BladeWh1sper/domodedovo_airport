import { AnimatePresence, motion } from 'framer-motion'
import { HERO_IMAGE, PAGE_CONTENT } from '../data/constants'
import type { PageKey } from '../types'
import { HeroActions } from '../components/HeroActions'
import { TitleBlock } from '../components/TitleBlock'
import { Header } from '../components/Header'

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

interface HeroSectionProps {
  currentPage: PageKey
  isMobile: boolean
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function HeroSection({ currentPage, isMobile, theme, onToggleTheme }: HeroSectionProps) {
  const page = PAGE_CONTENT[currentPage]

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[var(--hero-fallback)]">
      <motion.img
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_IMAGE}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-[var(--hero-overlay)]" />
      <div className="absolute inset-0 bg-[var(--hero-gradient)]" />

      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <Header
          currentPage={currentPage}
          isMobile={isMobile}
          theme={theme}
          onToggleTheme={onToggleTheme}
        />

        <div
          className={`mx-auto w-full max-w-[1440px] px-[20px] ${!isMobile ? 'md:px-[32px] xl:px-[64px]' : ''}`}
        >
          <div
            className={`flex min-h-[calc(100vh-96px)] w-full flex-col items-center justify-center ${
              isMobile ? 'gap-[24px] py-[40px]' : 'gap-[32px] py-[40px]'
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="flex w-full min-w-0 flex-col items-center gap-[24px]"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <TitleBlock title={page.title} subtitle={page.subtitle} isMobile={isMobile} />
                <HeroActions page={page} isMobile={isMobile} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
