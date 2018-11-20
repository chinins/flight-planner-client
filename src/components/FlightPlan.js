import React from 'react';

function FlightPlan (props) {
  const { name, coordinates} = props.plan;

  const displayRoute = () => {
    props.onPlanSelect(props.plan);
  }

  return (
    <div className="FlightPlan" onClick={displayRoute}>
      <div>{name}</div>
      <div># of points: {coordinates.length}</div>
    </div>
  )
}

export default FlightPlan;
