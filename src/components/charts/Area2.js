import React, { useState, useEffect, useRef } from "react";
import { select } from "d3";

import dataset from '../data/data.json'

export default function Area2() {
  const [data, setData] = useState(dataset);

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current); // select svg ref
  
    svg
      .data(data)
      .transition()
      .duration(1000)
      .attr("width", value => value * 10)
      .attr("height", 50)
      .attr("x", value => value + 10)
      .attr("y", value => (value * value) / 2)
      .attr("stroke", "red")
      .attr("stroke-width", "3")
      .attr("fill", "transparent");
  }, [data]);

  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
}
