import React, { useEffect, useRef } from "react";
import { arc, interpolate, pie, scaleOrdinal, schemeBlues, select } from "d3";
import './Pie.css'

function PieChart({ data }) {

  // console.log(data)

  const svgRef = useRef();

  const height = 50
  const width = 50

  useEffect(() => {
    const svg = select(svgRef.current);
    const arcGenerator = arc()
      .innerRadius(45)
      .outerRadius(50);

    const pieGenerator = pie()
      .value(d => d.score)
      .sort(null); 

    const dataset = pieGenerator(data);

    const colorScale = scaleOrdinal(schemeBlues[3]);

    svg
      .selectAll(".slice")
      .data(dataset)
      .join("path")
      .attr("class", "slice")
      .attr("fill", (d, i) => colorScale(i))
      .style(
        "transform",
        `translate(${width}px, ${height}px)`
      )
      .transition()
      .attrTween("d", function(nextInstruction) {
        const interpolator = interpolate(this.lastInstruction, nextInstruction);
        this.lastInstruction = interpolator(1);
        return function(t) {
          return arcGenerator(interpolator(t));
        };
      });
  }, [data]);

  return (
    <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
      <p style={{ position: 'absolute', marginTop: '40px' }}>{data[0].score}%</p>
      <svg ref={svgRef}>
      </svg>
    </div>
  );
}

export default PieChart;
