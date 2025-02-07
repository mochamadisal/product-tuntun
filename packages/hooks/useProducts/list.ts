import { useQuery } from 'react-query'
import { getProductList } from './queries'
import { ProductItem } from './types'
import { useMemo } from 'react'
import { useSearchStore } from 'packages/context/searchContext'
import { SearchStoreProps } from 'packages/context/searchContext/types'
import useStore from 'packages/context/store'

const useProductsList = () => {
  const searchInput = useStore(
    useSearchStore,
    (state: SearchStoreProps) => state.searchInput
  )

  const { data, isLoading: isLoadingDataProducts } = useQuery<ProductItem[]>(
    ['FETCH_PRODUCT_LIST'],
    async () => {
      const response = await getProductList()

      return response.data || []
    }
  )

  const dataProducts = useMemo(() => {
    return data?.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(String(searchInput).toLowerCase()) > -1
      )
    })
  }, [data, searchInput])

  return {
    dataProducts,
    isLoadingDataProducts,
  }
}

export default useProductsList
