import React, { Component } from 'react';
import { Card, CardActions, CardContent, Typography, Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import PageWithHeader from '../../common/header/PageWithHeader';
import './Login.css';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            usernameVal: "",
            passwordVal: "",
            usernameRequiredText: "hide",
            passwordRequiredText: "hide",
            incorrectLoginInfoText: "hide"
        }
        this.validUsername = "super.tester";
        this.validPassword = "test";
        this.accessToken = "";
    }

    getUsernameOnChange = (e) => this.setState({ usernameVal: e.target.value, usernameRequiredText: "hide" });
    getPasswordOnChange = (e) => this.setState({ passwordVal: e.target.value, passwordRequiredText: "hide" });
    loginUserOnBtnClick = (e) => {
        (!this.state.usernameVal) ? this.setState({ usernameRequiredText: "show" }) : this.setState({ usernameRequiredText: "hide" });
        (!this.state.passwordVal) ? this.setState({ passwordRequiredText: "show" }) : this.setState({ passwordRequiredText: "hide" });
        (this.state.usernameVal !== "" && this.state.passwordVal !== "" && (this.state.usernameVal !== this.validUsername || this.state.passwordVal !== this.validPassword)) ? this.setState({ incorrectLoginInfoText: "show" }) : this.redirectUserToHomePage();
    }
    redirectUserToHomePage = () => {
        this.setState({ incorrectLoginInfoText: "hide" });
        window.sessionStorage.setItem('access-token', this.accessToken);
        window.sessionStorage.setItem('username', this.validUsername);
        this.props.history.push('/home/');
    }
    render() {
        return (
            <PageWithHeader title="Image Viewer">
                <Card className="login-card" >
                    <CardContent>
                        <FormControl margin="normal" size="medium" variant="standard">
                            <Typography className="login-title" variant="h5" component="h5" color="textPrimary"
                            >LOGIN</Typography>
                        </FormControl>
                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="ip-uname">Username</InputLabel>
                            <Input id="ip-uname" type="text" onChange={this.getUsernameOnChange} />
                            <FormHelperText error className={this.state.usernameRequiredText}>required</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="ip-passwd">Password</InputLabel>
                            <Input id="ip-passwd" type="password" onChange={this.getPasswordOnChange} />
                            <FormHelperText error className={this.state.passwordRequiredText}>required</FormHelperText>
                        </FormControl>
                        <FormHelperText error className={this.state.incorrectLoginInfoText}>Incorrect username and/or password</FormHelperText>
                    </CardContent>
                    <CardActions>
                        <FormControl margin="normal" size="medium" variant="standard">
                            <Button variant="contained" color="primary" id="btn-login" onClick={this.loginUserOnBtnClick}>LOGIN</Button>
                        </FormControl>
                    </CardActions>
                </Card>
            </PageWithHeader>
        );
    }
}