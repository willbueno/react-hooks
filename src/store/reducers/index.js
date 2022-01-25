import { numberReducer } from './number'
import { userReducer } from './user'

export function allReducer(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)
}