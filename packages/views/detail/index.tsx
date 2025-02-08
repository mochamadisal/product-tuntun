'use client'

import useProductDetail from 'packages/hooks/useProducts/detail'
import Carousel from '@/components/carousel'
import styles from '@/styles/components/products.module.scss'
import { formatCurrency } from 'packages/utils/textFormatter'
import Button from '@/components/button'
import { FiShoppingCart } from 'react-icons/fi'
import Skeleton from 'react-loading-skeleton'

const ProductDetail = ({ productId }: { productId: string }) => {
  const {
    product,
    images,
    selectedVariant,
    handleChangeVariant,
    currentImageSlider,
    setCurrentImageSlider,
    handleAddtoCart,
    isLoadingDataProduct,
  } = useProductDetail({
    id: productId,
  })

  return (
    <>
      {!isLoadingDataProduct && product ? (
        <div className={styles.productDetailWrapper}>
          <div className={styles.productsDetailWidget}>
            <div>
              {images && (
                <div className={styles.productDetail__slider}>
                  <Carousel
                    images={images}
                    currentImage={currentImageSlider}
                    setCurrentImage={setCurrentImageSlider}
                  />
                </div>
              )}
            </div>
            <div>
              <div className={styles.productDetail__content}>
                <h3 className={styles.productDetail__title}>{product.name}</h3>
                <div className="d-flex jc-space-between ai-center">
                  <div className={styles.productDetail__price}>
                    <h5 className={styles.priceAfter}>
                      {formatCurrency(product.discount_price || product.price)}
                    </h5>
                    {product.discount_price > 0 && (
                      <span className={styles.priceBefore}>
                        {formatCurrency(product.price)}
                      </span>
                    )}
                  </div>
                  {product.discount_price > 0 && (
                    <span className={styles.productDetail__discountAmount}>
                      {product.discount_amount}%
                    </span>
                  )}
                </div>
              </div>
              <div className={styles.productDetail__content}>
                <h4>Pilih Varian :</h4>
                <div className={styles.productDetail__varianList}>
                  {product.variants?.map((varian, index) => (
                    <Button
                      key={`variant-${index + 1}`}
                      label={varian.label}
                      variant={
                        varian.code === selectedVariant
                          ? 'primary'
                          : 'primaryOutline'
                      }
                      size="small"
                      onClick={() => handleChangeVariant(varian.code)}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.productDetail__content}>
                <p className={styles.productDetail__description}>
                  {product.description}
                </p>
              </div>
              <div className={styles.productDetail__action}>
                <Button
                  label="Masukkan ke Keranjang"
                  isFullWidth
                  onClick={handleAddtoCart}
                >
                  <FiShoppingCart />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.productDetailWrapper}>
          <div className={styles.productDetail__slider}>
            <Skeleton height={360} />
          </div>
          <div className={styles.productDetail__content}>
            <Skeleton height={100} />
          </div>
          <div className={styles.productDetail__content}>
            <Skeleton height={100} />
          </div>
          <div className={styles.productDetail__content}>
            <Skeleton height={500} />
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetail
