'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import BasicFormField from '../components/BasicFormField'
import Button from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input/base'
import { formSchema } from './formSchema'
import { User } from '@/lib/api/types'
import { defaultFormValues } from './constants'

const RegisterForm = () => {
  const form = useForm<User>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => console.log(values)

  const { control, handleSubmit } = form

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
        <BasicFormField
          label='Imię'
          control={control}
          description='Podaj swoje imie'
          name='firstName'
          render={field => <Input placeholder='shadcn' {...field} />}
        />
        <BasicFormField
          label='Nazwisko'
          control={control}
          description='Podaj swoje nazwisko'
          name='lastName'
          render={field => <Input placeholder='shadcn' {...field} />}
        />
        <BasicFormField
          label='Email'
          control={control}
          description='Podaj swoj email'
          name='email'
          render={field => <Input placeholder='shadcn' {...field} />}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
export default RegisterForm
