import React, {useEffect} from 'react';
import './App.css';
import catcher from './asset/catcher.png'
import macaron from './asset/macaron.jpg'

class Macarons extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      y: 0
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((s, p) => {
        return {y: this.state.y += 5}
      })
    }, 300)
  }

  render() {
    let macaronStyle = {top: `${this.state.y}px`, left: window.innerWidth - window.innerWidth / 2}
    return <div className='macaron' style={macaronStyle}><img src={macaron} style={{width: '30%'}}/></div>
  }
}

class Plate extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      x: window.innerWidth - window.innerWidth / 2,
      y: window.innerHeight - window.innerHeight / 4
    }
  }

  componentDidMount() {
    const plate = document.getElementById('plate')
    window.addEventListener('resize', () => {
      this.setState((s, p) => {
        return {y: window.innerHeight - window.innerHeight / 4}
      })
    })
    window.addEventListener('keydown', e => {
      console.log(`${e.code} pressed x: ${this.state.x}`)
      if (e.code == 'ArrowLeft'){
        this.setState((s, p) => {
          return {x: s.x - 3}
        })
      }
      if (e.code == 'ArrowRight'){
        this.setState((s, p) => {
          return {x: s.x + 3}
        })
      }
    })
  }

  render(){
    let plateStyle = {top: this.state.y, left: this.state.x}
    let catchStyle = {marginTop: '20px', width: '100%', position: 'absolute'}
    return <div style={plateStyle} id='plate'>
      <a href='https://www.instagram.com/meowcarons.pawtisserie/?hl=en'>
        donate here
      </a>
      <img style={catchStyle} src={catcher} />
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <Macarons />
      <Plate />
    </div>
  );
}

export default App;
