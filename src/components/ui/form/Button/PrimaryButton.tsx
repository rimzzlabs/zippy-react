import { clsxm } from '@/util/clsxm'

import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton'

import { forwardRef } from 'react'

export const PrimaryButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>((props, ref) => {
  return (
    <UnstyledButton
      {...props}
      className={clsxm(
        'bg-primary-600 text-white',
        'hover:bg-primary-700 active:bg-primary-800',
        props.className
      )}
      ref={ref}
    >
      {props.children}
    </UnstyledButton>
  )
})

PrimaryButton.displayName = 'PrimaryButton'
