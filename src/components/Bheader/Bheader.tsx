import { Link } from 'react-router-dom'

export default function Bheader() {
  return (
    <div className=' t-0 fixed z-50 mb-10 h-[80px] w-full bg-slate-500  text-white shadow-slate-800'>
      <div className=' grid h-full w-full grid-cols-12'>
        <div className='logo col-span-2 flex h-full w-full pl-3'>
          <div className='icon-1 flex h-full w-full items-center justify-center  '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-7 w-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
              />
            </svg>
          </div>
          <span className='m-3 border-r-2 border-white'></span>
          <div className='icon-2 flex h-full w-full items-center justify-center '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-7 w-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
              />
            </svg>
          </div>
        </div>
        <div className='col-span-1 p-2 '>
          <Link to='/iphone' className='block h-full w-full'>
            <span className='flex h-full w-full items-center justify-center text-sm '>Iphone</span>
          </Link>
        </div>
        <div className='col-span-1 '>
          <Link to='/iphone' className='block h-full w-full'>
            <span className='flex h-full w-full items-center justify-center text-sm '>iPad</span>
          </Link>
        </div>{' '}
        <div className='col-span-1 '>
          <Link to='/iphone' className='block h-full w-full'>
            <span className='flex h-full w-full items-center justify-center text-sm '>Mac</span>
          </Link>
        </div>
        <div className='col-span-1 '>
          <Link to='/iphone' className='block h-full w-full'>
            <span className='flex h-full w-full items-center justify-center text-sm '>Watch</span>
          </Link>
        </div>
        <div className='col-span-1 '>
          <Link to='/iphone' className='block h-full w-full'>
            <span className='flex h-full w-full items-center justify-center text-sm '>Sound</span>
          </Link>
        </div>
        <div className='col-span-1'>
          <Link to='/iphone' className='block h-full w-full '>
            <span className='flex h-full w-full items-center justify-center text-sm  '>Accessory</span>
          </Link>
        </div>
        <div className='col-span-1 '>
          <Link to='/iphone' className='block h-full w-full'>
            <span className='flex h-full w-full items-center justify-center text-sm'>Tin Tức</span>
          </Link>
        </div>
        <div className='function col-span-3'>
          <div className='grid h-full w-full grid-cols-3'>
            <div className='col-span-1 flex h-full w-full items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </div>
            <div className='col-span-1 flex h-full w-full items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
            </div>
            <div className='col-span-1 flex h-full w-full items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
