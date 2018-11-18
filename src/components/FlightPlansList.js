import React from 'react';

function FLightPlansList (props) {

  const renderFlightPlans = () => {
    return (
      props.plansArr.map((plan, index) => (
        <div key={index} plan={plan}>{plan.properties.name}</div>
      ))
    )
  }

  return (
    <div className="FLightPlansList">{renderFlightPlans()}</div>
  )
}

export default FLightPlansList;