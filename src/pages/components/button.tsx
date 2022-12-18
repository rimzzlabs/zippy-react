import * as btns from '@/components/ui/form/Button'

const sizes = {
  0: 'xs',
  1: 'sm',
  2: 'md',
  3: 'lg',
  4: 'lg'
} as Record<number, 'xs' | 'sm' | 'md' | 'lg'>

export default function ButtonComponentPage() {
  const buttons = Object.entries(btns)

  return (
    <div>
      <h1 className='mb-1'>Buttons</h1>
      <p className='max-w-max mb-4'>
        A button is an important part of an app that lets you interact with it. It&apos;s a way for
        you to do things within the app.
      </p>

      <div className='space-y-8'>
        <div>
          <h3 className='mb-1'>Buttons</h3>
          <h4 className='mb-4'>Regular state (medium) size</h4>

          <div className='flex items-center space-x-2.5'>
            {buttons.map(([name, Component]) => (
              <Component key={name}>{name.replace(/([A-Z])/g, ' $1').trim()}</Component>
            ))}
          </div>
        </div>

        <div>
          <h3 className='mb-1'>Button Sizes</h3>
          <h4 className='mb-4'>Small to large button</h4>

          <div className='flex items-center space-x-2.5'>
            {buttons.map(([name, Component], i) => (
              <Component key={name} size={sizes[i]}>
                {name.replace(/([A-Z])/g, ' $1').trim()}
              </Component>
            ))}
          </div>
        </div>

        <div>
          <h3 className='mb-1'>Event Listener</h3>

          <div className='flex items-center space-x-2.5'>
            <btns.PrimaryButton onClick={() => alert('Thank you!')}>Click me!</btns.PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
