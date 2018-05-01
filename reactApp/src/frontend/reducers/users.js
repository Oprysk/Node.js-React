import {
    USER_FETCH_START,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAILURE
} from '../actionTypes'



const initialState = {
    data:{},
    loading:true
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case USER_FETCH_START:
            return state;
        case USER_FETCH_SUCCESS:
            return {
                data: payload,
                loading: false
            };
        case USER_FETCH_FAILURE:
            return state;
        default:
            return state
    }
}