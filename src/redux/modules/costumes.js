// Action Types
const FETCH_COSTUMES_REQUEST = 'costume-inventory/costumes/FETCH_COSTUMES';
const FETCH_COSTUMES_SUCCESS =
  'costume-inventory/costumes/FETCH_COSTUMES_SUCCESS';
const FETCH_COSTUMES_FAILURE =
  'costume-inventory/costumes/FETCH_COSTUMES_FAILURE';

// Action Creators
export function fetchCostumes() {
  return async dispatch => {
    dispatch({ type: FETCH_COSTUMES_REQUEST });
    const response = await fetch(`${process.env.REACT_APP_API_URI}/costumes`);
    const json = await response.json();

    if (json) {
      dispatch({
        type: FETCH_COSTUMES_SUCCESS,
        payload: json.costumes
      });
    }
  };
}

// set initial state
const initialState = { costumes: [] };

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COSTUMES_REQUEST:
      return { ...state, requestPending: true };
    case FETCH_COSTUMES_SUCCESS:
      return action.payload
        ? { costumes: [...state, ...action.payload], requestPending: false }
        : state;
    default:
      return state;
  }
}
