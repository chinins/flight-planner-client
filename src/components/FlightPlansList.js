import React from 'react';
import FlightPlan from './FlightPlan';

function FLightPlansList (props) {

  const displayPlan = (plan) => {
    props.onPlanSelect(plan);
  }

  const renderFlightPlans = () => {
    return (
      props.plansArr.map((plan, index) => (
        <FlightPlan key={index} plan={plan} onPlanSelect={displayPlan}/>
      ))
    )
  }

  return (
    <div className="FLightPlansList">{renderFlightPlans()}</div>
  )
}

export default FLightPlansList;