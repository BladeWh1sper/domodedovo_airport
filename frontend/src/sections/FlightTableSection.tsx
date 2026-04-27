import { useState } from 'react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { formatDateTime, formatTime, useFilteredFlights, useFlightBoard } from '../hooks/useFlightBoard'
import type { FlightEvent } from '../types'

interface FlightTableSectionProps {
  isMobile: boolean
}

export function FlightTableSection({ isMobile }: FlightTableSectionProps) {
  const [tab, setTab] = useState<FlightEvent>('departure')
  const [query, setQuery] = useState('')
  const { items, updatedAt, loading, refreshing, error } = useFlightBoard(tab)

  const filteredItems = useFilteredFlights(items, query)

  return (
    <section id="flight-board" className="w-full bg-[var(--flight-bg)] py-[56px] text-[var(--flight-text)] md:py-[72px]">
      <Container mobile={isMobile}>
        <div className="mx-auto flex w-full max-w-[1440px] min-w-0 flex-col gap-[24px]">
          <SectionHeading
            title="Табло рейсов"
            subtitle="Актуальная информация о вылетах и прилётах аэропорта Домодедово."
            dark
          />

          <div className="flex flex-col gap-[16px] rounded-[24px] border border-[var(--flight-panel-border)] bg-[var(--flight-panel-bg)] p-[14px] md:p-[18px]">
            <div
              className={`flex min-w-0 ${
                isMobile ? 'flex-col gap-[12px]' : 'items-center justify-between gap-[16px]'
              }`}
            >
              <div className="flex items-center gap-[10px]">
                <button
                  type="button"
                  onClick={() => setTab('departure')}
                  className={`rounded-[12px] px-[14px] py-[10px] text-[14px] font-medium transition ${
                    tab === 'departure'
                      ? 'bg-[var(--flight-tab-active-bg)] text-[var(--flight-tab-active-text)]'
                      : 'bg-[var(--flight-tab-bg)] text-[var(--flight-tab-text)] hover:bg-[var(--flight-tab-hover-bg)]'
                  }`}
                >
                  Вылет
                </button>

                <button
                  type="button"
                  onClick={() => setTab('arrival')}
                  className={`rounded-[12px] px-[14px] py-[10px] text-[14px] font-medium transition ${
                    tab === 'arrival'
                      ? 'bg-[var(--flight-tab-active-bg)] text-[var(--flight-tab-active-text)]'
                      : 'bg-[var(--flight-tab-bg)] text-[var(--flight-tab-text)] hover:bg-[var(--flight-tab-hover-bg)]'
                  }`}
                >
                  Прилёт
                </button>
              </div>

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск: рейс, авиакомпания, направление"
                className="min-w-0 rounded-[12px] border border-[var(--flight-input-border)] bg-[var(--flight-input-bg)] px-[14px] py-[11px] text-[14px] text-[var(--flight-text)] outline-none placeholder:text-[var(--flight-placeholder)]"
              />
            </div>

            <div
              className={`flex min-w-0 ${
                isMobile ? 'flex-col gap-[8px]' : 'items-center justify-between gap-[12px]'
              } text-[13px] text-[var(--flight-meta)]`}
            >
              <div>Найдено рейсов: {filteredItems.length}</div>
              <div>{refreshing ? 'Обновление…' : `Обновлено: ${formatDateTime(updatedAt)}`}</div>
            </div>

            {loading ? (
              <div className="rounded-[20px] border border-[var(--flight-input-border)] bg-[var(--flight-tab-bg)] p-[24px] text-[15px] text-[var(--flight-tab-text)]">
                Загрузка табло…
              </div>
            ) : error ? (
              <div className="rounded-[20px] border border-rose-400/20 bg-rose-400/10 p-[24px] text-[15px] text-rose-100">
                {error}
              </div>
            ) : (
              <div className="overflow-hidden rounded-[20px] border border-[var(--flight-table-frame)] bg-[var(--flight-table-bg)]">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-[var(--flight-table-text)]">
                    <thead>
                      <tr className="border-b border-[var(--flight-table-head-border)] bg-[var(--flight-table-head-bg)]">
                        <th className="px-[16px] py-[14px] text-[13px] font-semibold text-[var(--flight-table-head-text)]">
                          Время
                        </th>
                        <th className="px-[16px] py-[14px] text-[13px] font-semibold text-[var(--flight-table-head-text)]">
                          Рейс
                        </th>
                        <th className="px-[16px] py-[14px] text-[13px] font-semibold text-[var(--flight-table-head-text)]">
                          Авиакомпания
                        </th>
                        <th className="px-[16px] py-[14px] text-[13px] font-semibold text-[var(--flight-table-head-text)]">
                          {tab === 'departure' ? 'Направление' : 'Откуда'}
                        </th>
                        <th className="px-[16px] py-[14px] text-[13px] font-semibold text-[var(--flight-table-head-text)]">
                          Терминал
                        </th>
                        <th className="px-[16px] py-[14px] text-[13px] font-semibold text-[var(--flight-table-head-text)]">
                          Выход
                        </th>
                        <th className="px-[16px] py-[14px] text-[13px] font-semibold text-[var(--flight-table-head-text)]">
                          Статус
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredItems.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="px-[16px] py-[28px] text-[15px] text-[var(--flight-empty)]">
                            По вашему запросу рейсы не найдены.
                          </td>
                        </tr>
                      ) : (
                        filteredItems.map((flight) => (
                          <tr
                            key={`${tab}-${flight.id}-${flight.scheduledTime}`}
                            className="border-b border-[var(--flight-row-border)] last:border-b-0"
                          >
                            <td className="px-[16px] py-[14px] text-[14px] font-medium">
                              {formatTime(flight.scheduledTime)}
                            </td>
                            <td className="px-[16px] py-[14px] text-[14px] font-semibold">{flight.flightNumber}</td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[var(--flight-table-muted)]">
                              {flight.airline}
                            </td>
                            <td className="px-[16px] py-[14px] text-[14px]">{flight.city}</td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[var(--flight-table-muted)]">
                              {flight.terminal}
                            </td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[var(--flight-table-muted)]">
                              {flight.gate}
                            </td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[var(--flight-table-muted)]">
                              {flight.status}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="text-[12px] text-[var(--flight-source)]">Источник данных: Яндекс Расписания</div>
          </div>
        </div>
      </Container>
    </section>
  )
}
