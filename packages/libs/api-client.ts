import axios from 'axios'

const clientAxios = axios.create({
  baseURL: '/api',
})

clientAxios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default clientAxios
