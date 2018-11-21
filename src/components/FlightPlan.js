import React from 'react';

function FlightPlan (props) {

  const displayRoute = () => {
    props.onPlanSelect(props.plan);
  }

  const { name, coordinates} = props.plan;

  const displayCoordinates = () => {
    return (
      coordinates.map((coords, index) => (
        <div>{`Point ${index + 1}: [${coords[0]}, ${coords[1]}]`}</div>
      ))
    );
  };

  return (
    <div className={props.ifActive ? 'FlightPlan-active' : 'FlightPlan'} onClick={displayRoute}>
      <div className="plan-name">{name}</div>
      <div className="plan-points">Number of points: {coordinates.length}</div>
      { props.ifActive &&
        <div className="plan-coordinates">
          Coordinates:
          {displayCoordinates()}
        </div>
      }
    </div>
  )
}

export default FlightPlan;
