import { atom } from 'recoil'

const userState = atom({
  key: 'userState',
  default: { user: null, isAuth: false },
})

export default userState
