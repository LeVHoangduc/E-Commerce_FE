import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, Schema } from 'src/utils/rules'

// interface FormData {
//   email: string
//   password: string
//   confirm_password: string
// }
export default function Register() {
  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors }
  } = useForm<Schema>({
    resolver: yupResolver(schema)
  })

  // const rules = getRules(getValues)

  const onSubmit = handleSubmit((data) => {
    // console.log(data)
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 p-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:cols-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Register</div>
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
                autoComplete='on'
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
