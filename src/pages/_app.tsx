import { Aside, Header } from '@/components/ui/common'

import { useTheme } from '@/hooks/useTheme'

import '@/tailwind.css'
import { Child } from '@/types/common'

import { useLocation } from 'react-router-dom'

export default function App(props: Child) {
  const location = useLocation()
  useTheme()
  return (
    <>
      {location.pathname !== '/404' && (
        <>
          <Header />
          <Aside className='fixed left-0 bottom-0 top-16 w-1/2 sm:w-72' />
        </>
      )}

      {location.pathname !== '/404' && (
        <div className='w-full sm:pl-72 pt-16'>
          <main className='px-3 py-6'>{props.children}</main>
        </div>
      )}

      {location.pathname === '/404' && <>{props.children}</>}
    </>
  )
}
