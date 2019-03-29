import actions from './types'

export const createUser = (fields) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fb = getFirebase()
    const db = getFirestore()
    fb.auth().createUserWithEmailAndPassword(fields.email, fields.password).then(res => {
      const user = res.user
      db.collection('users').doc(user.uid).set({
        firstName: fields.firstName,
        lastName: fields.lastName,
        email: fields.email,
      }).then(() => {
        dispatch({ type: actions.auth.CREATE_USER })
      })
    })
  }
}

export const loginUser = (fields) => {
  return (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase()
    fb.auth().signInWithEmailAndPassword(fields.email, fields.password).then(() => {
      dispatch({ type: actions.auth.LOGIN_USER })
    })
  }
}

export const logoutUser = () => {
  return (dispatch, getState, { getFirebase }) => {
    const fb = getFirebase()
    fb.auth().signOut().then(() => {
      dispatch({ type: actions.auth.LOGOUT_USER })
    })
  }
}