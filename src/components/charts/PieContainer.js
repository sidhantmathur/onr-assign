import React from "react";
import PieChart from './PieChart'
import './Pie.css'

function PieContainer({ preData, setSelectedData }) {
  
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
  
  const onButtonClick = (data) => {
    setSelectedData(data)
    console.log(data);
  }

  return (
    <div className="gbox" onClick={() => onButtonClick(data[0].name)}>
      <p>{data[0].name}</p>
        <PieChart data={data} />
      <p style={{color: 'black'}}>Sample: {data[0].sample}</p>
      {/* <button onClick={() => onButtonClick(data[0].name)}>{data[0].name}</button> */}
    </div>
  );
}

export default PieContainer;
