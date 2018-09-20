import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api';
import {
  FETCH_COSTUMES_REQUEST,
  FETCH_COSTUMES_SUCCESS,
  FETCH_COSTUMES_FAILURE
} from '../modules/costumes';

function* fetchCostumesFromServer(action) {
  try {
    const costumes = yield call(Api.fetchCostumes);
    yield put({ type: FETCH_COSTUMES_SUCCESS, costumes: costumes });
  } catch (e) {
    yield put({ type: FETCH_COSTUMES_FAILURE, message: e.message });
  }
}

function* costumesSaga() {
  yield takeLatest(FETCH_COSTUMES_REQUEST, fetchCostumesFromServer);
}

export default costumesSaga;
