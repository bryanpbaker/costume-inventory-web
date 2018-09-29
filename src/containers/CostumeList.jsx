import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCostumes, clearCostumes } from '../redux/modules/costumes';
import CostumeCard from '../components/CostumeCard';

export class CostumeList extends Component {
  componentDidMount() {
    this.props.fetchCostumes();
  }

  componentWillUnmount() {
    this.props.clearCostumes();
  }

  renderCostumes = () =>
    this.props.costumeReducer.costumes.map(costume => (
      <CostumeCard key={costume._id} costume={costume} />
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
  { fetchCostumes, clearCostumes }
)(CostumeList);
