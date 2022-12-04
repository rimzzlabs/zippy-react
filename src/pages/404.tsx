import { UnderlineLink } from '@/components/ui/link'

export default function NotFoundPage() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='mb-3'>404 | Not Found</h1>
        <p className='mb-1.5'>The page you are looking for are not found</p>
        <UnderlineLink to='/'>To home</UnderlineLink>
      </div>
    </div>
  )
}
