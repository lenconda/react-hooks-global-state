import * as profileActions from './profile/action'
import * as counterActions from './counter/action'
import { Action } from './interface'

export default {
  ...profileActions,
  ...counterActions
}

export const updateUsername = (username: string): Action => {
  return {
    type: 'UPDATE_USERNAME',
    payload: username
  }
}

export const updateAge = (age: number): Action => {
  return {
    type: 'UPDATE_AGE',
    payload: age
  }
}

export const updateGender = (gender: number): Action => {
  return {
    type: 'UPDATE_GENDER',
    payload: gender
  }
}

export const updateJoinTime = (joinTime: number): Action => {
  return {
    type: 'UPDATE_JOINTIME',
    payload: joinTime
  }
}