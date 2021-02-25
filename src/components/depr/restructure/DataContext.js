import React, { Component, createContext } from 'react';
// import dataset from '../data/data.json'

const { Provider, Consumer } = createContext()

// const qualityGauge = dataset.gaugeData[0]
// const basicsGauge = dataset.gaugeData[1]
// const interactionGauge = dataset.gaugeData[2]
// const expertiseGauge = dataset.gaugeData[3]
// const processGauge = dataset.gaugeData[4]
// const knowledgeGauge = dataset.gaugeData[5]

// const areaData = dataset.areaData

class DataContextProvider extends Component {
  state = {
    category: "Quality Score"
  }

  changeToQuality = () => {
    this.setState({category: "Quality Score"})
  }
  changeToBasics = () => {
    this.setState({category: "Basics"})
  }
  changeToInteraction = () => {
    this.setState({category: "Interaction"})
  }
  changeToExpertise = () => {
    this.setState({category: "Expertise"})
  }
  changeToProcess = () => {
    this.setState({category: "Process"})
  }
  changeToKnowledge = () => {
    this.setState({category: "Knowledge Score"})
  }

  render() {
    return (
      <Provider value={{ 
        category: this.state.category, 
        changeToQuality: this.changeToQuality,
        changeToBasics: this.changeToBasics,
        changeToKnowledge: this.changeToKnowledge, 
        changeToProcess: this.changeToProcess, 
        changeToExpertise: this.changeToExpertise, 
        changeToInteraction: this.changeToInteraction, 
      }}>

        {this.props.children}

      </Provider>
    )
  }
}

export { DataContextProvider, Consumer as DataContextConsumer };
