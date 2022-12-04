export default function HomePage() {
  const paragraph = 'mb-2.5 last:mb-0 max-w-prose'
  return (
    <div>
      <h1 className='mb-3'>Welcome to Zippy</h1>

      <p className={paragraph}>
        To get started, you can explore what components are available to use if you scaffold your
        next React project with this template
      </p>
      <p className={paragraph}>
        Note that this work is <strong>still on progress</strong>.
      </p>
    </div>
  )
}
