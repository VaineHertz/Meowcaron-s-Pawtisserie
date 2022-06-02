import React, { useEffect } from 'react';
import './index.scss'
import Sidebar from '../Sidebar'
import chef from '../../asset/chef.png'

class Layout extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return <>
      <Sidebar />
      <div className='landing'>
        <h2>Hello my name is Aly and I am a professional Macaronettear</h2>
        <img src={chef}></img>
        <h1>Please trust me with your macaron pastry needs!</h1>
      </div>
      </>
    }
  }

  export default Layout