import { clsxm } from '@/util/clsxm'

import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton'

import { forwardRef } from 'react'

export const SuccessButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>((props, ref) => {
  return (
    <UnstyledButton
      {...props}
      className={clsxm(
        'bg-emerald-500 text-white',
        'hover:bg-emerald-600 active:bg-emerald-700',
        'ring-emerald-500 ring-offset-emerald-100',
        props.className
      )}
      ref={ref}
    >
      {props.children}
    </UnstyledButton>
  )
})

SuccessButton.displayName = 'SuccessButton'
