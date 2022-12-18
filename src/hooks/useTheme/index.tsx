import { AtomTheme } from './store'

import { useAtom } from 'jotai'
import { useCallback, useEffect } from 'react'

export const useTheme = () => {
  const [theme, sT] = useAtom(AtomTheme)

  const toggleTheme = useCallback(() => sT((prev) => (prev === 'dark' ? 'light' : 'dark')), [sT])

  useEffect(() => {
    const html = document.documentElement
    html.className = theme
  }, [theme])

  return [theme, toggleTheme] as const
}
