import { useState } from 'react';

function useForm(){
    const [state, setState] = useState({
        email: "",
        password: "",
        passwordConfrim: "",
        hidePassword: true,
        error: false,
})

    const handleChange = name => e => {
        setState({
            ...state,
            [name]: e.target.value
        });
    };

    const showPassword = () => {
        setState({
            ...state,
            hidePassword: !state.hidePassword
        });
    };

    const errorOpen = e => {
        setState({
            ...state,
            error: true
        })
    };

    return [state,handleChange,showPassword,errorOpen];
}

export default useForm;