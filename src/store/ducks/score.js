import { createAction, handleAction } from 'redux-actions';

const INCREASE = 'INCREASE';

export const increase = createAction(INCREASE);

export default handleAction(INCREASE, ({ payload: amount = 1 }, score) => score + amount, 0);