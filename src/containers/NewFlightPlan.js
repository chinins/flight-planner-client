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
      <form className="NewFlightPlan" onSubmit={this.submitForm}>
        <input
          type="text" placeholder="New flight plan" className="text-input"
          onChange={this.handleChange} value={this.state.planName}
          />
        <input type="submit" value="Add new plan" className="submit-input"/>
      </form>
    )
  }

}

export default NewFlightPlan;
