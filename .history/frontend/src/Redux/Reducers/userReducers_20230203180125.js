import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
} from '../Constants/ProductConstants.js';
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, product: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
