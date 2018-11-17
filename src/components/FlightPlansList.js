import React from 'react';

function FLightPlansList () {
  const arr = [1, 2, 3];

  const renderFlightPlans = () => {
    return (
      arr.map((plan, index) => (
        <div key={index} plan={plan}>Plan</div>
      ))
    )
  }

  return (
    <div className="FLightPlansList">{renderFlightPlans()}</div>
  )
}

export default FLightPlansList;