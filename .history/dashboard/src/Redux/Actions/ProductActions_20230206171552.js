import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from './../Constants/ProductConstants';
import axios from 'axios';
import { logout } from './userActions.js';
// ALL PRODUCT
export const listProducts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/products/all`, config);

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Không có quyền') {
            dispatch(logout());
        }
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: message,
        });
    }
};
