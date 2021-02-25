import React from 'react'

// import Chart from '../charts/Chart'
// import Area2 from '../charts/Area2'
// import Area3 from '../charts/Area3'
import './Stats.css'

import dataset from '../data/data.json'
import Donut from '../charts/Donut'
import Line from '../charts/Line'

import Line2 from '../d3/Line'

export default function Stats() {

  // const parsedData = JSON.parse(dataset)

  const qualityGauge = dataset.gaugeData[0]
  const basicsGauge = dataset.gaugeData[1]
  const interactionGauge = dataset.gaugeData[2]
  const expertiseGauge = dataset.gaugeData[3]
  const processGauge = dataset.gaugeData[4]
  const knowledgeGauge = dataset.gaugeData[5]

  const areaData = dataset.areaData

  return (
    
    <div className='stats-layout'>
      
      <div className='donut-list'>
        {/* <Chart sample={12} label={"Quality Score"} data={[{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }]} outerRadius={50} innerRadius={40}/ */}
        <Donut data={qualityGauge}/>
        <Donut data={basicsGauge}/>
        <Donut data={interactionGauge}/>
        <Donut data={expertiseGauge}/>
        <Donut data={processGauge}/>
        <Donut data={knowledgeGauge}/>
      </div>

      <div className='area-chart-space'>
        {/* <Area2 /> */}
        {/* <Area3 /> */}

        <Line data={areaData}/>

        <Line2 />
      </div>

    </div>
  )
}
