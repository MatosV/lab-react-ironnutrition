import React, { Component } from 'react';
import './NewMeal.scss';

class NewMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  showForm = () => {
    return (
      <div>
        <form id="add-meal" onSubmit={this.props.addMealInputForm}>
          <input
            name="name"
            type="text"
            value={this.props.name}
            onChange={this.addMealInput}
            placeholder="Recipe Name"
          />
          <input
            name="calories"
            type="number"
            value={this.props.calories}
            onChange={this.addMealInput}
            placeholder="Calories"
          />
          <input
            name="img"
            type="text"
            value={this.props.img}
            onChange={this.addMealInput}
            placeholder="Image"
          />
          <button>Add Meal</button>
        </form>
      </div>
    );
  };
  render() {
    return (
      <div className="manage-app">
        <button onClick={() => this.setState({ showForm: true })}>Add New Meal</button>
        {this.state.showForm ? this.showForm() : null}
      </div>
    );
  }
}

export default NewMeal;
