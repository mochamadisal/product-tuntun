import { ReactNode } from 'react'
import paths from './paths'
import { FiHome, FiShoppingCart, FiUser } from 'react-icons/fi'

interface NavigationItem {
  label: string
  path: string
  icon: ReactNode
}

const navigations: NavigationItem[] = [
  {
    label: 'Beranda',
    icon: <FiHome />,
    path: paths.home,
  },
]

export default navigations
