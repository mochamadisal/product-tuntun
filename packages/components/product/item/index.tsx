import styles from '@/styles/components/products.module.scss'
import { PropsWithChildren } from 'react'

const ProductItem = ({ children }: PropsWithChildren<unknown>) => {
  return <div className={styles.productsItem}>{children}</div>
}

export default ProductItem
