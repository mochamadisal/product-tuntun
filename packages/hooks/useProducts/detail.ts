import { useQuery } from 'react-query'
import { getProductDetail } from './queries'
import { ProductItem } from './types'
import { useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { CartStoreProps } from 'packages/context/cartContext/types'
import { useCartStore } from 'packages/context/cartContext'
import useStore from 'packages/context/store'

const useProductDetail = ({ id }: { id: string }) => {
  const cartStore = useStore(useCartStore, (state: CartStoreProps) => state)

  const [selectedVariant, setSelectedVariant] = useState<string>('')
  const [currentImageSlider, setCurrentImageSlider] = useState<number>(0)

  const { data, isLoading: isLoadingDataProduct } = useQuery<ProductItem>(
    ['FETCH_PRODUCT_DETAIL', id],
    async () => {
      const response = await getProductDetail(id)

      return response.data || []
    },
    { enabled: Boolean(id) }
  )

  const product = useMemo(() => {
    if (data) {
      return {
        ...data,
        discount_amount: Math.ceil(
          ((data.price - data.discount_price) / data.price) * 100
        ),
      }
    }
  }, [data])

  const images = useMemo(() => {
    if (data) {
      return !selectedVariant
        ? product?.images
        : product?.variants?.find((row) => row.code === selectedVariant)?.images
    }
  }, [data, selectedVariant])

  const handleChangeVariant = (variant: string) => {
    setSelectedVariant(variant)
    setCurrentImageSlider(0)
  }

  const handleAddtoCart = () => {
    if (cartStore?.setCartAmount) {
      cartStore.setCartAmount(cartStore.cartAmount + 1)
    }
    toast.success('Berhasil Memasukkan ke Keranjang')
  }

  return {
    product,
    isLoadingDataProduct,
    images,
    selectedVariant,
    currentImageSlider,
    setCurrentImageSlider,
    handleChangeVariant,
    handleAddtoCart,
  }
}

export default useProductDetail
