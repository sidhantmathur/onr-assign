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
            <button>Day</button>
            <button>Week</button>
            <button>Month</button>
            <button>Quarter</button>
            <button>Half</button>
            <button>Year</button>
          </div>
        </div>
      </div>
    </>
  )
}
