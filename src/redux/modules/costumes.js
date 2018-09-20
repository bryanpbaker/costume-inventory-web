// Action Types
export const FETCH_COSTUMES_REQUEST =
  'costume-inventory/costumes/FETCH_COSTUMES';
export const FETCH_COSTUMES_SUCCESS =
  'costume-inventory/costumes/FETCH_COSTUMES_SUCCESS';
export const FETCH_COSTUMES_FAILURE =
  'costume-inventory/costumes/FETCH_COSTUMES_FAILURE';

// Action Creators
export function fetchCostumes() {
  return {
    type: FETCH_COSTUMES_REQUEST
  };
}

// set initial state
const initialState = {
  costumes: []
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COSTUMES_REQUEST:
      return { ...state, requestPending: true };
    case FETCH_COSTUMES_SUCCESS:
      return action.costumes
        ? {
            costumes: [...state.costumes, ...action.costumes],
            requestPending: false
          }
        : state;
    default:
      return state;
  }
}
