import React from 'react';
// import * as d3 from 'd3';

export default function Donut(props) {

  const { data } = props

  // console.log(data)

  return (
    <div className="gbox">
      <p>{data.name}</p>
      <p>{data.score}</p>
      <p>{data.sample}</p>
    </div>
  )
}
