import { profileState } from './profile/state'
import { counterState } from './counter/state'

export default {
  ...profileState,
  ...counterState
}

export interface State {
  username: string
  age: number
  gender: number
  joinTime: number
}

export const state: State = {
  username: 'test',
  age: 20,
  gender: 1,
  joinTime: 1560489444000
}