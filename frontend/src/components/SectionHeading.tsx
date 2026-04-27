interface SectionHeadingProps {
  title: string
  subtitle: string
  dark?: boolean
}

export function SectionHeading({ title, subtitle, dark = false }: SectionHeadingProps) {
  return (
    <div className="flex min-w-0 flex-col gap-[10px]">
      <h2
        className={`font-['Inter:Semi_Bold',sans-serif] text-[32px] font-semibold leading-[1.05] tracking-[-0.64px] md:text-[40px] ${
          dark ? 'text-[var(--section-heading-dark)]' : 'text-[var(--section-heading)]'
        }`}
        style={{ overflowWrap: 'anywhere' }}
      >
        {title}
      </h2>
      <p
        className={`max-w-[780px] font-['Inter:Regular',sans-serif] text-[16px] leading-[1.6] md:text-[18px] ${
          dark ? 'text-[var(--section-subtitle-dark)]' : 'text-[var(--section-subtitle)]'
        }`}
        style={{ overflowWrap: 'anywhere' }}
      >
        {subtitle}
      </p>
    </div>
  )
}
