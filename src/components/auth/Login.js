import React, { Component } from 'react';
import { CardHeader, CardContent, CardActions, Button, FormControl, InputLabel, Input, FormHelperText, FormControlLabel, Link, Checkbox } from '@material-ui/core';
import ResponsiveCard from './ResponsiveCard';
import ResponsiveContainerGrid from './ResponsiveContainerGrid';

const chekbox = (<Checkbox
    value="checkedB"
    color="primary"
/>)

class Login extends Component {

    render() {

        const { handleSubmit } = this.props;
        return (
            <ResponsiveContainerGrid>
                <ResponsiveCard>
                    <CardHeader title="Sign in" />
                    <CardContent className="form-login">
                        <FormControl fullWidth style={{ marginTop: 20 }}>
                            <InputLabel htmlFor="my-input">Username</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" placeholder="Enter your username" />
                            <FormHelperText id="my-helper-text">Your username.</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth style={{ marginTop: 20 }}>
                            <InputLabel htmlFor="my-input">Password</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" placeholder="Enter your password" />
                            <FormHelperText id="my-helper-text">Your password.</FormHelperText>
                        </FormControl>
                        <FormControlLabel
                            control={chekbox}
                            label="Remember me"
                            fullWidth
                            style={{ marginTop: 20 }}
                        />
                        <Button
                            variant="outlined"
                            size="large"
                            color="primary"
                            fullWidth
                            style={{ padding: 15, marginTop: 30 }}
                            onClick={handleSubmit}
                        >
                            Sign in
                        </Button>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Link href="#" style={{ alignSelf: 'center', marginTop: 20 }}>
                            Forgot Password ?
                    </Link>
                    </CardActions>
                </ResponsiveCard>
            </ResponsiveContainerGrid>
        );
    }
}

export default Login;