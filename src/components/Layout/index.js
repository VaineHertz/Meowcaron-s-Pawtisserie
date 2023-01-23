import React, { useEffect } from 'react';
import './index.scss'
import Sidebar from '../Sidebar'
import InstagramEmbed from '../InstagramEmbed'
import chef from '../../asset/chef.png'

class Layout extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      return <>
      <Sidebar />
      <div className='landing'>
          <InstagramEmbed />
      </div>
      </>
    }
  }

  export default Layout