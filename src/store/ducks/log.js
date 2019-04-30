import { createActions, handleActions } from 'redux-actions';

const ADD_CORRECT_PAIR = 'ADD_CORRECT_PAIR';
const ADD_INCORRECT_PAIR = 'ADD_INCORRECT_PAIR';

export const { addCorrectPair, addIncorrectPair } = createActions(ADD_CORRECT_PAIR, ADD_INCORRECT_PAIR);

export default handleActions({
  [ADD_CORRECT_PAIR]: ({ payload: newPair }, log) => ({ ...log, correctPairs: [newPair, ...log.correctPairs] }),
  [ADD_INCORRECT_PAIR]: ({ payload: newPair }, log) => ({ ...log, incorrectPairs: [newPair, ...log.correctPairs] }),
}, { correctPairs: [], incorrectPairs: [] });