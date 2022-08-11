import React, { useEffect } from 'react';
import './index.scss'
import Sidebar from '../Sidebar'
import InstagramEmbed from 'react-instagram-embed'
import chef from '../../asset/chef.png'

class Layout extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return <>
      <Sidebar />
      <div className='landing'>
        <h1>
        Hello my name is Aly and I am a professional Macaronettear
        </h1><br/><br/>
        Please trust me with your macaron pastry needs!
      </div>
      </>
    }
  }

  export default Layout