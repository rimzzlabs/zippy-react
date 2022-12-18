import { AsideLink } from '@/components/ui/link'

import { clsxm } from '@/util/clsxm'

import {
  HiOutlineCursorClick,
  HiOutlineHome,
  HiOutlinePuzzle,
  HiOutlineQuestionMarkCircle
} from 'react-icons/hi'

type AsideProps = {
  className?: string
}

export const Aside: React.FunctionComponent<AsideProps> = (props) => {
  return (
    <aside {...props}>
      <div
        className={clsxm(
          'flex flex-col',
          'w-full h-full',
          'space-y-3 md:space-y-6 border-r',
          'dark:border-r-gray-700 dark:bg-theme-900'
        )}
      >
        <div className='flex flex-col py-2 px-3'>
          <p className='text-lg font-semibold mb-3 md:mb-6'>Pages</p>
          <AsideLink text='Home' to='/' Icon={HiOutlineHome} />

          <AsideLink
            text='Not Found'
            to='/something-in-the-way-mmmmmmmmmmmmmmm'
            Icon={HiOutlineQuestionMarkCircle}
          />
        </div>

        <div className='flex flex-col py-2 px-3'>
          <p className='flex items-center text-lg font-semibold mb-3 md:mb-6'>
            <HiOutlinePuzzle className='mr-2' /> <span>Components</span>
          </p>

          <AsideLink text='Button' to='/components/button' Icon={HiOutlineCursorClick} />
        </div>
      </div>
    </aside>
  )
}
