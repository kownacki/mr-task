import {HOME_ROUTE, HOUSES_ROUTE, LOADING_HOUSES, SUCCESS_HOUSES, FAILURE_HOUSES, DELETE_HOUSE} from './actionTypes.js';

export const navigateToHome = () => ({type: HOME_ROUTE});
export const navigateToHouses = () => ({type: HOUSES_ROUTE});

export const startFetchHouses = () => ({type: LOADING_HOUSES});
export const successFetchHouses = (houses) => ({type: SUCCESS_HOUSES, houses});
export const failureFetchHouses = () => ({type: FAILURE_HOUSES});

export const deleteHouse = (id) => ({type: DELETE_HOUSE, id});
