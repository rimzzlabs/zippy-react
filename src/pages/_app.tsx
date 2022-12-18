import { Aside, Header } from '@/components/ui/common'

import { useMediaLayout, useToggle } from '@/hooks'
import { useTheme } from '@/hooks/useTheme'

import '@/tailwind.css'
import { Child } from '@/types/common'
import { clsxm } from '@/util/clsxm'

import { useLocation } from 'react-router-dom'

export default function App(props: Child) {
  useTheme()
  const location = useLocation()
  const [sidebarOpen, , closeSidebar, toggleSidebar] = useToggle()

  const isMedium = useMediaLayout('md')

  return (
    <>
      {location.pathname !== '/404' && (
        <>
          <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

          <Aside
            closeSidebar={closeSidebar}
            className={clsxm(
              'fixed left-0 bottom-0 top-16 w-1/2 sm:w-72 transition-all',
              !isMedium && '-translate-x-96',
              sidebarOpen && 'translate-x-0'
            )}
          />
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
