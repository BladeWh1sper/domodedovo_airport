import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export function useTheme() {
  const value = useContext(ThemeContext)

  if (!value) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider')
  }

  return value
}
