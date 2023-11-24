import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

export { axiosInstance }
