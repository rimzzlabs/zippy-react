import { useMediaQuery } from './useMediaQuery'

const opts = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

/**
 * It returns a boolean value that indicates whether the current viewport width is greater than or
 * equal to the value of the size parameter
 * @param size - **sm:** `640px`
 * - **md:** `768px`
 * - **lg:** `1024px`
 * - **xl:** `1280px`
 * - **2xl:** `1536px`
 * @returns A boolean value
 */
export const useMediaLayout = (size: keyof typeof opts) => {
  return useMediaQuery(`(min-width: ${opts[size]})`)
}
