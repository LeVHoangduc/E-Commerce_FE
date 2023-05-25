// library
import SwiperCore, { Autoplay, Pagination, Navigation, FreeMode, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper.min.css'
import 'swiper/swiper.css'
import 'swiper/swiper-bundle.css'

// react

// utils
import { drfApi } from 'src/apis/drf.api'

import { useQuery } from '@tanstack/react-query'

export default function Promotion() {
  SwiperCore.use([Autoplay, Navigation, Pagination, FreeMode, Keyboard])

  const { data: promotions } = useQuery({
    queryKey: ['promotions'],
    queryFn: () => drfApi.getPromotion(),
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  // console.log(promotions?.data[0].image)

  return (
    <div className=' h-[500px] '>
      <Swiper
        // spaceBetween={20}
        grabCursor={true}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className=' h-full '
        loop={true}
        pagination={{
          dynamicBullets: true
        }}
        keyboard={{
          enabled: true
        }}
      >
        {promotions &&
          promotions.data.map((promotion, index) => (
            <SwiperSlide key={index}>
              <div className='h-full w-full'>
                <img src={promotion.image} alt='' className='relative h-full w-full bg-cover bg-center bg-no-repeat' />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
