import { motion } from 'framer-motion'

interface TitleBlockProps {
  title: string
  subtitle: string
  isMobile: boolean
}

export function TitleBlock({ title, subtitle, isMobile }: TitleBlockProps) {
  return (
    <motion.div
      className="flex w-full min-w-0 flex-col items-center gap-[16px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1
        className={`w-full max-w-[820px] text-center font-['Inter:Bold',sans-serif] font-bold leading-[1.08] tracking-[-1.28px] text-[var(--hero-text)] ${
          isMobile ? 'text-[28px] sm:text-[34px]' : 'text-[48px] xl:text-[64px]'
        }`}
        style={{ overflowWrap: 'anywhere' }}
      >
        {title}
      </h1>
      <p
        className={`w-full max-w-[680px] text-center font-['Inter:Regular',sans-serif] leading-[1.55] tracking-[-0.09px] text-[var(--hero-subtext)] ${
          isMobile ? 'text-[16px]' : 'text-[18px]'
        }`}
        style={{ overflowWrap: 'anywhere' }}
      >
        {subtitle}
      </p>
    </motion.div>
  )
}
