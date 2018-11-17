import React, { Component } from 'react';

import Map from './Map';
import FLightPlansList from '../components/FlightPlansList';

class Main extends Component {
  render () {
    return (
      <div className="Main">
        <FLightPlansList/>
        <Map/>
      </div>
    )
  }
}

export default Main;