import React, { useState, useEffect, useRef } from 'react';

import { select,
  area,
  curveCardinal,
  axisBottom,
  scaleLinear } from 'd3';

import './LineChart.css'

export default function LineChart(props) {

  const { data, selectedData } = props

  const dataset = [ data[selectedData][0].score, data[selectedData][1].score, data[selectedData][2].score, data[selectedData][3].score ]
  const [dataname, setDataName] = useState(dataset.name)

  console.log(data, dataset, dataname)

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    // let initCheck = data["Quality Score"].map(d => d.date)

    // console.log(initCheck)

    const xScale = scaleLinear()
      // .domain(data["Quality Score"].map(d => d.date))
      .domain([0, dataset.length - 1])
      .range([0, 600]);

    const yScale = scaleLinear()
      .domain([0, 100])
      .range([100, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(dataset.length)
      .tickFormat(index => index + 1);
    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);
      
    const myArea = area()
      .x((value, index) => xScale(index))
      .y0(0)
      .y(yScale)
      .curve(curveCardinal);

    svg
      .selectAll(".area")
      .data([dataset])
      .join("path")
      .attr("class", "area")
      .attr("d", myArea)
      .attr("fill", "lightblue")
      .attr("stroke", "lightblue");

  }, [dataset]);

  return (
    <>
    <div>

      <p>{selectedData}</p>

      <svg style={{overflow: 'visible', marginTop: '20px'}} ref={svgRef}>
        <g className="x-axis" />
      </svg>
      
    </div>
    </>
  )
}
