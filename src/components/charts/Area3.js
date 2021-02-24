import React from 'react'
import dataset from '../data/data.json'
import Area4 from './Area4'

export default function Area3() {

  // state = {
    
  // }

  console.log(dataset)

  let data = dataset.gaugeData

  return (
    <div>
      <Area4 data={data}/>
    </div>
  )
}
