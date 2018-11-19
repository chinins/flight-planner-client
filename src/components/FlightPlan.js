import React from 'react';

function FlightPlan (props) {
  const { properties, geometry } = props.plan;

  return (
    <div className="FlightPlan" onClick={() => console.log('clicked')}>
      <div>{properties.name}</div>
      <div>{geometry.coordinates}</div>
    </div>
  )
}

export default FlightPlan;
