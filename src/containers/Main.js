import React, { Component } from 'react';

import Map from './Map';
import FlightPlansList from '../components/FlightPlansList';
import plansArr from '../mock';
import NewFlightPlan from './NewFlightPlan';
import Header from '../components/Header';

class Main extends Component {
  state = {
    plans: plansArr,
    displayedPlan: plansArr[0],
    ifNew: false,
    newPlan: {},
    activeIndex: 0
  }

  displayPlan = (plan) => {
    this.setState({
      displayedPlan: plan,
      activeIndex: this.state.plans.indexOf(plan)
    });
  }

  addPlanName = (planName) => {
    this.setState({
      ifNew: true,
      activeIndex: '',
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
    this.setState({
      plans,
      activeIndex: plans.indexOf(this.state.newPlan),
      displayedPlan: this.state.newPlan
    });
  };

  render () {
    return (
      <div className="Main">
        <div className="plans-container">
          <div>
            <Header/>
            <NewFlightPlan onPlanCreate={this.addPlanName}/>
          </div>
          <FlightPlansList
            activeIndex={this.state.activeIndex}
            plans={this.state.plans} onPlanSelect={this.displayPlan}
          />
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
