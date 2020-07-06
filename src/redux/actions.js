import {HOME_ROUTE, HOUSES_ROUTE} from './actionTypes.js';

export const navigateToHome = () => ({type: HOME_ROUTE});
export const navigateToHouses = () => ({type: HOUSES_ROUTE});

// export const successSearchForUsers = (users) => ({type: SUCCESS_USERS, users});
// export const failureSearchForUsers = () => ({type: FAILURE_USERS});
// export const startFetchRepos = (userID) => ({type: LOADING_REPOS, userID});
// export const successFetchRepos = (userID, repos) => ({type: SUCCESS_REPOS, userID, repos});
// export const failureFetchRepos = (userID) => ({type: FAILURE_REPOS, userID});
