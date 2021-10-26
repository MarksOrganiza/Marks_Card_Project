import { Login_Request, Login_Success, Login_Failure } from "./LoginType";

export const loginRequest = () => ({
    type: Login_Request
})

const loginUser = () => {
    return (dispatch) => {
        dispatch({
            type: Login_Success,
            payLoad: data
        })
    }
}

export default loginUser;

