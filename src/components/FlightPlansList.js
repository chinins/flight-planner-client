import React from 'react';
import PropTypes from 'prop-types';
import FlightPlan from './FlightPlan';

function FlightPlansList (props) {

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
    <div className="FlightPlansList">{renderFlightPlans()}</div>
  )
}

FlightPlansList.propTypes = {
  plans: PropTypes.array
};

FlightPlansList.defaultProps = {
  items: []
};

export default FlightPlansList;