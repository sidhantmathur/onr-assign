import React from "react";
import PieChart from './PieChart'
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
    <PieChart data={data} />
  );
}

export default PieMiddleware;
