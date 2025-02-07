import Button from '@/components/button'
import fontModule from '@/styles/variables/font.module.scss'
import { FiShoppingCart } from 'react-icons/fi'
import { useCartStore } from 'packages/context/cartContext'

const ShoppingCart = () => {
  const { cartAmount } = useCartStore()

  return (
    <div>
      <Button variant="icon">
        <FiShoppingCart style={{ fontSize: fontModule.h5 }} />
        {cartAmount > 0 ? cartAmount : ''}
      </Button>
    </div>
  )
}

export default ShoppingCart
