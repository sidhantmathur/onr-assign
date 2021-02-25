import React from "react";
import PieChart from './PieChart'
import './Pie.css'

function PieMiddleware({ preData }) {
  
  const arrayPre = [preData]
  const remainderSub = preData.score
  const remainder = {
    name: "remainder",
    sample: 133,
    score: 100 - remainderSub,
    vsly: null
  }
  arrayPre.push(remainder)

  const data = arrayPre

  return (
    <div className="gbox">
      <p>{data[0].name}</p>
        <PieChart data={data} />
      <p style={{color: 'black'}}>Sample: {data[0].sample}</p>
    </div>
  );
}

export default PieMiddleware;
