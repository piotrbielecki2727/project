import { FC, ReactNode } from 'react'
import { ButtonProps, ShadcnButton } from './base'
import cn from '@/lib/utils'
import { LoaderCircle, LucideIcon } from 'lucide-react'
import Link from 'next/link'

const additionalButtonVariants = {
  default: '',
  success: 'bg-green-400 hover:bg-green-500',
  information: 'bg-blue-400 hover:bg-blue-500',
  warning: 'bg-orange-400 hover:bg-orange-500',
  sky: 'bg-sky-300 hover:bg-sky-300'
}

type Props = ButtonProps & {
  children?: ReactNode
  href?: string
  className?: string
  additionalButtonVariant?:
    | 'success'
    | 'information'
    | 'warning'
    | 'default'
    | 'sky'
  variant?: string
  isLoading?: boolean
  onClick?: () => void
  icon?: LucideIcon
}

const Button: FC<Props> = ({
  children,
  additionalButtonVariant = 'default',
  variant,
  onClick,
  size,
  className,
  href,
  asChild,
  disabled,
  isLoading,
  icon: Icon,
  ...buttonProps
}) => {
  const renderContent = () => {
    const content = (
      <>
        {isLoading && <LoaderCircle className='animate-spin' />}
        {Icon && <Icon />}
        {children}
      </>
    )
    if (asChild && href) {
      return <Link href={href}>{content}</Link>
    }
    return content
  }

  return (
    <ShadcnButton
      size={size}
      variant={variant}
      asChild={asChild}
      disabled={disabled}
      className={cn(
        additionalButtonVariants[additionalButtonVariant],
        className,
        'gap-x-2'
      )}
      {...buttonProps}
    >
      {renderContent()}
    </ShadcnButton>
  )
}

export default Button
