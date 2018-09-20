import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCostumes } from '../redux/modules/costumes';

export class CostumeList extends Component {
  render() {
    return (
      <div>
        <h2>Costume List</h2>
      </div>
    );
  }
}

const mapStateToProps = ({ costumes }) => ({ costumes });

export default connect(
  mapStateToProps,
  { fetchCostumes }
)(CostumeList);
