import React, { useState, useReducer } from 'react'
import { render } from 'react-dom'
import defaultState from './store/state'
import { profileReducer } from './store/profile/reducer'
import { counterReducer } from './store/counter/reducer'
import actions from './store/actions'

const App = (): JSX.Element => {
  const [username, updateUsername] = useState('')
  const [age, updateAge] = useState(0)
  const [gender, updateGender] = useState('male')
  const [profileState, profileDispatcher] = useReducer(profileReducer, defaultState)
  const [counterState, counterDispatcher] = useReducer(counterReducer, defaultState)

  return (
    <div>
      <div>
        <input type={'text'}
              defaultValue={profileState.username}
              onChange={event => updateUsername(event.target.value)}/>
        <button onClick={() => profileDispatcher(actions.changeUsername(username))}>
          Change username
        </button>
      </div>
      <div>
        <input type={'number'}
              defaultValue={profileState.age}
              onChange={event => updateAge(parseInt(event.target.value))}/>
        <button onClick={() => profileDispatcher(actions.changeAge(age))}>
          Change age
        </button>
      </div>
      <div>
        <input type={'text'}
              defaultValue={profileState.gender}
              onChange={event => updateGender(event.target.value)}/>
        <button onClick={() => profileDispatcher(actions.changeGender(gender))}>
          Change gender
        </button>
      </div>
      <div>
        <p><strong>Username: </strong>{profileState.username}</p>
        <p><strong>Age: </strong>{profileState.age}</p>
        <p><strong>Gender: </strong>{profileState.gender}</p>
      </div>
      <div>
        <button onClick={() => counterDispatcher(actions.increment())}>+</button>&nbsp;
        <span>{counterState.count}</span>&nbsp;
        <button onClick={() => counterDispatcher(actions.decrement())}>-</button>
        <button onClick={() => counterDispatcher(actions.reset())}>Reset</button>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
