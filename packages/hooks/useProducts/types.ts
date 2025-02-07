export interface ProductItem {
  id: number
  name: string
  description: string
  price: number
  discount_price: number
  images?: ImagesEntity[] | null
  variants?: VariantsEntity[] | null
}
export interface ImagesEntity {
  image_url: string
}
export interface VariantsEntity {
  code: string
  label: string
  images?: ImagesEntity[] | null
}
