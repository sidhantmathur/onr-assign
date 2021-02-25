import React, { useState, useEffect, useRef } from 'react';

import { select,
  line,
  area,
  curveCardinal,
  axisBottom,
  scaleLinear } from 'd3';

import './LineChart.css'

export default function LineChart(props) {

  const { data } = props

  const qs = data["Quality Score"]
  const ba = data["Basics"]
  const ex = data["Expertise"]
  const it = data["Interaction"]
  const kn = data["Knowledge"]
  const pr = data["Process"]

  // console.log(qs, ba, ex, it, kn, pr)

  const [dataset, setDataset] = useState( [qs[0].score, qs[1].score, qs[2].score, qs[3].score ] )

  // console.log(dataset)

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
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
      .y0(100)
      .y(yScale)
      .curve(curveCardinal);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);
    

    svg
      .selectAll(".line")
      .data([dataset])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "green")
      .attr("stroke", "blue");

    svg
      .selectAll(".area")
      .data([dataset])
      .join("path")
      .attr("class", "area")
      .attr("d", myArea)
      .attr("fill", "red")
      .attr("stroke", "blue");

  }, [dataset]);

  const basic = () => {
    const newData = [ba[0].score, ba[1].score, ba[2].score, ba[3].score ]
    setDataset(newData)
  }

  const exper = () => {
    const newData = [ex[0].score, ex[1].score, ex[2].score, ex[3].score ]
    setDataset(newData)
  }

  const inter = () => {
    const newData = [it[0].score, it[1].score, it[2].score, it[3].score ]
    setDataset(newData)
  }

  const knowl = () => {
    const newData = [kn[0].score, kn[1].score, kn[2].score, kn[3].score ]
    setDataset(newData)
  }

  const proce = () => {
    const newData = [pr[0].score, pr[1].score, pr[2].score, pr[3].score ]
    setDataset(newData)
  }

  const quali = () => {
    const newData = [qs[0].score, qs[1].score, qs[2].score, qs[3].score ]
    setDataset(newData)
  }

  return (
    <>
    <div className="gbox">
      <button onClick={quali}>Quality Score</button>
      <button onClick={proce}>Process</button>
      <button onClick={knowl}>Knowledge</button>
      <button onClick={inter}>Interactivity</button>
      <button onClick={exper}>Expertise</button>
      <button onClick={basic}>Basics</button>

      <p>{dataset[0].date}</p>
      <p>{dataset[0].score}</p>
      <p>{dataset[0].sample}</p>

    <svg style={{overflow: 'visible'}} ref={svgRef}>
        <g className="x-axis" />
      </svg>
      <br />
      <br />
      <br />
      <br />
    </div>
    </>
  )
}
