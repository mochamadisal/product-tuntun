import { useCartStore } from 'packages/context/cartContext'
import { CartStoreProps } from 'packages/context/cartContext/types'
import useStore from 'packages/context/store'

const useShoppingCart = () => {
  const cartAmount =
    useStore(useCartStore, (state: CartStoreProps) => state.cartAmount) || 0

  return {
    cartAmount,
  }
}

export default useShoppingCart
