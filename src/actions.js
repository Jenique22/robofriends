import { CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED } from './constants.js';
export const REQUEST_ROBOTS_PENDING = "REQUEST_ROBOTS_PENDING";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch ('https:')
}
