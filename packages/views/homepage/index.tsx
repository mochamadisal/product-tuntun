'use client'

import ProductCard from '@/components/product/card'
import ProductItem from '@/components/product/item'
import styles from '@/styles/components/products.module.scss'
import Skeleton from 'react-loading-skeleton'
import useProductsList from 'packages/hooks/useProducts/list'

const Homepage = () => {
  const { dataProducts, isLoadingDataProducts } = useProductsList()

  return (
    <>
      {isLoadingDataProducts ? (
        <Skeleton
          wrapper={ProductItem}
          count={5}
          height={350}
          containerClassName="skeleton-wrapper"
        />
      ) : (
        <div className={styles.productsRow}>
          {dataProducts && dataProducts?.length > 0 ? (
            <div className={styles.productsWidget}>
              {dataProducts?.map((product, index) => (
                <ProductItem key={`product-item-${index + 1}`}>
                  <ProductCard product={product} />
                </ProductItem>
              ))}
            </div>
          ) : (
            <div className={styles.productsNotfound}>
              <span>Data Tidak Tersedia</span>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Homepage
