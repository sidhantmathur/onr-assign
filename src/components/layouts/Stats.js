import React from 'react'

import './Stats.css'

import dataset from '../data/data.json'
import LineChart from '../charts/LineChart'

import PieMiddleware from '../charts/PieMiddleware'

export default function Stats() {

  const qualityGauge = dataset.gaugeData[0]
  const basicsGauge = dataset.gaugeData[1]
  const interactionGauge = dataset.gaugeData[2]
  const expertiseGauge = dataset.gaugeData[3]
  const processGauge = dataset.gaugeData[4]
  const knowledgeGauge = dataset.gaugeData[5]

  const areaData = dataset.areaData

  return (
    <>
    <div className='stats-layout'>
      
      <div className='donut-list'>
        <PieMiddleware preData={qualityGauge}/>
        <PieMiddleware preData={basicsGauge}/>
        <PieMiddleware preData={interactionGauge}/>
        <PieMiddleware preData={expertiseGauge}/>
        <PieMiddleware preData={processGauge}/>
        <PieMiddleware preData={knowledgeGauge}/>
      </div>

      <div>
        <LineChart data={areaData}/>
      </div>

    </div>
    </>
  )
}
