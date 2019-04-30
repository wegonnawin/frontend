import { combineReducers } from 'redux';

import { boardReducer, logReducer, scoreReducer } from './ducks';

export default combineReducers({
  board: boardReducer,
  log: logReducer,
  score: scoreReducer,
});