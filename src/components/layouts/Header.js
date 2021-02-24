import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <>
      <h1>Performance Management</h1>
      <h2>Diagnostic Tool</h2>
      <div className="subheader">
        <div className="filters">
          <p>Filters</p>
          <div className="filter-box">
            <div><div className="blueBox"></div>All CQA Results</div>
            <div><div className="greyBox"></div>CQAs with Closed Loop</div>
          </div>
        </div>

        <div className='quality-score'>
          <div className='qs-title'>Quality Score Trend</div>
          <div>
            <button className='btn'>Day</button>
            <button className='btn'>Week</button>
            <button className='btn'>Month</button>
            <button className='btn'>Quarter</button>
            <button className='btn'>Half</button>
            <button className='btn'>Year</button>
          </div>
        </div>
      </div>
    </>
  )
}
