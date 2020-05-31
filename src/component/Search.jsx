import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <input
        name="Search"
        type="text"
        onSubmit={this.props.addMealInput}
        placeholder="Search here"
      />
    );
  }
}

export default Search;
