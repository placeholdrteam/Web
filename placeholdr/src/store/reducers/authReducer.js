import actions from '../actions/types'

const initState = { }

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case actions.auth.CREATE_USER:
      return state
    default:
      return state
  }
}

export default authReducer