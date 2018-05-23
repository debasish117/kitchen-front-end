/* Copyright (C) Spork Labs Solutions Pvt Ltd - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
// Store Configuration done here.
import { createStore, applyMiddleware } from 'redux';
// Root Reducer
import { appReducer } from './reducer/index';
// Redux Middlewares
// 1. Logger, Logs Redux Actions with details.
// 2. Thunk Middleware, action creator could return methods instead of actions.
import reduxThunk from 'redux-thunk';

// Configure logger middleware.
// const logger = createLogger({
//   collapsed: true,
//   duration: true
// });

var store = createStore(appReducer, applyMiddleware(reduxThunk));

export {
  store
}