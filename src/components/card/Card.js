import React from 'react';


class Card extends React.Component {

    componentDidMount(){

        fetch('http://localhost:8081/songs').then( response => response.json()).then(data => {
            console.log(data);
            
        })

    }

    render() {
        
        return (
            <h1>Hello World !</h1>
        );
    }

}

export default Card;
