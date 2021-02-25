import React, { useState, useEffect, useRef } from 'react';

import { select,
  line,
  curveCardinal,
  axisBottom,
  // axisRight,
  scaleLinear } from 'd3';

export default function Line(props) {

  const { data } = props

  const [dataset, setDataset] = useState( [data["Quality Score"][0].score, data["Quality Score"][1].score, data["Quality Score"][2].score, data["Quality Score"][3].score ] )

  console.log(dataset)

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, dataset.length - 1])
      .range([0, 300]);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(dataset.length)
      .tickFormat(index => index + 1);
    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    // const yAxis = axisRight(yScale);
    // svg
    //   .select(".y-axis")
    //   .style("transform", "translateX(300px)")
    //   .call(yAxis);

    // generates the "d" attribute of a path element
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    // renders path element, and attaches
    // the "d" attribute from line generator above
    svg
      .selectAll(".line")
      .data([dataset])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [dataset]);

  const update = () => {
    const newData = dataset["Basics"]
    setDataset(newData)
  }

  console.log(dataset)

  return (
    <>
    <div className="gbox">
      <button onClick={update}>Update</button>
      <p>{dataset[0].date}</p>
      <p>{dataset[0].score}</p>
      <p>{dataset[0].sample}</p>
    </div>

    <svg style={{overflow: 'visible'}} ref={svgRef}>
        <g className="x-axis" />
        {/* <g className="y-axis" /> */}
      </svg>
      <br />
      <br />
      <br />
      <br />
    </>
  )
}
