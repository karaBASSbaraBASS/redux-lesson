import React from 'react';
import { connect } from 'react-redux';

class Details extends React.Component {
  render() {
    if (!this.props.car) {
      return (<p>Выберите автомобиль...</p>)
    }
    return (
      <div>
        <h2>{this.props.car.name}</h2>
        <h2>{this.props.car.desc}</h2>
        <h2>speed: {this.props.car.speed}, weight {this.props.car.speed}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    car: state.active
  };
}

export default connect(mapStateToProps)(Details);