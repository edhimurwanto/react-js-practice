import React from 'react';

class Avatar extends React.Component{

    render(){
        return (
            <div>
                <img src={this.props.logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}

export default Avatar;