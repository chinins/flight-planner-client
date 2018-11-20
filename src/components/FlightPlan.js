import React, { Component } from 'react';

class FlightPlan extends Component {
  state = {
    ifActive: false,
    className: this.ifActive ? 'FlightPlan-active' : 'FlightPlan'
  }

  displayRoute = () => {
    this.props.onPlanSelect(this.props.plan);
    this.setState({
      ifActive: true,
      className: this.ifActive ? 'FlightPlan-active' : 'FlightPlan'
    });
  }
  render () {
    const { name, coordinates} = this.props.plan;

    return (
      <div className={this.state.className} onClick={this.displayRoute}>
        <div>{name}</div>
        <div># of points: {coordinates.length}</div>
      </div>
    )
  }
}

export default FlightPlan;
