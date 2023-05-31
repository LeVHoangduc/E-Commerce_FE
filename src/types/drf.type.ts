export interface promotionType {
  image: string
}

interface ads {
  category: {
    _id: string
    name: string
  }
  name: string
  image: string
}
export interface advertisementType {
  data: ads[]
}
