import { combineReducers } from 'redux';
// import { uiReducers } from './ui';
// import { dataReducers } from './data';
import login from './login';

const uiReducers = combineReducers({
    login
    // TODO: Push formReducer inside Vendor reducers in future, not working as of now.
    // vendor: vendorReducers
   });

export {
    uiReducers
}