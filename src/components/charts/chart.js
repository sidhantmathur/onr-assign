import React, { Component, createRef } from "react";
import * as d3 from 'd3'
import data from '../../data.json'

class Chart extends Component {
  constructor(props) {
    super(props)
    this.myRef = createRef();
  }

  componentDidMount() {
    let accessRef = d3.select(this.myRef.current);
    accessRef.style("background-color", "green")

    this.setState({
      data: data
    })
  }

  render() {
    return(
      <>
        <div ref={this.myRef}>Testing</div>
      </>
  )}
}

export default Chart