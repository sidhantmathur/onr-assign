import React, { useState, useEffect, useRef } from 'react';

import { select,
  line,
  area,
  curveCardinal,
  axisBottom,
  scaleLinear } from 'd3';

import './LineChart.css'

export default function LineChart(props) {

  const { data, selectedData } = props

  const dataset = [ data[selectedData][0].score, data[selectedData][1].score, data[selectedData][2].score, data[selectedData][3].score ]
  const [dataname, setDataName] = useState(dataset.name)

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    // let initCheck = data["Quality Score"].map(d => d.date)

    // console.log(initCheck)

    const xScale = scaleLinear()
      // .domain(data["Quality Score"].map(d => d.date))
      .domain([0, dataset.length - 1])
      .range([0, 300]);

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

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);
    
    // svg
    //   .selectAll(".line")
    //   .data([dataset])
    //   .join("path")
    //   .attr("class", "line")
    //   .attr("d", myLine)
    //   // .attr("fill", "blue")
    //   // .attr("stroke", "black");

    svg
      .selectAll(".area")
      .data([dataset])
      .join("path")
      .attr("class", "area")
      .attr("d", myArea)
      .attr("fill", "red")
      .attr("stroke", "green");

  }, [dataset]);

  return (
    <>
    <div className="gbox">

      <p>{dataname}</p>

      <p>{data[selectedData][0].date}</p>
      <p>{data[selectedData][0].score}</p>
      <p>{data[selectedData][0].sample}</p>

    <svg style={{overflow: 'visible'}} ref={svgRef}>
        <g className="x-axis" />
      </svg>
    </div>
    </>
  )
}
