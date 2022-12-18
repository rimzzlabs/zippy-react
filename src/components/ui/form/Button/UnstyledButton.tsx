import { clsxm } from '@/util/clsxm'

import { forwardRef } from 'react'

const btnSize = {
  xs: 'py-1.5 px-2 text-xs',
  sm: 'py-1.5 px-3 text-xs md:text-sm',
  md: 'py-2 px-4 text-xs md:text-sm',
  lg: 'py-3 px-6'
}

export type UnstyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: keyof typeof btnSize
}

export const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>((props, ref) => {
  return (
    <button
      {...props}
      className={clsxm(
        'inline-flex items-center',
        'font-semibold rounded-md outline-none',
        'transition-all ring-primary-400',
        'ring-offset-1 ring-offset-primary-100',
        'focus-visible:ring',
        btnSize[props.size ?? 'md'],
        props.className
      )}
      ref={ref}
    >
      {props.children}
    </button>
  )
})

UnstyledButton.displayName = 'UnstyledButton'
