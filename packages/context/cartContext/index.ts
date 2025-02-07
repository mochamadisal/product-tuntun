import { create } from 'zustand'
import { CartState, CartStoreProps } from './types'

const initialState: CartState = {
  cartAmount: 0,
}

export const useCartStore = create<CartStoreProps>()((set) => ({
  ...initialState,
  setCartAmount: (payload: number) =>
    set((state) => ({ ...state, cartAmount: payload })),
}))
