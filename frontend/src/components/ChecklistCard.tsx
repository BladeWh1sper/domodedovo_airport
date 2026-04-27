import type { ChecklistItem } from '../types'

export function ChecklistCard({ title, text }: ChecklistItem) {
  return (
    <div className="min-w-0 rounded-[22px] border border-[var(--card-border)] bg-[var(--card-bg)] p-[22px]">
      <div
        className="mb-[10px] font-['Inter:Semi_Bold',sans-serif] text-[22px] font-semibold leading-[1.15] tracking-[-0.22px] text-[var(--card-text)]"
        style={{ overflowWrap: 'anywhere' }}
      >
        {title}
      </div>
      <p
        className="text-[16px] leading-[1.65] text-[var(--card-description)]"
        style={{ overflowWrap: 'anywhere' }}
      >
        {text}
      </p>
    </div>
  )
}
