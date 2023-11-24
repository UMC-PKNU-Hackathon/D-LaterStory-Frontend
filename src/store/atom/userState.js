import { atom } from 'recoil'

const userState = atom({
  key: 'userState',
  default: { user: null, isAuth: true },
})

export default userState
