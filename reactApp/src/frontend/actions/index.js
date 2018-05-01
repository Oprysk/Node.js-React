import * as AT  from '../actionTypes'
import {
  getUsers as fetchUsersApi,
} from '../api'




export const createUser = () => async dispatch => {
    dispatch({type: AT.USER_FETCH_START});
    try {
        const users = await fetchUsersApi();
        dispatch({
            type: AT.USER_FETCH_SUCCESS,
            payload: users
        })
    } catch (err) {
        dispatch({
            type: AT.USER_FETCH_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const fetchUsers = () => async dispatch => {
    dispatch({type: AT.USER_FETCH_START});
    try {
        const users = await fetchUsersApi();
        dispatch({
            type: AT.USER_FETCH_SUCCESS,
            payload: users
        })
    } catch (err) {
        dispatch({
            type: AT.USER_FETCH_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const toggleNavMenu = (data)=> async dispatch => {
    dispatch({type: AT.MAIN_NAV_START});
    try {

        dispatch({
            type: AT.MAIN_NAV_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: AT.MAIN_NAV_FAILURE,
            payload: err,
            error: true
        })
    }
};
