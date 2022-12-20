import { useToggle } from '@/hooks'

import { clsxm } from '@/util/clsxm'

import { UnstyledButton } from '../Button'

import { forwardRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

const INPUT_SIZE = {
  sm: 'h-7 px-2 py-1 text-sm placeholder:text-sm',
  md: 'h-9 px-2.5 py-1 text-sm placeholder:text-sm',
  lg: 'h-11 px-2 py-1'
}

export type InputProps = {
  size?: keyof typeof INPUT_SIZE
  isError?: boolean
  helperText?: string
  id: string
  name: string
  placeholder: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isError, size, helperText, ...props }, ref) => {
    const [isSeen, , , toggle] = useToggle()

    const c = clsxm(
      'rounded transition w-56 bg-theme-50 border-theme-300',
      'focus:outline-none focus:border-primary-500',
      INPUT_SIZE[size ?? 'md'],
      props.className,
      isError && 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50',
      props.disabled && 'cursor-not-allowed opacity-75',
      props.type === 'password' && 'bg-transparent pr-9'
    )

    if (props.type === 'password') {
      return (
        <div className='inline-flex flex-col'>
          <div className='relative'>
            <input
              {...props}
              aria-labelledby={`helper-${props.id}`}
              type={isSeen ? 'text' : props.type}
              className={c}
              ref={ref}
            />
            <UnstyledButton
              onClick={toggle}
              tabIndex={0}
              className='absolute right-0.5 p-0 justify-center inset-y-0.5 w-8 rounded-r'
            >
              {isSeen ? <HiEyeOff /> : <HiEye />}
              <span className='sr-only'>Toggle password</span>
            </UnstyledButton>
          </div>
          {helperText && (
            <span id={`helper-${props.id}`} className='text-xs font-semibold text-theme-500 mt-1'>
              {helperText}
            </span>
          )}
        </div>
      )
    }

    if (helperText && props.type !== 'password') {
      return (
        <div className='inline-flex flex-col'>
          <input aria-labelledby={`helper-${props.id}`} {...props} className={c} ref={ref} />
          <span id={`helper-${props.id}`} className='text-xs font-semibold text-theme-500 mt-1'>
            {helperText}
          </span>
        </div>
      )
    }

    return <input {...props} className={c} ref={ref} />
  }
)

Input.displayName = 'CustomInput'
