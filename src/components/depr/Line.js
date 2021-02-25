// import React, { useState, useEffect, useRef } from 'react';
import React, { useState } from 'react';

// import * as d3 from 'd3';

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
      <p>{dataset[0].date}</p>
      <p>{dataset[0].score}</p>
      <p>{dataset[0].sample}</p>
    </div>
  )
}
