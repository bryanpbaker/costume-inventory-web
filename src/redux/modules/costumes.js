// Actions
const FETCH_COSTUMES = 'costume-inventory/costumes/FETCH_COSTUMES';
const FETCH_COSTUMES_SUCCESS =
  'costume-inventory/costumes/FETCH_COSTUMES_SUCCESS';
const FETCH_COSTUMES_FAILURE =
  'costume-inventory/costumes/FETCH_COSTUMES_FAILURE';

// set initial state
const initialState = {};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// Action Creators
export function fetchCostumes() {
  return {
    type: FETCH_COSTUMES
  };
}
