import { createStore } from 'redux';

import rootReducer from './rootReducer';
import { defaultState } from '^/constants';
import middleware from './middleware';

export default createStore(rootReducer, defaultState, middleware);