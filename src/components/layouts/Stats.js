import React from 'react'

// import Chart from '../charts/Chart'
// import Area2 from '../charts/Area2'
// import Area3 from '../charts/Area3'
import './Stats.css'

import dataset from '../data/data.json'
import Lin3 from '../charts/Lin3'
// import Pie from '../d3/Pie'
// import Pie2 from '../d3/Pie2'

import PieMiddleware from '../d3/PieMiddleware'

// import Line2 from '../d3/Line'

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
        {/* <Pie data={knowledgeGauge} /> */}
        {/* <Pie2 data= {knowledgeGauge} score={knowledgeGauge.score} name={knowledgeGauge.name} /> */}
        <PieMiddleware preData={qualityGauge}/>
        <PieMiddleware preData={basicsGauge}/>
        <PieMiddleware preData={interactionGauge}/>
        <PieMiddleware preData={expertiseGauge}/>
        <PieMiddleware preData={processGauge}/>
        <PieMiddleware preData={knowledgeGauge}/>
      </div>

      <div className='area-chart-space'>
        {/* <Area2 /> */}
        {/* <Area3 /> */}

        <Lin3 data={areaData}/>

        {/* <Line2 /> */}
      </div>

    </div>
  )
}
