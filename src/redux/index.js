import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './modules/root';
import costumesSaga from './sagas/costumes';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
  );

  // run the saga
  sagaMiddleware.run(costumesSaga);

  return store;
}
