import React from 'react'
import Chart from '../charts/chart'
import './Stats.css'

export default function Stats() {
  return (
    <div className='stats-layout'>
      
      <div className='donut-list'>
        {/* <div>Quality Score</div>
        <div>Basics</div>
        <div>Interaction</div>
        <div>Expertise</div>
        <div>Process</div>
        <div>Knowledge</div> */}

        <Chart />
      </div>

      <div className='area-chart-space'>
        Area Chart
      </div>

    </div>
  )
}
