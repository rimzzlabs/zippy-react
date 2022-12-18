import { atomWithStorage } from 'jotai/utils'

export type Theme = 'light' | 'dark'

export const AtomTheme = atomWithStorage<Theme>('X_APP_THEME', 'light')
