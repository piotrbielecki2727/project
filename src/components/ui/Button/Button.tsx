import { FC, ReactNode } from 'react'
import { ButtonProps, ShadcnButton } from './base'
import cn from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

const additionalButtonVariants = {
  default: '',
  success: 'bg-green-400',
  information: 'bg-blue-400',
  warning: 'bg-orange-400'
}

type Props = ButtonProps & {
  children: ReactNode
  additionalButtonVariant?: 'success' | 'information' | 'warning' | 'default',
  variant?: string
  isDisabled?: boolean
  onClick: () => void
  icon?: LucideIcon
}

const Button: FC<Props> = ({
  children,
  additionalButtonVariant = 'default',
  variant,
  size,
  isDisabled = false
}) => {

  const renderContent = () => {
    
  } 



  return (
    <ShadcnButton
      size={size}
      variant={variant}
      className={cn(additionalButtonVariants[additionalButtonVariant])}
    >
      {children}
    </ShadcnButton>
  )
}

export default Button
