import { combineReducers } from 'redux';
import { uiReducers } from './ui';
// import { dataReducers } from './data';

const appReducer = combineReducers({
    ui: uiReducers
    // data: dataReducers,
    // TODO: Push formReducer inside Vendor reducers in future, not working as of now.
    // vendor: vendorReducers
   });

export {
    appReducer
}