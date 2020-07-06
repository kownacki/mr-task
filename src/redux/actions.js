import {HOME_ROUTE, HOUSES_ROUTE, LOADING_HOUSES, SUCCESS_HOUSES, FAILURE_HOUSES} from './actionTypes.js';

export const navigateToHome = () => ({type: HOME_ROUTE});
export const navigateToHouses = () => ({type: HOUSES_ROUTE});

export const startFetchHouses = () => ({type: LOADING_HOUSES});
export const successFetchHouses = (houses) => ({type: SUCCESS_HOUSES, houses});
export const failureFetchHouses = () => ({type: FAILURE_HOUSES});

// export const successSearchForUsers = (users) => ({type: SUCCESS_USERS, users});
// export const failureSearchForUsers = () => ({type: FAILURE_USERS});
// export const startFetchRepos = (userID) => ({type: LOADING_REPOS, userID});
// export const successFetchRepos = (userID, repos) => ({type: SUCCESS_REPOS, userID, repos});
// export const failureFetchRepos = (userID) => ({type: FAILURE_REPOS, userID});
