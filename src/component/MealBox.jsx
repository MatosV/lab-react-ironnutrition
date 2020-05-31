import React, { Component } from 'react';
import './MealBox.scss';

class MealBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="media">
        <img
          src={this.props.image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: '10em' }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.props.name}</h5>
          <small>{this.props.calories}</small>
        </div>
        <form className="row align-self-center">
          <input className="form-control col-9" type="number" value={this.props.quantity} />
          <button onClick={() => this.props.addQuantity} className="btn btn-primary col-3">
            +
          </button>
        </form>
      </div>
    );
  }
}

export default MealBox;
