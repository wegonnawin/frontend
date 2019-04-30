import { createActions, handleActions } from 'redux-actions';

const SUPPLY_CARDS = 'SUPPLY_CARDS';
const SET_DECK = 'SET_DECK';

export const { supplyCards, setDeck } = createActions(SUPPLY_CARDS, SET_DECK);

export default handleActions({
  [SUPPLY_CARDS]: ({ payload: amount }, board) => {
    const newDeck = board.deck.slice(amount);
    const newField = [...board.deck.slice(amount - board.deck.length), ...board.field];

    return {
      deck: newDeck,
      field: newField,
    }
  },
  [SET_DECK]: ({ payload: newDeck }, board) => ({ ...board, deck: newDeck }),
}, { deck: [], field: [] });