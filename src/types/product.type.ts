export interface Product {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  description: string
  category: {
    _id: string
    name: string
  }
  image: string
  createdAt: string
  updatedAt: string
}

export interface ProductList {
  products: Product[]
  pagination: {
    page: number
    limit: number
    page_size: number
  }
}

// b_api
export interface BproductList {
  products: Product[]
}
//

export interface ProductListConfig {
  page?: number | string
  limit?: number | string
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price'
  order?: 'asc' | 'desc'
  exclude?: string
  rating_filter?: number | string
  price_max?: number | string
  price_min?: number | string
  name?: string
  category?: string
}

// export interface ProductsConfig {
//   _id: string
//   image: string
//   price: number
//   rating: number
//   price_before_discount: number
//   quantity: number
//   sold: number
//   view: number
//   name: string
//   description: string
//   category: string
//   createdAt: string
//   updatedAt: string
// }
