import styles from '@/styles/components/header.module.scss'
import useSearch from './hooks'
import Input from '@/components/input'

const SearchProduct = () => {
  const { searchInput, handleChangeValue } = useSearch()

  return (
    <div className={styles.searchWrapper}>
      <Input
        value={searchInput}
        onChange={handleChangeValue}
        placeholder="Cari Produk..."
      />
    </div>
  )
}

export default SearchProduct
