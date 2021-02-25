import React, { useState } from 'react'

import './Stats.css'

import dataset from '../data/data.json'
import LineChart from '../charts/LineChart'

import PieContainer from '../charts/PieContainer'

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
      <div className="col-1">
        <div className="filters">
          <h1>Performance Management</h1>
            <p>Filters</p>
            <div className="filter-box">
              <div><div className="blueBox"></div>All CQA Results</div>
              <div><div className="greyBox"></div>CQAs with Closed Loop</div>
            </div>
        </div>
        <div className='donut-list'>
          <PieContainer setSelectedData={setSelectedData} selectedData={selectedData} preData={qualityGauge}/>
          <PieContainer setSelectedData={setSelectedData} selectedData={selectedData} preData={basicsGauge}/>
          <PieContainer setSelectedData={setSelectedData} selectedData={selectedData} preData={interactionGauge}/>
          <PieContainer setSelectedData={setSelectedData} selectedData={selectedData} preData={expertiseGauge}/>
          <PieContainer setSelectedData={setSelectedData} selectedData={selectedData} preData={processGauge}/>
          <PieContainer setSelectedData={setSelectedData} selectedData={selectedData} preData={knowledgeGauge}/>
        </div>
      </div>

      <div className="col-2">
        <div className='quality-score'>
            <div>
              <button className='btn'>Day</button>
              <button className='btn'>Week</button>
              <button className='btn'>Month</button>
              <button className='btn'>Quarter</button>
              <button className='btn'>Half</button>
              <button className='btn'>Year</button>
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
      </div>
    </div>
    </>
  )
}