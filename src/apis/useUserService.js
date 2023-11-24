import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import userState from '../store/atom/userState'

const useUserService = () => {
  const setUserState = useSetRecoilState(userState)
  return {
    register: async (id, password, nickname) => {
      const body = {
        id,
        password,
        nickname,
      }
      console.log(body)
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/auth/register`,
        body,
      )
      return response
    },
    login: async (id, password) => {
      const body = {
        id,
        password,
      }
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/auth/login`,
        body,
      )
      return response
    },
    logout: () => {
      localStorage.removeItem('accessToken')
      setUserState({ user: null, isAuth: false })
    },
  }
}

export default useUserService
