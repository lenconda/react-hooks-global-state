import { Action } from './interface'
import { State } from './state'

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
    return {
      ...state,
      username: action.payload
    }
    case 'UPDATE_AGE':
    return {
      ...state,
      age: action.payload
    }
    case 'UPDATE_GENDER':
    return {
      ...state,
      gender: action.payload
    }
    case 'UPDATE_JOINTIME':
    return {
      ...state,
      joinTime: action.payload
    }
  }
}