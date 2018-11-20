import React, { Component } from 'react';

import Map from './Map';
import FLightPlansList from '../components/FlightPlansList';
import plansArr from '../mock';
import NewFlightPlan from './NewFlightPlan';
import Header from '../components/Header';

class Main extends Component {
  state = {
    // plans: plansArr,
    displayedPlan: plansArr[0],
    ifNew: false,
    newPlan: {}
  }

  displayPlan = (plan) => {
    this.setState({ displayedPlan: plan })
  }

  addPlanName = (planName) => {
    this.setState({
      ifNew: true,
      newPlan: {
        name: planName
      }
    });

  };

  addCoordinates = (coords) => {
    this.setState({
      newPlan: {
        ...this.state.newPlan,
        coordinates: coords
      }
    });
    plansArr.push(this.state.newPlan);
    console.log('plansArr: ', plansArr);
  };

  render () {
    return (
      <div className="Main">
        <div className="plans-container">
          <Header/>
          <NewFlightPlan onPlanCreate={this.addPlanName}/>
          <FLightPlansList plansArr={plansArr} onPlanSelect={this.displayPlan}/>
        </div>
        <Map plan={this.state.displayedPlan} ifNew={this.state.ifNew} onAddCoords={this.addCoordinates}/>
      </div>
    )
  }
}

export default Main;