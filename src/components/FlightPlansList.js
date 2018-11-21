import React from 'react';
import PropTypes from 'prop-types';
import FlightPlan from './FlightPlan';

function FLightPlansList (props) {

  const displayPlan = (plan) => {
    props.onPlanSelect(plan);
  }

  const renderFlightPlans = () => {
    return (
      props.plans.map((plan, index) => (
        <FlightPlan
          key={index} plan={plan} onPlanSelect={displayPlan}
          ifActive={(index === props.activeIndex) ? true : false}
        />
      ))
    )
  }

  return (
    <div className="FLightPlansList">{renderFlightPlans()}</div>
  )
}

FLightPlansList.propTypes = {
  plans: PropTypes.array
};

FLightPlansList.defaultProps = {
  items: []
};

export default FLightPlansList;