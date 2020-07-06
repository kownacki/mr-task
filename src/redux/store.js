import {createStore} from 'redux';
import {HOME_ROUTE, HOUSES_ROUTE} from './actionTypes.js';

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
    // case FAILURE_USERS:
    //   return {
    //     usersStatus: FAILURE_USERS,
    //   };
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
