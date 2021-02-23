import React, { useState, useEffect, Fragment } from 'react';
import { select } from 'd3';

export default function Testchart() {
  const [data, setData] = useState([1,2,3,4,5]);
  
  useEffect(() => {

  }, []);

  const update = () => {
    const newData = data.map();
    setData(newData)
  }
  const removeLast = () => {
    const newData = [...data];
    newData.pop();
    setData(newData);
  }

  return (
    <>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </>
  )
}
