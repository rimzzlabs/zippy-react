import { clsxm } from '@/util/clsxm'

import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton'

import { forwardRef } from 'react'

export const WarningButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>((props, ref) => {
  return (
    <UnstyledButton
      {...props}
      className={clsxm(
        'bg-orange-600 text-white',
        'hover:bg-orange-700 active:bg-orange-800',
        'ring-orange-600 ring-offset-orange-100',
        props.className
      )}
      ref={ref}
    >
      {props.children}
    </UnstyledButton>
  )
})

WarningButton.displayName = 'WarningButton'
