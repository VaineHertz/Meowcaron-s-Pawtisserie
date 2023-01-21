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
        <div className='landing-text'>  
          <h1>Meowcarons</h1>
          <h2>Handmade Macarons</h2>
          <h3>Delivered to your door</h3>   
          </div>
          <img className='chef' src={chef}></img> 
      </div>
      </>
    }
  }

  export default Layout