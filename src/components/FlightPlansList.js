import React from 'react';
import FlightPlan from './FlightPlan';

function FLightPlansList (props) {

  const renderFlightPlans = () => {
    return (
      props.plansArr.map((plan, index) => (
        <FlightPlan key={index} plan={plan}/>
      ))
    )
  }

  return (
    <div className="FLightPlansList">{renderFlightPlans()}</div>
  )
}

export default FLightPlansList;