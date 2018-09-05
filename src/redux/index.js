import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './modules/root';

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware());

  return store;
}
