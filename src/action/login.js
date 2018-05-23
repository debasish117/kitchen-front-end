import api from '../kitchen-endpoints';
import {LOGIN} from '../constants/action_types';

export function loginRequest(values) {
    return (dispatch) => {
        dispatch({ type: LOGIN.PENDING });
        return api.loginRequest(values)
            .then((response) => {
                var token = response.data.auth_token
                // if (token) {
                    // cookie.set('token', token);
                    dispatch({ type: LOGIN.SUCCESS , token });
                // } else {
                //     throw new Error('Invalid or no token passed');
                // }
            }).catch((error) => {
                dispatch({ type: LOGIN.ERROR });
            });
    }
}