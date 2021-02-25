import React, { useEffect, useRef } from "react";
import {
  select,
  axisBottom,
  scaleLinear,
  axisLeft,
  area,
  scalePoint,
  curveCardinal
} from "d3";

/**
 * Component that renders a StackedBarChart
 */

function StackedBarChart({ data, keys, colors }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  let dimensions = {
    bottom: 300,
    height: 300,
    left: 0,
    right: 500,
    top: 0,
    width: 500,
    x: 0,
    y: 0,
  };

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();


    // scales
    const xScale = scalePoint()
      .range([0, width]);

    const yScale = scaleLinear()
      .range([height, 0]);

    // area generator
    const areaGenerator = area()
      .x(sequence => xScale(sequence.data.year))
      .y0(sequence => yScale(sequence[0]))
      .y1(sequence => yScale(sequence[1]))
      .curve(curveCardinal);

    // rendering
    svg
      .selectAll(".layer")
      .join("path")
      .attr("class", "layer")
      .attr("fill", layer => colors[layer.key])
      .attr("d", areaGenerator);

    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").call(yAxis);
  }, [colors, data, dimensions, keys]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </React.Fragment>
  );
}

export default StackedBarChart;
