import clientAxios from 'packages/libs/api-client'

export const getProductList = () =>
  clientAxios({
    method: 'GET',
    url: '/products/lists',
  }).then((res) => res.data ?? [])
