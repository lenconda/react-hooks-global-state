import { ProfileState } from './state'
import { Action } from '../interface'

export const profileReducer = (state: ProfileState, action: Action) => {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: action.payload
      }
    case 'CHANGE_AGE':
      return {
        ...state, 
        age: action.payload
      }
    case 'CHANGE_GENDER':
      return {
        ...state,
        gender: action.payload
      }
    default:
      return state
  }
}