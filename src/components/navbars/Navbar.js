import React from 'react';
import './Navbar.css';

import Coffee from '../icons/coffee'
import Anchor from '../icons/anchor'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='brand'>Diagnostic Tool</div>
      <div className='navInfo'>
        <div>
          Logged in as General User 
        </div>
        <div style={{paddingLeft:'10px', paddingRight:'5px'}}>
          |
        </div>
        <div> 
          <Coffee /> 
        </div>
        <div> 
          <Anchor /> 
        </div>
        <div> 
          <Coffee /> 
        </div>
        <div> 
          <Anchor /> 
        </div>
        <div> 
          <Coffee />
        </div>
      </div>
    </div>
  )
}
