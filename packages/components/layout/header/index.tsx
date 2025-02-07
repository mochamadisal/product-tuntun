import styles from '@/styles/components/header.module.scss'
import fontModule from '@/styles/variables/font.module.scss'
import SearchProduct from './components/search'
import ShoppingCart from './components/cart'
import Account from './components/account'
import { usePathname, useRouter } from 'next/navigation'
import paths from 'packages/utils/constants/paths'
import Button from '@/components/button'
import { FiArrowLeft } from 'react-icons/fi'

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()
  const currentPathName = `/${pathname?.split('/')?.[1]}`

  const isHomepage = currentPathName === paths.home

  return (
    <div className={styles.headerWrapper}>
      {isHomepage ? (
        <div className={styles.headerTitle}>
          <h2 data-testid="title-header">catalogpedia</h2>
          {isHomepage && <SearchProduct />}
        </div>
      ) : (
        <Button variant="icon" onClick={() => router.back()}>
          <FiArrowLeft style={{ fontSize: fontModule.h5 }} />
        </Button>
      )}
      <div className={styles.headerAction}>
        <Account />
        <ShoppingCart />
      </div>
    </div>
  )
}

export default Header
