import React, { Component } from 'react';

import Map from './Map';
import FLightPlansList from '../components/FlightPlansList';
import plansArr from '../mock';

class Main extends Component {
  render () {
    return (
      <div className="Main">
        <FLightPlansList plansArr={plansArr}/>
        <Map route={plansArr[0]}/>
      </div>
    )
  }
}

export default Main;