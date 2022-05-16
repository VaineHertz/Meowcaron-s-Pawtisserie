import logo from './logo.svg';
import React from 'react';
import './App.css';

class Plate extends React.Component {
  constructor(props){
    super(props)

  }
  render(){
    return <div id='plate'>Alyssa's website <a href='https://www.instagram.com/meowcarons.pawtisserie/?hl=en'>donate here</a></div>
  }
}

function App() {
  return (
    <div className="App">
      <Plate />
    </div>
  );
}

export default App;
