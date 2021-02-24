import React from 'react';
import './Navbar.css';

import Coffee from '../icons/coffee'

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
          <Coffee /> 
        </div>
        <div> 
          <Coffee /> 
        </div>
        <div> 
          <Coffee /> 
        </div>
        <div> 
          <Coffee />
        </div>
      </div>
    </div>
  )
}
