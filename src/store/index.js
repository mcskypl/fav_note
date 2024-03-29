import { createStore } from 'redux';
import notesApp from '../reducers/index';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  notesApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
