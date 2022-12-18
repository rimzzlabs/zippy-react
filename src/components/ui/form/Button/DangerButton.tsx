import { clsxm } from '@/util/clsxm'

import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton'

import { forwardRef } from 'react'

export const DangerButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>((props, ref) => {
  return (
    <UnstyledButton
      {...props}
      className={clsxm(
        'bg-red-600 text-white',
        'hover:bg-red-700 active:bg-red-800',
        'ring-red-600 ring-offset-red-100',
        props.className
      )}
      ref={ref}
    >
      {props.children}
    </UnstyledButton>
  )
})

DangerButton.displayName = 'DangerButton'
