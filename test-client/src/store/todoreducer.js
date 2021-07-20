import * as actionTypes from './action';


const initialState = {
    todolist: []
}

const todoreducer = (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.TODODATASUCCESS:
            return {
                ...state,
                todolist:action.data
            }
        case actionTypes.TODODATAFAILURE:
            return {
                ...state,
                error: { isError: true, errorData:action.errordata }
            }
        default:
            return state;
    }
}

export default todoreducer;
