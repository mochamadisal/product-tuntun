/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/components/carousel.module.scss'
import { CarouselProps } from './types'
import Button from '../button'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const Carousel = ({ images, currentImage, setCurrentImage }: CarouselProps) => {
  const nextSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className={styles.carousel}>
      {currentImage > 0 && (
        <Button onClick={prevSlide} variant="text">
          <FiArrowLeft style={{ fontSize: 18 }} />
        </Button>
      )}
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentImage ? styles.active : ''
            }`}
          >
            <img src={image.image_url} alt={`Slide ${index}`} loading="lazy" />
          </div>
        ))}
      </div>
      {currentImage < images.length - 1 && (
        <Button onClick={nextSlide} variant="text">
          <FiArrowRight style={{ fontSize: 18 }} />
        </Button>
      )}
    </div>
  )
}

export default Carousel
