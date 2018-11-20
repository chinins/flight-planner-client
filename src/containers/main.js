import React, { Component } from 'react';

import Map from './Map';
import FLightPlansList from '../components/FlightPlansList';
import plansArr from '../mock';

class Main extends Component {
  state = {
    displayedPlan: plansArr[0]
  }

  displayPlan = (plan) => {
    this.setState({ displayedPlan: plan })
  }

  render () {
    return (
      <div className="Main">
        <FLightPlansList plansArr={plansArr} onPlanSelect={this.displayPlan}/>
        <Map plan={this.state.displayedPlan}/>
      </div>
    )
  }
}

export default Main;