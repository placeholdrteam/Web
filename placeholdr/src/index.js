import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import firebaseConfig from './config/firebase'

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig),
    reduxFirestore(firebaseConfig)
))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))