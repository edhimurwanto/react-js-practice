import React from 'react';
import AppBarWithSearchPrimary from '../header/AppBarWithSearchPrimary';
import Login from '../auth/Login';
import { Modal, Fade, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalState = createGlobalStyle`{
  body {
    background-color: ${props => (props.theme.mode === 'dark' ? '#111' : '#EEE')};
    color: ${props => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
  }
}`

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    border: '2px solid #000',
  },
}));

function App() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState({ mode: 'light' })

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTheme = () => {
    setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' });
  }

  const handleSubmit = (payload) => {
    handleClose();
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalState />
        <div className="App">
          <AppBarWithSearchPrimary handleOpen={handleOpen} handleChangeTheme={handleChangeTheme} theme={theme} />
          <Modal
            aria-labelledby="login-form-modal"
            aria-describedby="login-form-modal"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >

            <Fade in={open}>
              <div className={classes.paper}>
                <Login handleSubmit={handleSubmit}/>
              </div>
            </Fade>
          </Modal>
        </div>
      </>
    </ThemeProvider>
  )
}

export default App;