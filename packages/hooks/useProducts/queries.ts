import clientAxios from 'packages/libs/api-client'

export const getProductList = () =>
  clientAxios({
    method: 'GET',
    url: '/product',
  }).then((res) => res.data ?? [])
