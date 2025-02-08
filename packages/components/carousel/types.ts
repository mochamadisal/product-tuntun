import { Dispatch, SetStateAction } from 'react'

export interface CarouselProps {
  images: { image_url: string }[]
  currentImage: number
  setCurrentImage: Dispatch<SetStateAction<number>>
}
