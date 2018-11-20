import React from 'react';

function FlightPlan (props) {
  const { properties, geometry} = props.plan;

  const displayRoute = () => {
    props.onPlanSelect(props.plan);
  }

  return (
    <div className="FlightPlan" onClick={displayRoute}>
      <div>{properties.name}</div>
      <div>{geometry.coordinates}</div>
    </div>
  )
}

export default FlightPlan;
