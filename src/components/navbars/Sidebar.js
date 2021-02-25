import React from 'react'
import './Sidebar.css'

import Coffee from '../icons/coffee'
import Anchor from '../icons/anchor'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div><Coffee /></div>
      <div><Anchor /></div>
      <div><Coffee /></div>
      <div><Anchor /></div>
      <div><Coffee /></div>
    </div>
  )
}
