import { Login_Request, Login_Success, Login_Failure } from "./LoginType";

var initialState = {
    loading: false,
    user: {},
    error: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Login_Request:
            return {
                ...state,
                loading: true,
                user: {},
                error: ''
            }
        case Login_Success:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ''
            }
        case Login_Failure:
            return {
                ...state,
                loading: false,
                user: {},
                error: action.error
            }
        default:
            return state;
    }
}

export default loginReducer;
