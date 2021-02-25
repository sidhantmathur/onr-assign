import React from "react";
import PieChart from './PieChart'
import './Pie.css'

function PieContainer({ preData, setSelectedData}) {
  
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
    // let selectedItem = document.getElementById(data)
    // let unselectedItems = document.getElementsByClassName("gbox")
    // unselectedItems.classList.remove("selected")
    // selectedItem.classList.add("selected")
  }

  return (
    <div id={data[0].name} className="gbox" onClick={() => onButtonClick(data[0].name)}>
      <p>{data[0].name}</p>
        <PieChart data={data} />
      <p style={{color: 'black'}}>Sample: {data[0].sample}</p>
      {/* <button onClick={() => onButtonClick(data[0].name)}>{data[0].name}</button> */}
    </div>
  );
}

export default PieContainer;
