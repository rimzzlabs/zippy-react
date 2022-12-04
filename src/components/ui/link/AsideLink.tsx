import { UnstyledLink } from './UnstyledLink'
import type { UnstyledLinkProps } from './UnstyledLink'

import { forwardRef } from 'react'
import type { IconType } from 'react-icons'

type AsideLinkProps = { Icon: IconType; text: string } & UnstyledLinkProps

export const AsideLink = forwardRef<HTMLAnchorElement, AsideLinkProps>((props, ref) => {
  return (
    <UnstyledLink
      {...props}
      className='space-x-2 py-2 px-2 hover:bg-theme-100 dark:hover:bg-theme-800'
    >
      <props.Icon className='w-4 h-4' />
      <span className='text-sm font-medium'>{props.text}</span>
    </UnstyledLink>
  )
})
