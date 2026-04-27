import type { InfoCardItem } from '../types'

export function InfoCard({ title, badge, description, meta }: InfoCardItem) {
  return (
    <div className="min-w-0 rounded-[24px] border border-[var(--card-border)] bg-[var(--card-bg)] p-[24px] text-[var(--card-text)]">
      <div className="mb-[16px] flex min-w-0 items-start justify-between gap-[12px]">
        <h3
          className="min-w-0 font-['Inter:Semi_Bold',sans-serif] text-[20px] font-semibold leading-[1.1] tracking-[-0.48px] md:text-[24px]"
          style={{ overflowWrap: 'anywhere' }}
        >
          {title}
        </h3>
        <div className="shrink-0 rounded-full bg-[var(--card-pill-bg)] px-[12px] py-[7px] text-[13px] font-medium text-[var(--card-pill-text)]">
          {badge}
        </div>
      </div>

      <p
        className="mb-[18px] text-[16px] leading-[1.65] text-[var(--card-description)]"
        style={{ overflowWrap: 'anywhere' }}
      >
        {description}
      </p>

      <div className="flex flex-wrap gap-[8px]">
        {meta.map((item) => (
          <div
            key={item}
            className="max-w-full rounded-full bg-[var(--card-pill-bg)] px-[12px] py-[8px] text-[13px] text-[var(--card-description)]"
            style={{ overflowWrap: 'anywhere' }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
