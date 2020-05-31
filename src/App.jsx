import React, { Component } from 'react';
import './App.scss';

import MealBox from './component/MealBox';
import Search from './component/Search';
import Form from './component/NewMeal';

import meals from './meals';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meals: [...meals],
      quantity: 0,
      value: '',
      name: "",
      calories: "",
      img: ""
    };
  }

  //AD ITEM
  addMeal = () => {
    const previousQuantity = this.state.quantity;
    const newQuantity = previousQuantity + 1;
    this.setState({
      quantity: newQuantity
    });
  };

  // ADD NEW MEAL

  addMealInput = (event) => {
    const $domNode = event.target;
    const {value, name} = $domNode

    this.setState({
      [name]: value,
    });
  };

  addMealInputForm = (event) => {
    event.preventDefault();

    const {name, calories ,img} = this.state

    this.setState({
      meals: [...this.state.meals, { name, img, calories }],
      name: "",
      calories: "",
      img: "",
    });
  };

  // REMOVE ITEM
  removeMeal = (mealName) => {
    const remove = this.state.meals.filter((meal) => meal.name !== mealName);
    this.setState({
      meals: remove
    });
  };

  render() {
    return (
      <div>
        <p>Sample App</p>
        <Search />
        <Form />
        {this.state.meals.map((meal) => {
          const { name, calories, image, quantity } = meal;
          return (
            <MealBox
              name={name}
              calories={calories}
              image={image}
              quantity={quantity}
              addQuantity={this.addMeal}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
