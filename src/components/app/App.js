import React from 'react';
import './App.css';
import Header from '../header/Header';
import Card from '../card/Card';

class App extends React.Component {
constructor(props){
  super(props)
  this.state={
  person : [ {
    name: "Edi",
    age : 20
  } ]
  }
this.tambah=this.tambah.bind(this)
}

tambah(){
  let someone = {name:"Like You", age:45}
  this.state.person.push(someone)
  this.setState({
    person : this.state.person
  })
}

  render() {

    let cards = [];
    for (let index = 0; index < this.state.person.length; index++) {
      cards.push(<Card key={index} persons={this.state.person[index]}/>);
    }
    

    return (
      <div className="App">
        <Header />
        {cards}
        {/* <button id="btn1" onClick={this.tambah} >Add Card</button> */}
      </div>
    );
  }
}

export default App;