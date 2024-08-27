'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import BasicFormField from '../components/BasicFormField'
import Button from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { formSchema } from './formSchema'
import { RegisterUserData } from '@/lib/api/types'
import { defaultFormValues } from './constants'
import { Input as ShadcnInput } from '@/components/ui/Input/base'
import Input from '@/components/ui/Input'

const RegisterForm = () => {
  const form = useForm<RegisterUserData>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => console.log(values)

  const { control, handleSubmit } = form

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='b flex flex-col space-y-3'
      >
        <BasicFormField
          label='Imię'
          control={control}
          name='firstName'
          render={field => <ShadcnInput placeholder='Imię...' {...field} />}
        />
        <BasicFormField
          label='Nazwisko'
          control={control}
          name='lastName'
          render={field => <ShadcnInput placeholder='Nazwisko...' {...field} />}
        />
        <BasicFormField
          label='Email'
          control={control}
          name='email'
          render={field => <ShadcnInput placeholder='Email...' {...field} />}
        />
        <BasicFormField
          label='Hasło'
          control={control}
          name='password'
          render={field => (
            <ShadcnInput type='password' placeholder='Hasło...' {...field} />
          )}
        />
        <BasicFormField
          label='Powtórz hasło'
          control={control}
          name='repeatedPassword'
          render={field => (
            <ShadcnInput
              type='password'
              placeholder='Powtórz hasło...'
              {...field}
            />
          )}
        />
        <Input showPasswordVisibilityButton />
        <div className='flex items-center justify-center'>
          <Button
            className='w-[75%]'
            additionalButtonVariant='sky'
            type='submit'
          >
            Zarejestruj się
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default RegisterForm
