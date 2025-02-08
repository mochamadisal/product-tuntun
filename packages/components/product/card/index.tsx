/* eslint-disable @next/next/no-img-element */
import fontSizeModule from '@/styles/variables/font.module.scss'
import colorModule from '@/styles/variables/colors.module.scss'
import styles from '@/styles/components/products.module.scss'
import { ProductCardProps } from './types'
import { formatCurrency } from 'packages/utils/textFormatter'
import Button from '@/components/button'
import { FiEye } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter()

  const discountAmount = Math.ceil(
    ((product.price - product.discount_price) / product.price) * 100
  )

  const handleOpenDetail = () => {
    router.push('/')
  }

  return (
    <div
      className={styles.productsCard}
      data-testid={`product-card-${product.id}`}
    >
      <div className={styles.productsCard__head}>
        <div className={styles.productsCard__imageWrapper}>
          <img
            src={product.images?.[0].image_url}
            className={styles.productsCard__imageCover}
            alt={product.name}
          />
          {product.discount_price > 0 && (
            <div className={styles.productsCard__discountWrapper}>
              <span className={styles.discountAmount}>{discountAmount}%</span>
              <span className={styles.discountText}>Diskon</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.productsCard__body}>
        <div className={styles.productsCard__title}>
          <h3 title={product.name}>{product.name}</h3>
        </div>
        <div className={styles.productsCard__price}>
          {product.discount_price > 0 && (
            <span className={styles.priceBefore}>
              {formatCurrency(product.price)}
            </span>
          )}
          <h5 className={styles.priceAfter}>
            {formatCurrency(product.discount_price || product.price)}
          </h5>
        </div>
        <Button
          variant="primaryOutline"
          label="Lihat Detail"
          size="small"
          onClick={handleOpenDetail}
        />
      </div>
      <div className={styles.productsCard__overlay}>
        <Button variant="icon" onClick={handleOpenDetail}>
          <FiEye
            title="Lihat Detail"
            style={{
              color: colorModule.whiteColor,
              fontSize: fontSizeModule.h3,
            }}
          />
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
