import React, { useState, useReducer } from 'react'
import { render } from 'react-dom'
import { reducer } from './store/reducers'
import { state as defaultState } from './store/state'
import {
  updateUsername,
  updateAge,
  updateGender,
  updateJoinTime
} from './store/actions'

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [username, setUsername] = useState(state.username)
  const [age, setAge] = useState(state.age)
  const [gender, setGender] = useState(state.gender)

  return (
    <div>
      <div>
        <input type={'text'}
              value={username}
              onChange={event => setUsername(event.target.value)}/>
        <button onClick={() => dispatch(updateUsername(username))}>
          Update username
        </button>
      </div>
      <div>
        <input type={'number'}
              value={age}
              onChange={event => setAge(parseInt(event.target.value))}/>
        <button onClick={() => dispatch(updateAge(age))}>
          Update age
        </button>
      </div>
      <div>
        <select value={gender} 
              onChange={event => setGender(parseInt(event.target.value))}>
          <option value={1}>Male</option>
          <option value={0}>Female</option>
        </select>
        <button onClick={() => dispatch(updateGender(gender))}>Update gender</button>
      </div>
      <div>
        <p><strong>Username: </strong>{state.username}</p>
        <p><strong>Age: </strong>{state.age}</p>
        <p><strong>Gender: </strong>{state.gender === 1 ? 'Male' : 'Female'}</p>
        <p>
          <strong>Join Time: </strong>
          {new Date(state.joinTime).toLocaleString()}&nbsp;
          <button 
            onClick={() => dispatch(updateJoinTime(Date.parse(new Date().toString())))}>
            Update join time
          </button>
        </p>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
