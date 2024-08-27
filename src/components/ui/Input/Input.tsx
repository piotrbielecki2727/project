import { Eye, EyeOff } from 'lucide-react'
import { Input as ShadcnInput } from './base'
import Button from '../Button'
import { useState } from 'react'

type InputProps = {
  showPasswordVisibilityButton?: boolean
}

const Input = ({ showPasswordVisibilityButton }: InputProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const changePasswordVisibility = () => {
    console.log('zmieniam stan')
    setPasswordVisibility(prevVisibility => !prevVisibility)
  }

  return (
    <div className='flex flex-row items-center gap-x-2'>
      <ShadcnInput type={passwordVisibility ? 'text' : 'password'} />
      {showPasswordVisibilityButton && (
        <Button
          variant='ghost'
          icon={passwordVisibility ? Eye : EyeOff}
          onClick={changePasswordVisibility}
          size='icon'
        />
      )}
    </div>
  )
}

export default Input
