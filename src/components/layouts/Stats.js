import React from 'react'
import Chart from '../charts/Chart'
import './Stats.css'

export default function Stats() {
  return (
    
    <div className='stats-layout'>
      
      <div className='donut-list'>
          <Chart data={[{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }]} outerRadius={50} innerRadius={40}/>
      </div>

      <div className='area-chart-space'>
        Area Chart
      </div>

    </div>
  )
}
