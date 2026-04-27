import { useEffect, useMemo, useState } from 'react'
import { MOCK_FLIGHT_DATA } from '../data/constants'
import type { Flight, FlightEvent } from '../types'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api'

export function formatTime(value: string | null) {
  if (!value) return '—'

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export function formatDateTime(value: string | null) {
  if (!value) return '—'

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export function useFlightBoard(type: FlightEvent = 'departure') {
  const [items, setItems] = useState<Flight[]>([])
  const [updatedAt, setUpdatedAt] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    async function loadFlights(silent = false) {
      try {
        if (silent) {
          setRefreshing(true)
        } else {
          setLoading(true)
        }

        setError('')

        const today = new Date().toISOString().slice(0, 10)

        const url = new URL(`${API_BASE}/flights`)
        url.searchParams.set('type', type)
        url.searchParams.set('date', today)

        const res = await fetch(url.toString(), {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        })

        const data = await res.json()

        if (!res.ok) {
          throw new Error(data?.error || `HTTP ${res.status}`)
        }

        type BackendFlight = {
          id: string
          event: FlightEvent
          flightNumber: string
          title: string
          airline: string
          airlineCode: string
          city: string
          terminal: string
          gate: string
          station: string
          transportSubtype: string
          timezone: string
          scheduledTime: string | null
          actualTime: string | null
          rawStatus: string
        }

        const flights = Array.isArray(data.flights)
          ? (data.flights as BackendFlight[])
          : []

        const mapped: Flight[] = flights.map((item) => ({
          id: item.id,
          flightNumber: item.flightNumber || '—',
          airline: item.airline || '—',
          city: item.city || '—',
          direction: item.title || item.city || '—',
          scheduledTime: item.scheduledTime || null,
          terminal: item.terminal || '—',
          gate: item.gate || '—',
          status: 'По расписанию',
        }))

        if (!cancelled) {
          setItems(mapped)
          setUpdatedAt(data.updatedAt || new Date().toISOString())
        }
      } catch (err) {
        if (!cancelled) {
          setItems(MOCK_FLIGHT_DATA[type] || [])
          setUpdatedAt(new Date().toISOString())
          setError(err instanceof Error ? err.message : 'Не удалось загрузить рейсы')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
          setRefreshing(false)
        }
      }
    }

    loadFlights(false)

    const timer = setInterval(() => loadFlights(true), 60_000)

    return () => {
      cancelled = true
      clearInterval(timer)
    }
  }, [type])

  return { items, updatedAt, loading, refreshing, error }
}

export function useFilteredFlights(items: Flight[], query: string) {
  return useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return items.filter((item) => {
      const text = [
        item.flightNumber,
        item.airline,
        item.city,
        item.direction,
        item.terminal,
        item.gate,
        item.status,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return text.includes(normalizedQuery)
    })
  }, [items, query])
}