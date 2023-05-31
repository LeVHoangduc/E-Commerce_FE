import { useQuery } from '@tanstack/react-query'
import { drfApi } from 'src/apis/drf.api'

export default function Advertisement() {
  const { data: advertisementData } = useQuery({
    queryKey: ['advertisement'],
    queryFn: () => {
      return drfApi.getAdvertisement()
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  return (
    <div className='mx-2 mt-2 sm:mx-24'>
      <div className='grid grid-cols-1 gap-4 rounded-sm p-2 sm:grid-cols-3'>
        {advertisementData?.data.data.map((ads) => (
          <div key={ads.name} className='col-span-1'>
            <img src={ads.image} alt='' className='w-full object-cover' />
          </div>
        ))}
      </div>
    </div>
  )
}
