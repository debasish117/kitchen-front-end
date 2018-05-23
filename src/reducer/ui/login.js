// UI reducer for the login screen.
import { handleActions } from 'redux-actions';
import { LOGIN } from '../../constants/action_types';

const loginReducers = handleActions({
  [LOGIN.PENDING]: (state) => {
    return {
      ...state,
      awaitingTransition: true
    };
  },
  [LOGIN.SUCCESS]: (state) => {
    return {
      ...state,
      awaitingTransition: false,
      redirect: true
    };
  },
  [LOGIN.ERROR]: (state) => {
    return {
      ...state,
      awaitingTransition: false
    };
  }
}, {
  awaitingTransition: false, // change of button status.
  redirect: false
});

export default loginReducers;