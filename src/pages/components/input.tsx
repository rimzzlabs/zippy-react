import { Input, InputProps } from '@/components/ui/form'

const inputs = [
  {
    title: 'Text',
    paragraph: 'Regular input text',
    inputs: [
      {
        placeholder: 'Text input',
        id: 'reg-text',
        name: 'reg-text',
        type: 'text'
      },
      {
        placeholder: 'Text input with helper text',
        id: 'reg-text-helper',
        name: 'reg-text-helper',
        type: 'text',
        helperText: 'Make sure to fill with full name'
      },
      {
        placeholder: 'Text input with disabled input',
        id: 'reg-text-disabled',
        name: 'reg-text-disabled',
        type: 'text',
        disabled: true
      },
      {
        placeholder: 'Text input with error',
        id: 'reg-text-err',
        name: 'reg-text-err',
        type: 'text',
        isError: true
      }
    ]
  },
  {
    title: 'Number',
    paragraph: 'Regular input number',
    inputs: [
      {
        placeholder: 'Number input',
        id: 'reg-number',
        name: 'reg-number',
        type: 'number'
      },
      {
        placeholder: 'Number input with helper text',
        id: 'reg-number-helper',
        name: 'reg-number-helper',
        type: 'number',
        helperText: 'Make sure to fill with full name'
      },
      {
        placeholder: 'Number input with disabled input',
        id: 'reg-number-disabled',
        name: 'reg-number-disabled',
        type: 'number',
        disabled: true
      },
      {
        placeholder: 'Number input with error',
        id: 'reg-number-err',
        name: 'reg-number-err',
        type: 'number',
        isError: true
      }
    ]
  },
  {
    title: 'Password',
    paragraph: 'Regular input password',
    inputs: [
      {
        placeholder: 'Password input',
        id: 'reg-pass',
        name: 'reg-pass',
        type: 'password'
      },
      {
        placeholder: 'Password input with helper text',
        id: 'reg-pass-helper',
        name: 'reg-pass-helper',
        type: 'password',
        helperText: 'Make sure to fill with full name'
      },
      {
        placeholder: 'Password input with disabled input',
        id: 'reg-pass-disabled',
        name: 'reg-pass-disabled',
        type: 'password',
        disabled: true
      },
      {
        placeholder: 'Password input with error',
        id: 'reg-pass-err',
        name: 'reg-pass-err',
        type: 'password',
        isError: true
      }
    ]
  }
] as { title: string; paragraph: string; inputs: InputProps[] }[]

export default function FormComponentPage() {
  return (
    <div>
      <h1 className='mb-1'>Inputs</h1>
      <p className='max-w-max mb-4'>By giving an input, user can interact with our website.</p>

      <div className='space-y-8 w-full'>
        {inputs.map((input, index) => {
          return (
            <div key={input.title + index}>
              <h3 className='mb-1'>{input.title}</h3>
              <p className='mb-4'>{input.paragraph}</p>

              <div className='flex items-start gap-x-2.5 gap-y-4 flex-wrap'>
                {input.inputs.map((input) => (
                  <Input type='text' {...input} className='w-64' key={input.placeholder} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
