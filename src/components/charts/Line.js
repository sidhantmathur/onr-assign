import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Line(props) {

  const { data } = props

  const [dataset, setDataset] = useState(data["Quality Score"])

  // const svgRef = useRef();

  const update = () => {
    const newData = data["Basics"]
    setDataset(newData)
  }

  console.log(dataset)

  return (
    <div className="gbox">
      <button onClick={update}>Update</button>
      <p>{data.name}</p>
      <p>{data.score}</p>
      <p>{data.sample}</p>
    </div>
  )
}
