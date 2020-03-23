import React from 'react';
import AppBarWithSearchPrimary from '../shared/app-bar-with-search-primary';
import Login from '../auth/components/form-login';
import { Modal, Fade, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Slider from '../shared/slider/slider';
import images from '../shared/slider/images/images';

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
}));

function App() {

  console.warn = () => { }

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
    console.log(payload);

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
            BackdropProps={{ timeout: 500 }}
          >

            <Fade in={open}>
              <div>
                <Login handleSubmit={handleSubmit} handleClose={handleClose} />
              </div>
            </Fade>
          </Modal>
          <Slider slides={images} autoPlay={2} />
        </div>
      </>
    </ThemeProvider>
  )
}

export default App;