import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PAGE_PATHS } from '../data/constants'
import type { HeroContent } from '../types'

interface HeroActionsProps {
  page: HeroContent
  isMobile: boolean
}

export function HeroActions({ page, isMobile }: HeroActionsProps) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-[16px] ${isMobile ? 'w-full flex-col' : 'flex-wrap'}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.16, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        whileHover={{ y: -2, scale: 1.03 }}
        whileTap={{ y: 0, scale: 0.97 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        <Link
          to={PAGE_PATHS[page.primaryTarget]}
          className={`${isMobile ? 'w-full max-w-[320px]' : ''} block rounded-[12px] bg-[var(--hero-primary-bg)] px-[18px] py-[13px] shadow-[0_8px_30px_var(--hero-primary-shadow)]`}
        >
          <span className="block max-w-full whitespace-normal break-words font-['Inter:Medium',sans-serif] text-[18px] font-medium leading-[1.45] tracking-[-0.09px] text-[var(--hero-primary-text)]">
            {page.primaryCta}
          </span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ y: -2, scale: 1.03, backgroundColor: 'var(--hero-secondary-hover)' }}
        whileTap={{ y: 0, scale: 0.97 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        <Link
          to={PAGE_PATHS[page.secondaryTarget]}
          className={`${isMobile ? 'w-full max-w-[320px]' : ''} block rounded-[12px] border-2 border-[var(--hero-secondary-border)] bg-[var(--hero-secondary-bg)] px-[18px] py-[13px] backdrop-blur-[6px]`}
        >
          <span className="block max-w-full whitespace-normal break-words font-['Inter:Medium',sans-serif] text-[18px] font-medium leading-[1.45] tracking-[-0.09px] text-[var(--hero-text)]">
            {page.secondaryCta}
          </span>
        </Link>
      </motion.div>
    </motion.div>
  )
}
