import { useQuery } from '@tanstack/react-query'

import Promotion from 'src/components/Promotions'

import Products from 'src/components/Products'
import { drfApi } from 'src/apis/drf.api'
// import { Product } from 'src/types/product.type'
import ProductCategoryRow from './components'
import { Product } from 'src/types/product.type'
import { ReactNode } from 'react'

type currentCategory = string | null
type handleViewType = (ProductList: Product[], category: string) => ReactNode

//  sử dụng queryConfig để trả về params được nhập trên thanh tìm kiếm
export default function Introduction() {
  const { data: productsData } = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return drfApi.getProducts()
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  // console.log(productsData?.data)
  let currentCategory: currentCategory = null
  const notCategory: any = []
  const checkCategories = (category: string) => {
    // console.log(currentCategory, 'va', category)
    if (currentCategory !== category && notCategory.every((item: any) => item !== category)) {
      currentCategory = category
      return category
    }
  }
  // console.log(currentCategory)

  const handlePreview: handleViewType = (ProductList: Product[], category: string) => {
    let count = 0
    const rows: any = []
    ProductList.map((product) => {
      if (product.category.name === category && count < 4) {
        count++
        rows.push(
          <div className='col-span-1' key={product._id}>
            <Products product={product} />
          </div>
        )
      }
    })
    count = 0
    notCategory.push(category)
    return rows
  }

  return (
    <div className='block bg-gray-200 pt-[129px]'>
      <Promotion />
      {productsData && (
        <div className='mb-4 '>
          {productsData.data.data.products.map((product) => {
            // console.log(product.category.name)
            const isCategory = checkCategories(product.category.name)
            // console.log(isCategory)
            return (
              <div key={product._id}>
                {/* {isCategory === true && <ProductCategoryRow category={product.category.name} />} */}
                {isCategory && (
                  <>
                    <ProductCategoryRow category={product.category.name} />
                    <div className='mx-2 sm:mx-24'>
                      <div className='grid grid-cols-2 gap-4 rounded-sm  p-2 sm:grid-cols-4'>
                        {/* {productsData.data.data.products.map((product) => {
                          if (product.category.name === isCategory) {
                            return (
                              <div className='col-span-1' key={product._id}>
                                <Products product={product} />
                              </div>
                            )
                          }
                        })} */}
                        {handlePreview(productsData.data.data.products, isCategory)}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
