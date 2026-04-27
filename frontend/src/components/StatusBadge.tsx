function mapStatus(status: string) {
  const normalized = String(status || '').toLowerCase()

  if (
    normalized.includes('departed') ||
    normalized.includes('вылетел') ||
    normalized.includes('улетел')
  ) {
    return { label: 'Вылетел', tone: 'success' }
  }

  if (
    normalized.includes('arrived') ||
    normalized.includes('прибыл') ||
    normalized.includes('приземлился')
  ) {
    return { label: 'Прибыл', tone: 'success' }
  }

  if (
    normalized.includes('delayed') ||
    normalized.includes('задерж') ||
    normalized.includes('late')
  ) {
    return { label: 'Задержан', tone: 'warning' }
  }

  if (
    normalized.includes('cancelled') ||
    normalized.includes('отмен') ||
    normalized.includes('canceled')
  ) {
    return { label: 'Отменён', tone: 'danger' }
  }

  if (normalized.includes('boarding') || normalized.includes('посадка')) {
    return { label: 'Посадка', tone: 'info' }
  }

  if (normalized.includes('check-in') || normalized.includes('регистрац')) {
    return { label: 'Регистрация', tone: 'info' }
  }

  if (
    normalized.includes('scheduled') ||
    normalized.includes('по расписанию') ||
    normalized.includes('on time')
  ) {
    return { label: 'По расписанию', tone: 'neutral' }
  }

  return { label: status || 'Уточняется', tone: 'neutral' }
}

export function StatusBadge({ status }: { status: string }) {
  const mapped = mapStatus(status)

  const toneClass =
    mapped.tone === 'success'
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : mapped.tone === 'warning'
        ? 'bg-amber-50 text-amber-700 border-amber-200'
        : mapped.tone === 'danger'
          ? 'bg-rose-50 text-rose-700 border-rose-200'
          : mapped.tone === 'info'
            ? 'bg-sky-50 text-sky-700 border-sky-200'
            : 'bg-[var(--status-neutral-bg)] text-[var(--status-neutral-text)] border-[var(--status-neutral-border)]'

  return (
    <span
      className={`inline-flex items-center rounded-full border px-[10px] py-[6px] text-[12px] font-medium ${toneClass}`}
    >
      {mapped.label}
    </span>
  )
}
