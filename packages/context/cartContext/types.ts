export interface CartState {
  cartAmount: number
}

export interface CartStoreProps extends CartState {
  setCartAmount: (payload: number) => void
}
