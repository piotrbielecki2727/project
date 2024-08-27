import { z } from 'zod'
import { EmailRegex, LettersRegex, PasswordRegex } from '../constants'

export const formSchema = z
  .object({
    firstName: z
      .string({
        required_error: 'Imię jest wymagane',
        invalid_type_error: 'Imię musi składać się tylko z liter'
      })
      .min(2, {
        message: 'Imię musi składać się z przynajmniej 2 znaków'
      })
      .max(20, { message: 'Imię nie może być dluższe niż 20 znaków' })
      .regex(LettersRegex, {
        message: 'Imię może zawierać tylko litery i ewentualnie jeden łącznik'
      }),
    lastName: z
      .string({
        required_error: 'Nazwisko jest wymagane',
        invalid_type_error: 'Nazwisko musi składać się tylko z liter'
      })
      .min(2, {
        message: 'Nazwisko musi składać się z przynajmniej 2 znaków'
      })
      .max(20, { message: 'Nazwisko nie może być dluższe niż 20 znaków' })
      .regex(LettersRegex, {
        message:
          'Nazwisko może zawierać tylko litery i ewentualnie jeden łącznik'
      }),
    email: z
      .string({
        required_error: 'Email jest wymagany'
      })
      .min(2, {
        message: 'Email musi składać się z przynajmniej 2 znaków'
      })
      .max(20, { message: 'Email nie może być dluższy niż 50 znaków' })
      .regex(EmailRegex, {
        message: 'Email musi zawierać @ '
      }),
    password: z
      .string({
        required_error: 'Hasło jest wymagane'
      })
      .min(6, {
        message: 'Hasło musi składać się z przynajmniej 6 znaków'
      })
      .max(20, { message: 'Nazwisko nie może być dluższe niż 20 znaków' })
      .regex(PasswordRegex, {
        message:
          'Hasło musi zawierać minimum 6 znaków, jedną dużą literę, jedną mała literę i conajmniej jeden znak specjalny'
      }),
    repeatedPassword: z
      .string({
        required_error: 'Nazwisko jest wymagane',
        invalid_type_error: 'Nazwisko musi składać się tylko z liter'
      })
      .min(2, {
        message: 'Nazwisko musi składać się z przynajmniej 2 znaków'
      })
      .max(20, { message: 'Nazwisko nie może być dluższe niż 20 znaków' })
      .regex(PasswordRegex, {
        message:
          'Hasło musi zawierać minimum 6 znaków, jedną dużą literę, jedną mała literę i conajmniej jeden znak specjalny'
      })
  })
  .refine(
    values => {
      return values.password === values.repeatedPassword
    },
    {
      message: 'Hasła muszą być takie same!',
      path: ['repeatedPassword']
    }
  )
