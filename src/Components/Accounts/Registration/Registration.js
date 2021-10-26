import React from 'react';
import './Registration.css';
import { InputAdornment,FormControl, Input, InputLabel, Typography } from "@material-ui/core";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import useForm from '../../../Hooks/useForm';
import { Button, Card } from '@mui/material';

function Registration() {
    const [state, handleChange, showPassword,errorOpen] = useForm();
    console.log(state);


    const passwordMatch = () =>{ 
        return state.password === state.passwordConfrim;
    };

    const isValid = () => {
        if (state.email === "" || state.password === "" || state.passwordConfrim === "") {
            return false;
        }
        return true;
    };

    const submitRegistration = e => {
        e.preventDefault();
        if (state.email !== "" && state.password !== "" && state.passwordConfrim !== "") {
            if(passwordMatch()){
            const newUserCredentials = {
                email: state.email,
                password: state.password,
                passwordConfrim: state.passwordConfrim
                
            }
        }            

         }else {
                errorOpen();
            }        
        //dispath to userActions
    };
    return (
        <div className="main" align="center">
            <Card sx={{ minWidth: 275 }}>
            <form onSubmit={() => submitRegistration}>
                <Typography
                    variant="h4"> Sign Up
               </Typography>
                <FormControl required margin="normal">
                    <InputLabel htmlFor="email" className="label">
                        E-mail
                </InputLabel>
                    <Input
                        variant="outlined"
                        name="email"
                        type="email"
                        autoComplete="email"
                        disableUnderline={true}
                        className={(state.error ===  true && state.email == '') ?  'alert' : 'inputData'}
                        onChange={handleChange("email")}
                    />
                </FormControl>
                <br />
                <FormControl required margin="normal">
                    <InputLabel htmlFor="password"
                        className="label"
                    >
                        Password
                   </InputLabel>
                    <Input
                        name="password"
                        autoComplete="password"
                        className={(state.error ===  true && state.password == '') ?  'alert' : 'inputData'}
                        disableUnderline={true}
                        onChange={handleChange("password")}
                        type={state.hidePassword ? "password" : "input"}
                        endAdornment={
                            state.hidePassword ? (
                                <InputAdornment position="end" className="passwordEye">
                                    <VisibilityOffTwoToneIcon
                                        fontSize="default"
                                        onClick={showPassword}
                                    />
                                </InputAdornment>
                            ) : (
                                    <InputAdornment position="end" className="passwordEye">
                                        <VisibilityTwoToneIcon
                                            fontSize="default"
                                            onClick={showPassword}
                                        />
                                    </InputAdornment>
                                )
                        }
                    />
                </FormControl>
                <br />
                <FormControl required margin="normal">
                    <InputLabel htmlFor="passwordConfrim"
                        className="label"
                    >
                        Confrim Password
          </InputLabel>
                    <Input
                        name="passwordConfrim"
                        autoComplete="passwordConfrim"
                        className={(state.error ===  true && state.passwordConfrim == '' || (state.passwordConfrim !== '' && passwordMatch() === false)) ?  'alert' : 'inputData'}
                        disableUnderline={true}
                        onClick={state.showPassword}
                        onChange={handleChange("passwordConfrim")}
                        type={state.hidePassword ? "password" : "input"}
                        endAdornment={
                            state.hidePassword ? (
                                <InputAdornment position="end" className="passwordEye"                                >
                                    <VisibilityOffTwoToneIcon
                                        fontSize="default"
                                        onClick={showPassword}
                                    />
                                </InputAdornment>
                            ) : (
                                    <InputAdornment position="end" className="passwordEye"                                    >
                                        <VisibilityTwoToneIcon
                                            fontSize="default"
                                            onClick={showPassword}
                                        />
                                    </InputAdornment>
                                )
                        }
                    />
                    <div className="alertmessage">{state.passwordConfrim !== '' && passwordMatch() === false ?  'Confirm Password must be equall to password' : null}</div>
                </FormControl>
                <br />
                <Button
                    // disabled={!isValid()}
                    disableRipple
                    fullWidth
                    variant="contained"
                    //   className={classes.button}
                    type="submit"
                    onClick={submitRegistration}
                >
                    Submit
        </Button>
            </form>
            </Card>
        </div>
    )
}

export default Registration;