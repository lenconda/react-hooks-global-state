import { profileState } from './profile/state'
import { counterState } from './counter/state'

export default {
  ...profileState,
  ...counterState
}