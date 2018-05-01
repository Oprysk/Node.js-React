// import R from 'ramda'

import {
    MAIN_NAV_START,
    MAIN_NAV_SUCCESS,
    MAIN_NAV_FAILURE
} from '../actionTypes'

const initialState = {isOpen: true}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case MAIN_NAV_START:
            return state;
        case  MAIN_NAV_SUCCESS:
            return {isOpen: payload};
        case MAIN_NAV_FAILURE:
            return state;
        default:
            return state
    }
}