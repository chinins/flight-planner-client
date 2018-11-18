import React from 'react';

function FlightPlan (props) {
  const { properties, geometry } = props.plan;

  return (
    <div className="FlightPlan">
      <div>{properties.name}</div>
      <div>{geometry.coordinates}</div>
    </div>
  )
}

export default FlightPlan;
