import React from 'react';
import { Typography } from '@material-ui/core';
import '../app/App.css';

function PageTitle(props) {
  return <Typography variant="h5" className="App-header-title">{props.title}</Typography>
}

export default PageTitle;
