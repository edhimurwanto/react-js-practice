import React from 'react';
import logo from '../../logo.svg';
import Avatar from '../img/Avatar';

class Header extends React.Component {

    render() {
        return (
            <header className="App-header">
                <Avatar logo={logo}/>
            </header>
        )
    }
}

export default Header;