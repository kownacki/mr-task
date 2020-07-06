import React from 'react';
import * as api from '../api.js';
import {connect} from 'react-redux';
import {LOADING_HOUSES, SUCCESS_HOUSES, FAILURE_HOUSES} from '../redux/actionTypes.js';
import {navigateToHome, startFetchHouses, successFetchHouses, failureFetchHouses} from '../redux/actions.js';

class Houses extends React.Component {
  async componentDidMount() {
    this.props.startFetchHouses();
    const houses = await api.getHouses();
    if (houses) {
      this.props.successFetchHouses(houses);
    } else {
      this.props.failureFetchHouses();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.props.navigateToHome}>Wróc</button>
        {this.props.reduxState.housesStatus === LOADING_HOUSES
          ? <>Loading Houses for "{this.props.reduxState.query}"</>
          : this.props.reduxState.housesStatus === SUCCESS_HOUSES
          ? <>
            Showing houses
            {this.props.reduxState.houses.length
              ? (
                <ul>
                  {this.props.reduxState.houses.map((house) =>
                    <div>{house._id}</div>
                  )}
                </ul>
              )
              : (
                <div>No houses found.</div>
              )
            }
          </>
          : this.props.reduxState.housesStatus === FAILURE_HOUSES
          ? 'Something went wrong when fetching data. Try again in a minute'
          : ''
        }
      </div>
    );
  }

};

export default connect(
  (state) => ({reduxState: state}),
  {navigateToHome, startFetchHouses, successFetchHouses, failureFetchHouses},
)(Houses);
