import clientAxios from 'packages/libs/api-client'

export const getProductList = () =>
  clientAxios({
    method: 'GET',
    url: '/products/lists',
  }).then((res) => res.data ?? [])

export const getProductDetail = (id: string) =>
  clientAxios({
    method: 'GET',
    url: `/products/detail/${id}`,
  }).then((res) => res.data ?? [])
