import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import purchaseApi from 'src/apis/purchase.api'
import Button from 'src/components/Button'
import QuantityController from 'src/components/QuantityController'
import path from 'src/constants/path'
import { purchasesStatus } from 'src/constants/purchase'
import { Purchase } from 'src/types/purchase.type'
import { formatCurrency, generateNameId } from 'src/utils/utils'
import { produce } from 'immer'

interface ExtendedPurchase extends Purchase {
  disabled: boolean
  checked: boolean
}

export default function Cart() {
  const [extendedPurchases, setExtendedPurchases] = useState<ExtendedPurchase[]>([])
  const { data: purchasesInCartData } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart })
  })
  const purchasesInCart = purchasesInCartData?.data.data
  const isAllChecked = extendedPurchases.every((purchase) => purchase.checked)

  useEffect(() => {
    setExtendedPurchases(
      purchasesInCart?.map((purchase) => ({
        ...purchase,
        disabled: false,
        checked: false
      })) || []
    )
  }, [purchasesInCart])

  const handleChecked = (productIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtendedPurchases(
      produce((draft) => {
        draft[productIndex].checked = event.target.checked
      })
    )
  }

  const handleCheckAll = () => {
    setExtendedPurchases((prev) =>
      prev.map((purchase) => ({
        ...purchase,
        checked: !isAllChecked
      }))
    )
  }
  return (
    <div className='bg-neutral-100 py-16 '>
      <div className='container '>
        <div className='overflow-auto'>
          <div className='min-w-[1000px]'>
            {/* === Header === */}
            <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-9 text-sm capitalize text-gray-500 shadow'>
              <div className='col-span-6 '>
                <div className='flex items-center'>
                  <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                    <input
                      type='checkbox'
                      className='h=5 w-5 accent-orange'
                      checked={isAllChecked}
                      onChange={handleCheckAll}
                    />
                  </div>
                  <div className='flex-grow text-black'>Product</div>
                </div>
              </div>
              <div className='col-span-6'>
                <div className='grid grid-cols-5 text-center'>
                  <div className='col-span-2'>Unit Price</div>
                  <div className='col-span-1'>Quantify</div>
                  <div className='col-span-1'>Total Price</div>
                  <div className='col-span-1'>Actions</div>
                </div>
              </div>
            </div>
            {/* === End Header === */}
            {/* === Body === */}
            <div className='my-3 rounded-sm bg-white p-5 shadow'>
              {extendedPurchases?.map((purchase, index) => (
                <div
                  key={purchase._id}
                  className='mb-5 grid grid-cols-12 rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0 last:mt-0'
                >
                  <div className='col-span-6'>
                    <div className='flex '>
                      <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                        <input
                          type='checkbox'
                          className='h=5 w-5 accent-orange'
                          onChange={handleChecked(index)}
                          checked={purchase.checked}
                        />
                      </div>
                      <div className='flex-grow'>
                        <div className='flex'>
                          <Link
                            className='h-20 w-20 flex-shrink-0 '
                            to={`${path.home}${generateNameId({ name: purchase.product.name, id: purchase._id })}`}
                          >
                            <img src={purchase.product.image} alt={purchase.product.name} />
                          </Link>
                          <div className='flex-grow px-2 pt-1 pb-2'>
                            <Link
                              to={`${path.home}${generateNameId({ name: purchase.product.name, id: purchase._id })}`}
                              className='line-clamp-2'
                            >
                              {purchase.product.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <div className='grid grid-cols-5 items-center'>
                      <div className='col-span-2'>
                        <div className='flex items-center justify-center'>
                          <span className='text-gray-300 line-through'>
                            <span className='text-xs'>d</span>
                            {formatCurrency(purchase.product.price_before_discount)}
                          </span>
                          <span className='ml-3'>
                            <span className='text-xs'>d</span>
                            {formatCurrency(purchase.product.price)}
                          </span>
                        </div>
                      </div>
                      <div className='col-span-1'>
                        <QuantityController max={purchase.product.quantity} value={purchase.buy_count} />
                      </div>
                      <div className='col-span-1'>
                        <span className='text-orange'>
                          {formatCurrency(purchase.product.price * purchase.buy_count)}
                        </span>
                      </div>
                      <div className='col-span-1'>
                        <button className='bg-none text-black transition-colors hover:text-orange'>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* === End Body === */}
          </div>
        </div>
        <div className='sticky bottom-0 z-10 mt-10 flex flex-col rounded-sm border-gray-300 bg-white p-5 shadow sm:flex-row sm:items-center'>
          <div className='flex items-center justify-center'>
            <div className='flex flex-shrink-0 items-center justify-center pr-3'>
              <input
                onChange={handleCheckAll}
                type='checkbox'
                className='h-5 w-5 accent-orange'
                checked={isAllChecked}
              />
            </div>
            <button onClick={handleCheckAll} className='mx-3 border-none bg-none'>
              Select All ({extendedPurchases.length})
            </button>
            <button className='mx-3 border-none bg-none'>Delete</button>
          </div>
          <div className='mt-5 flex flex-col items-center sm:ml-auto sm:mt-0 sm:flex-row'>
            <div>
              <div className='flex items-center sm:justify-end'>
                <div>Total(0 product):</div>
                <div className='ml-2 text-2xl text-orange'>138.000</div>
              </div>
              <div className='flex items-center text-sm sm:justify-end'>
                <div className='text-gray-500'>Save</div>
                <div className='ml-6 text-orange'>138.000</div>
              </div>
            </div>
            <Button className='mt-5 flex h-10 w-52 items-center justify-center bg-red-500 text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0'>
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
