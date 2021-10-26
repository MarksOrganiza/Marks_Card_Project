import React from 'react';
import '../Registration/Registration.css';
import { InputAdornment, FormControl, Input, InputLabel, Typography } from "@material-ui/core";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import useForm from '../../../Hooks/useForm';
import { Button, Card } from '@mui/material';

function Login() {
    const [state, handleChange, showPassword, errorOpen] = useForm();
    console.log(state);

    const handleSubmit = e => {
        e.preventDefault();
        if (state.email != '' && state.password != '') {
            const loginCredentials = {
                email: state.email,
                password: state.password,
            }
        }
        else {
            errorOpen();
        }
    }

    return (
        <div className="main" align="center">
            <Card sx={{ minWidth: 275 }} className="cardData">
                <form onSubmit={() => handleSubmit}>
                    <Typography
                        variant="h4"> Sign In
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
                            className={(state.error === true && state.email == '') ? 'alert' : 'inputData'}
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
                            className={(state.error === true && state.password == '') ? 'alert' : 'inputData'}
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
                    <Button
                        // disabled={!isValid()}
                        disableRipple
                        fullWidth
                        variant="contained"
                        //   className={classes.button}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    )
}

export default Login;