import React from 'react';
import { Input } from '@material-ui/core';

function SearchBar(props) {
  return <Input placeholder="Search" className="App-search-bar" fullWidth onChange={props.handleOnChange} />
}

export default SearchBar;
