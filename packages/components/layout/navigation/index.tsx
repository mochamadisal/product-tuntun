import styles from '@/styles/components/navigation.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import navigations from 'packages/utils/constants/navigations'

const Navigation = () => {
  const pathname = usePathname()
  const currentPathName = `/${pathname?.split('/')?.[1]}`

  return (
    <div className={styles.navigationWrapper}>
      {navigations.map((navigation, index) => {
        const isActive = currentPathName === navigation.path

        return (
          <Link
            className={`${styles.navigationItem} ${
              isActive ? styles.navigationActive : ''
            }`}
            key={`navigation-${index + 1}`}
            href={navigation.path}
          >
            {navigation.icon}
            <h4>{navigation.label}</h4>
          </Link>
        )
      })}
    </div>
  )
}

export default Navigation
