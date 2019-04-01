import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  db: firestoreReducer,
  auth: authReducer
})

export default rootReducer