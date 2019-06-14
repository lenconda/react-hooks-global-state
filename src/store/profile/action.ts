import { Action } from '../interface'

export const changeUsername = (username: string): Action => {
  return {
    type: 'CHANGE_USERNAME',
    payload: username
  }
}

export const changeAge = (age: number): Action => {
  return {
    type: 'CHANGE_AGE',
    payload: age
  }
}

export const changeGender = (gender: string): Action => {
  return {
    type: 'CHANGE_GENDER',
    payload: gender
  }
}
