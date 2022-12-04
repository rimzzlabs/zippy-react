import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const THEME_KEY = 'X-APP-THEME'

export const useTheme = (): [Theme, () => void] => {
  const loadFromStorage = useCallback(() => {
    return (localStorage.getItem(THEME_KEY) ?? 'light') as Theme
  }, [])
  const [theme, setTheme] = useState<Theme>(loadFromStorage())

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    []
  )
  const reverseTheme = {
    dark: 'light',
    light: 'dark'
  }

  useEffect(() => {
    const html = document.documentElement
    html.className = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return [theme, toggleTheme]
}
