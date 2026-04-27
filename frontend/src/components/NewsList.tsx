import { HOME_NEWS } from '../data/constants'

export function NewsList() {
  return (
    <section className="flex w-full min-w-0 flex-col items-start gap-[32px]">
      <div className="font-['Inter:Semi_Bold',sans-serif] text-[26px] font-semibold leading-[1.1] tracking-[-0.72px] text-[var(--news-heading)] md:text-[36px]">
        Новости
      </div>

      <div className="flex w-full min-w-0 flex-col gap-[24px]">
        {HOME_NEWS.map((item) => (
          <article
            key={item.title}
            className="flex w-full min-w-0 flex-col items-start gap-[10px] border-b border-[var(--news-divider)] pb-[20px]"
          >
            <h2
              className="font-['Inter:Medium',sans-serif] text-[24px] font-medium leading-[1.25] tracking-[-0.24px] text-[var(--news-title)]"
              style={{ overflowWrap: 'anywhere' }}
            >
              {item.title}
            </h2>

            <div className="font-['Inter:Regular',sans-serif] text-[16px] leading-[1.4] tracking-[-0.08px] text-[var(--news-date)]">
              {item.date}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
