import React from 'react';
import { shallow, mount } from '../enzyme';

import FlightPlansList from '../components/FlightPlansList';

describe('FlightPlansList tests', () => {

  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = shallow(<FlightPlansList plans={items} />);

    expect(wrapper.find('FlightPlan')).toBeDefined();
    expect(wrapper.find('FlightPlan')).toHaveLength(items.length);
  });

});
