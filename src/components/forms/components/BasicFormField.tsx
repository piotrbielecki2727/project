import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form'
import { ReactNode } from 'react'
import { FieldValues, UseControllerProps } from 'react-hook-form'

type BasicFormFieldProps<T extends FieldValues> = UseControllerProps<T> & {
  label?: string
  description?: string
  className?: string
  render: (field: any) => ReactNode
}

const BasicFormField = <T extends FieldValues>({
  label,
  description,
  control,
  name,
  render
}: BasicFormFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>{render(field)}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default BasicFormField
