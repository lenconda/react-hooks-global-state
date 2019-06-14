import { Action } from '../interface'

export const increment = (): Action => {
  return {
    type: 'INCREMENT',
    payload: null
  }
}

export const decrement = (): Action => {
  return {
    type: 'DECREMENT',
    payload: null
  }
}

export const reset = (): Action => {
  return {
    type: 'RESET',
    payload: null
  }
}
