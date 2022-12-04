import { clsxm } from '@/util/clsxm'

import { createElement, forwardRef } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

export type UnstyledLinkProps = LinkProps

export const UnstyledLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>((prop, ref) => {
  const { reloadDocument, replace, state, preventScrollReset, relative, to, ...props } = prop

  const c = clsxm('inline-flex items-center', props.className)

  if (typeof to === 'string' && to.startsWith('http')) {
    return createElement('a', { ...props, className: c, ref })
  }

  return (
    <Link {...prop} className={c} ref={ref}>
      {props.children}
    </Link>
  )
})

UnstyledLink.displayName = 'UnstyledLink'
