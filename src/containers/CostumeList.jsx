import React, { Component } from 'react';

class CostumeList extends Component {
  async componentDidMount() {
    const response = await fetch('http://localhost:5000/api/v1/costumes');
    const costumes = await response.json();

    console.log(costumes);
  }

  render() {
    return (
      <div>
        <h2>Costume List</h2>
      </div>
    );
  }
}

export default CostumeList;
