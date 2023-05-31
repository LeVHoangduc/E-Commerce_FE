import { advertisementType, promotionType } from 'src/types/drf.type'
import { ProductList } from 'src/types/product.type'
import { SuccessResponse } from 'src/types/utils.type'

import { b_http } from 'src/utils/http'

export const drfApi = {
  getPromotion() {
    return b_http.get<promotionType[]>('promotion')
  },
  getProducts() {
    return b_http.get<SuccessResponse<ProductList>>('productList')
  },
  getAdvertisement() {
    return b_http.get<advertisementType>('advertisement')
  }
}
