'use client'

import RegisterForm from '@/components/forms/RegisterForm'

const LoginView = () => (
  <div className='grid h-screen grid-cols-1 md:grid-cols-2'>
    <div className='hidden border-r border-zinc-800 bg-zinc-900 p-2 md:block'>
      <div className='flex h-full flex-col justify-between p-6 text-white'>
        <div className='flex flex-col justify-center align-middle'>
          <blockquote className='flex flex-col'>
            <span className='text-md mt-6 italic'>
              “This library has saved me countless hours of work and helped me
              deliver stunning designs to my clients faster than ever before.”
            </span>
            <span className='mt-1 text-sm font-semibold'>Sofia Davis</span>
          </blockquote>
        </div>
      </div>
    </div>
    <div className='flex items-center justify-center bg-white align-middle'>
      <div className='flex flex-col items-center justify-center rounded-md p-10 align-middle'>
        <div className='mr-2 flex items-center justify-center py-8 align-middle md:hidden'></div>
        <span className='text-center text-2xl font-semibold'>
          Zaloguj się na swoje konto
        </span>
        <span className='mt-2 text-center text-gray-400'>
          Wprowadź email i hasło poniżej, aby się zalogować
        </span>
        <div className='mt-4 w-full'>
          <RegisterForm />
        </div>
        <div className='max-w-[21rem] py-4 text-center text-sm text-gray-400'>
          Klikając Kontynuuj, wyrażasz zgodę na nasze Warunki świadczenia usług
          i Politykę prywatności
        </div>
      </div>
    </div>
  </div>
)

export default LoginView