import {createStore} from 'redux';
import {HOME_ROUTE, HOUSES_ROUTE, SUCCESS_HOUSES, FAILURE_HOUSES, LOADING_HOUSES} from './actionTypes.js';

const initialState = {
  route: HOME_ROUTE,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_ROUTE:
      return {
        route: HOME_ROUTE,
      };
    case HOUSES_ROUTE:
      return {
        route: HOUSES_ROUTE,
      };
    case LOADING_HOUSES:
      return {
        housesStatus: LOADING_HOUSES,
      };
    case SUCCESS_HOUSES:
      return {
        housesStatus: SUCCESS_HOUSES,
        houses: action.houses,
      };
    case FAILURE_HOUSES:
      return {
        housesStatus: FAILURE_HOUSES,
      };
    // case LOADING_REPOS: {
    //   return {
    //     ...state,
    //     users: state.users.map((user) => user.id === action.userID ? {
    //       ...user,
    //       reposStatus: LOADING_REPOS,
    //     } : user),
    //   }
    // }
    // case SUCCESS_REPOS: {
    //   return {
    //     ...state,
    //     users: state.users.map((user) => user.id === action.userID ? {
    //       ...user,
    //       reposStatus: SUCCESS_REPOS,
    //       repos: action.repos
    //     } : user),
    //   }
    // }
    // case FAILURE_REPOS: {
    //   return {
    //     ...state,
    //     users: state.users.map((user) => user.id === action.userID ? {
    //       ...user,
    //       reposStatus: FAILURE_REPOS,
    //     } : user),
    //   }
    // }
    default:
      return state;
  }
}

export default createStore(appReducer);
