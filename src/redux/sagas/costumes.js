import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_COSTUMES_REQUEST,
  FETCH_COSTUMES_SUCCESS,
  FETCH_COSTUMES_FAILURE
} from '../modules/costumes';

/**
 * TODO abstract these types of calls OR maybe just use fetch()?
 */
const fetchUserCall = () =>
  fetch(`${process.env.REACT_APP_API_URI}/costumes`)
    .then(res => res.json())
    .then(json => json.costumes);

function* fetchCostumesFromServer(action) {
  try {
    const costumes = yield call(fetchUserCall);
    console.log(costumes);
    yield put({ type: FETCH_COSTUMES_SUCCESS, costumes: costumes });
  } catch (e) {
    yield put({ type: FETCH_COSTUMES_FAILURE, message: e.message });
  }
}

function* costumesSaga() {
  yield takeLatest(FETCH_COSTUMES_REQUEST, fetchCostumesFromServer);
}

export default costumesSaga;
