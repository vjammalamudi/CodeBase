import * as actionTypes from './action';

const initialState = {
    loading: false,
    userdata: [],
    error: {isError: false, errorData: undefined}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USERDATALOADING:
            return {
                ...state,
                loading:true
            }
        case actionTypes.USERDATASUCCESS:
            return {
                ...state,
                loading: false,
                userdata:action.data,   
            }
        case actionTypes.USERDATAFAILURE:
            return {
                ...state,
                loading: false,
                error: { isError: true, errorData:action.errordata }
            }
        default:
            return state;
    }
}

export default userReducer;
