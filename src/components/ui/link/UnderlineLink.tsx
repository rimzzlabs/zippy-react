import { clsxm } from '@/util/clsxm'

import { UnstyledLink, UnstyledLinkProps } from './UnstyledLink'

import { forwardRef } from 'react'

export const UnderlineLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>((props, ref) => {
  const className = clsxm('underline decoration-primary-500')
  return (
    <UnstyledLink {...props} className={className} ref={ref}>
      {props.children}
    </UnstyledLink>
  )
})

UnderlineLink.displayName = 'UnderlineLink'
