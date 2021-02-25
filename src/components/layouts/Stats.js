import React, { useState } from 'react'

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

  const qs = areaData["Quality Score"]
  // const ba = areaData["Basics"]
  // const ex = areaData["Expertise"]
  // const it = areaData["Interaction"]
  // const kn = areaData["Knowledge"]
  // const pr = areaData["Process"]

  const [selectedData, setSelectedData] = useState(qs)

  console.log(areaData[selectedData])

  return (
    <>
    <div className='stats-layout'>

      <div className='donut-list'>
        <PieMiddleware setSelectedData={setSelectedData} preData={qualityGauge}/>
        <PieMiddleware setSelectedData={setSelectedData} preData={basicsGauge}/>
        <PieMiddleware setSelectedData={setSelectedData} preData={interactionGauge}/>
        <PieMiddleware setSelectedData={setSelectedData} preData={expertiseGauge}/>
        <PieMiddleware setSelectedData={setSelectedData} preData={processGauge}/>
        <PieMiddleware setSelectedData={setSelectedData} preData={knowledgeGauge}/>
      </div>

      <div>
          { areaData[selectedData] ? 
            <LineChart 
            data={areaData}
            selectedData={selectedData}
            qs={qs}
          /> : 'Click a Donut'
          }
      </div>
    </div>
    </>
  )
}