import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'userState',
  storage: localStorage,
})

const userState = atom({
  key: 'userState',
  default: { user: null, isAuth: false },
  effects_UNSTABLE: [persistAtom],
})

export default userState
