import React, { Component } from 'react';

class NewFlightPlan extends Component {
  state = {
    planName: ''
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.onPlanCreate(this.state.planName);
    this.setState({ planName: '' });
  }

  handleChange = (e) => {
    this.setState({
      planName: e.target.value
    })
  }

  render () {
    return (
      <div className="NewFlightPlan">
        <form className="section-input" onSubmit={this.submitForm}>
          <input
            type="text" placeholder="Flight plan name" className="text-input"
            onChange={this.handleChange} value={this.state.planName}
            />
          <input type="submit" value="Add new plan" className="submit-input"/>
        </form>
        <div className="section-explain">
          <p>To add a new drone flight plan:</p>
          <ul>-Add name</ul>
          <ul>-Click map to add points</ul>
          <ul>-To finish, double click the last point</ul>
        </div>
      </div>
    )
  }

}

export default NewFlightPlan;
