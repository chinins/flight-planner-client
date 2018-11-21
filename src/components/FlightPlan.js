import React from 'react';

function FlightPlan (props) {

  const displayRoute = () => {
    props.onPlanSelect(props.plan);
  }

  const { name, coordinates} = props.plan;

  return (
    <div className={props.ifActive ? 'FlightPlan-active' : 'FlightPlan'} onClick={displayRoute}>
      <div className="plan-name">{name}</div>
      <div className="plan-points"># of points: {coordinates.length}</div>
    </div>
  )
}

export default FlightPlan;
