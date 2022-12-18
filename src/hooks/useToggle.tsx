import { useCallback, useState } from 'react'

export const useToggle = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return [isOpen, open, close, toggle] as const
}
