import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCostumes } from '../redux/modules/costumes';

export class CostumeList extends Component {
  async componentDidMount() {
    this.props.fetchCostumes();
  }

  renderCostumes = () =>
    this.props.costumeReducer.costumes.map(costume => (
      <li key={costume._id}>{costume.name}</li>
    ));

  render() {
    return (
      <div>
        <h2>Costume List</h2>
        <ul>
          {this.props.costumeReducer.requestPending
            ? 'Loading...'
            : this.renderCostumes()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ costumeReducer }) => ({ costumeReducer });

export default connect(
  mapStateToProps,
  { fetchCostumes }
)(CostumeList);
