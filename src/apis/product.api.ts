import { Product, ProductList, ProductListConfig } from 'src/types/product.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const url = 'products'

const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponse<ProductList>>(url, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get<SuccessResponse<Product>>(`${url}/${id}`)
  }
}

export default productApi
