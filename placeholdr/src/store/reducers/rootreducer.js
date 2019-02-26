import authReducer from './authreducer';
import listingReducer from './listingreducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    listing: listingReducer
});

export default rootReducer;