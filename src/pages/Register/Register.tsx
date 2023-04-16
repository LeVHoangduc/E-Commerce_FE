import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Input from 'src/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, Schema } from 'src/utils/rules'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from 'src/apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'

import { useContext, useState } from 'react'
import { ErrorResponse } from 'src/types/utils.type'
import { AppContext } from 'src/contexts/app.context'

// interface FormData {
//   email: string
//   password: string
//   confirm_password: string
// }
type FormData = Schema

export default function Register() {
  // === Hook ===
  const {
    register,
    handleSubmit,
    // getValues,
    //watch,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const [axiosError, setAxiosError] = useState<boolean>(false)
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  // === END HOOK ===
  // const rules = getRules(getValues)
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    // console.log(data)
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: () => {
        setAxiosError(false)
        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data

          // if (formError) {
          //   Object.keys(formError).forEach((key) => {
          //     setError(key as keyof Omit<FormData, 'confirm_password'>, {
          //       message: formError[key as keyof Omit<FormData, 'confirm_password'],
          //       type: 'Server'
          //     })
          //   })
          // }
          if (formError?.email) {
            setError('email', {
              message: formError.email,
              type: 'Server'
            })
          }
          if (formError?.password) {
            setError('password', {
              message: formError.password,
              type: 'Server'
            })
          }
          setAxiosError(true)
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 p-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            {/* noValidate = Không validate mặc định */}
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>{axiosError ? 'Tai khoan da ton tai' : 'Register'}</div>
              <Input
                name='email'
                register={register}
                placeholder='Email'
                errorMessage={errors.email?.message}
                type='email'
                className='mt-8'
                // rules={rules.email}
              />
              <Input
                name='password'
                register={register}
                placeholder='Password'
                errorMessage={errors.password?.message}
                type='password'
                className='mt-2'
                // rules={rules.password}
                autoComplete='on' // type = password thì có attribute này để tốt cho UX
              />
              <Input
                name='confirm_password'
                register={register}
                placeholder='Confirm Password'
                errorMessage={errors.confirm_password?.message}
                type='password'
                className='mt-2'
                // rules={rules.confirm_password}
                autoComplete='on'
              />
              <div className='mt-2'>
                <button className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Register
                </button>
              </div>
              <div className='flex items-center justify-center'>
                <span className='text-slate-400'>Ban da co tai khoan ?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
