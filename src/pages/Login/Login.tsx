import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 p-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:cols-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Login</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='email'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'></div>
              </div>
              <div className='mt-3'>
                <button className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Login
                </button>
              </div>
              <div className='flex items-center justify-center'>
                <span className='text-slate-400'>Ban chua co tai khoan ?</span>
                <Link className='ml-1 text-red-400' to='/register'>
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
