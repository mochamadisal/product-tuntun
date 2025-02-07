import axios from 'axios'

const serverAxios = axios.create({
  baseURL: process.env.API_URL,
})

serverAxios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default serverAxios
