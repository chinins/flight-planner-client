import React, { Component } from 'react';

import Map from './Map';
import FLightPlansList from '../components/FlightPlansList';
import plansArr from '../mock';
import NewFlightPlan from './NewFlightPlan';
import Header from '../components/Header';

class Main extends Component {
  state = {
    plans: plansArr,
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
    const plans = this.state.plans.slice();
    this.setState({
      ifNew: false,
      newPlan: {
        ...this.state.newPlan,
        coordinates: coords
      },
    });
    plans.push(this.state.newPlan)
    this.setState({ plans });
    console.log(this.state);
  };

  render () {
    return (
      <div className="Main">
        <div className="plans-container">
          <Header/>
          <NewFlightPlan onPlanCreate={this.addPlanName}/>
          <FLightPlansList plans={this.state.plans} onPlanSelect={this.displayPlan}/>
        </div>
        <Map
          plan={this.state.displayedPlan} ifNew={this.state.ifNew}
          onAddCoords={this.addCoordinates} newPlanName={this.state.newPlan.name}
          />
      </div>
    )
  }
}

export default Main;