import React, { Component } from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText, FormControlLabel, Link, Checkbox, CardMedia, Typography, IconButton } from '@material-ui/core';
import ResponsiveCard from './responsive-card';
import ResponsiveContainerGrid from './responsive-container-grid';
import { createGlobalStyle } from 'styled-components';
import react from '../../assets/react-material.png';
import styles from '../styles/auth-styles';
import CloseIcon from '@material-ui/icons/Close';

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
                error: undefined,
                helperTextError: ' '
            },
            password: {
                value: '',
                error: undefined,
                helperTextError: ' '
            },
            rememberMe: false,
        }
    }

    handleChangeInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        if (!value) {
            this.setState({ ...this.state, [name]: { ...this.state[name], value, error: true, helperTextError: 'This field is required' } });
        } else if (name === "password" && value.length < 6) {
            this.setState({ ...this.state, [name]: { ...this.state[name], value, error: true, helperTextError: 'Please enter a valid password that is at least 6 characters' } });
        } else
            this.setState({ ...this.state, [name]: { ...this.state[name], value, error: false, helperTextError: '' } });

    }

    handleCheckBox = () => {
        this.setState({ rememberMe: !this.state.rememberMe });
    }

    render() {

        const { handleSubmit, handleClose } = this.props;
        
        return (
            <ResponsiveContainerGrid>
                <GlobalState />
                <ResponsiveCard>
                    <div className={styles.cardHeader} style={styles.cardHeader}>
                        <IconButton
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleClose}
                            color="inherit"
                            style={{ display: "flex", flexDirection: 'row', alignSelf: "flex-end" }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <CardMedia>
                            <img alt="react-material" src={react} style={styles.image} />
                        </CardMedia>
                    </div>
                    <div className="form-login" style={styles.formLogin}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="username-input">Username</InputLabel>
                            <Input
                                id="username-input"
                                name="username"
                                error={this.state.username.error}
                                type="text"
                                aria-describedby="username-input"
                                placeholder="Enter your username"
                                onChange={this.handleChangeInput} />
                            <FormHelperText id="helper-text-username-error" error={this.state.username.error}>{this.state.username.helperTextError}</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth style={styles.marginTop}>
                            <InputLabel htmlFor="my-input">Password</InputLabel>
                            <Input
                                id="password-input"
                                name="password"
                                error={this.state.password.error}
                                type="password"
                                aria-describedby="password-input"
                                placeholder="Enter your password"
                                onChange={this.handleChangeInput} />
                            <FormHelperText id="helper-text-password-error" error={this.state.password.error}>{this.state.password.helperTextError}</FormHelperText>
                        </FormControl>
                        {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        checked={this.state.rememberMe}
                                        onChange={this.handleCheckBox}
                                    />
                                }
                                label="Remember me"
                            />
                            <Link href="#">
                                Forgot Password ?
                        </Link>
                        </div> */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    checked={this.state.rememberMe}
                                    onChange={this.handleCheckBox}
                                />
                            }
                            label="Remember me"
                            style={{ marginTop: 10 }}
                        />
                        <Button
                            variant="outlined"
                            size="large"
                            color="primary"
                            fullWidth
                            style={styles.marginTop}
                            disabled={(this.state.username.error === false && this.state.password.error === false) ? false : true }
                            onClick={() => handleSubmit({ username: this.state.username.value, password: this.state.password.value, rememberMe: this.state.rememberMe })}
                        >
                            Sign in
                        </Button>
                    </div>
                    <div className={styles.cardActions} style={styles.cardActions}>
                        <Link href="#">
                            Forgot Password ?
                        </Link>
                        <div className={styles.cardActions2} style={styles.cardActions2}>
                            <Typography>Don't have an account ?  </Typography>
                            <Link href="#" style={styles.link}>
                                Sign Up
                        </Link>
                        </div>
                    </div>
                </ResponsiveCard>
            </ResponsiveContainerGrid >
        );
    }
}

export default FormLogin;