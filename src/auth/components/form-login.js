import React, { Component } from 'react';
import { CardHeader, CardContent, CardActions, Button, FormControl, InputLabel, Input, FormHelperText, FormControlLabel, Link, Checkbox } from '@material-ui/core';
import ResponsiveCard from './responsive-card';
import ResponsiveContainerGrid from './responsive-container-grid';
import { createGlobalStyle } from 'styled-components';

const GlobalState = createGlobalStyle`{
    body {
      background-color: ${props => (props.theme.mode === 'dark' ? '#111' : '#EEE')};
      color: ${props => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
    }
  }`

class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: {
                value: '',
                error: false,
                helperTextError: ' '
            },
            password: {
                value: '',
                error: false,
                helperTextError: ' '
            },
            rememberMe: false,
            disabledButton: true
        }
    }

    handleChangeUsername = (e) => {

        if (e.target.value === "") {
            this.setState({ username: { ...this.state.username, error: true, helperTextError: 'This field is required!' }, disabledButton: true });
        } else {
            this.setState({ username: { ...this.state.username, value: e.target.value, error: false, helperTextError: '' } });
        }
    }

    handleChangePassword = (e) => {
        if (e.target.value === "") {
            this.setState({ password: { ...this.state.password, value: e.target.value, error: true, helperTextError: 'This field is required!' }, disabledButton: true });
        } else
            this.setState({ password: { ...this.state.password, value: e.target.value, error: false, helperTextError: '' }, disabledButton: false });
    }

    handleCheckBox = () => {
        this.setState({ rememberMe: !this.state.rememberMe });
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <ResponsiveContainerGrid>
                <GlobalState />
                <ResponsiveCard>
                    <CardHeader title="Sign in" />
                    <CardContent className="form-login">
                        <FormControl fullWidth style={{ marginTop: 20 }}>
                            <InputLabel htmlFor="username-input">Username</InputLabel>
                            <Input
                                id="username-input"
                                error={this.state.username.error}
                                type="text"
                                aria-describedby="username-input"
                                placeholder="Enter your username"
                                onChange={this.handleChangeUsername} />
                            <FormHelperText id="helper-text-username-error" error={this.state.username.error}>{this.state.username.helperTextError}</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth style={{ marginTop: 20 }}>
                            <InputLabel htmlFor="my-input">Password</InputLabel>
                            <Input
                                id="password-input"
                                error={this.state.password.error}
                                type="password"
                                aria-describedby="password-input"
                                placeholder="Enter your password"
                                onChange={this.handleChangePassword} />
                            <FormHelperText id="helper-text-password-error" error={this.state.password.error}>{this.state.password.helperTextError}</FormHelperText>
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    checked={this.state.rememberMe}
                                    onChange={this.handleCheckBox}
                                />
                            }
                            label="Remember me"

                            style={{ marginTop: 20 }}
                        />
                        <Button
                            variant="outlined"
                            size="large"
                            color="primary"
                            fullWidth
                            style={{ padding: 15, marginTop: 30 }}
                            disabled={this.state.disabledButton}
                            onClick={() => handleSubmit({ username: this.state.username.value, password: this.state.password.value, rememberMe: this.state.rememberMe })}
                        >
                            Sign in
                        </Button>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Link href="#" style={{ marginTop: 15 }}>
                            Forgot Password ?
                    </Link>
                    </CardActions>
                </ResponsiveCard>
            </ResponsiveContainerGrid>
        );
    }
}

export default FormLogin;