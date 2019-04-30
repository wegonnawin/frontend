import React, { useEffect, useReducer } from 'react';

import useStaticVariable from '^/utils/useStaticVariable';

import { queryTopKWithTranslations } from '^/api';

import Field from '^/components/molecules/Field';
import GameStatusBoard from '^/components/molecules/GameStatusBoard';
import { mergeDeepRight } from 'ramda';

export default function GamePage() {
  const [{ deck, field, log, score }, updateState] = useReducer((part, prevState) => {
    return mergeDeepRight(part, prevState);
  }, {
    deck: [],
    field: [],
    log: { correctPairs: [], incorrectPairs: [] },
    score: 0,
  });
  const [getLastMatchResult, setLastMatchResult] = useStaticVariable(null); // with theme (white, red, green)
  const onCardMatched = (card1, card2) => {
      const newCards = deck.slice(0, 2);

      updateState({
        deck: deck.slice(2),
        field: [...newCards, ...field.filter(({ id }) => id !== card1.id && id !== card2.id)],
        log: {...log, correctPairs: [[card1, card2], ...log.correctPairs]},
        score: score + 1,
      });
      setLastMatchResult(!getLastMatchResult());
    };
  const onCardDidNotMatched = (card1, card2) => {
      updateState({
        log: {...log, incorrectPairs: [[card1, card2], ...log.incorrectPairs]},
        score: score - 1,
      });
      setLastMatchResult(!getLastMatchResult());
    };

  useEffect(() => {
    queryTopKWithTranslations(60, 'eng', 'fra')
      .then(loadedDeck => {
        const initField = loadedDeck.slice(0, 9);
        const initDeck = loadedDeck.slice(9);

        updateState({ deck: initDeck, field: initField });
      }, console.error);
  }, [updateState]);

  return (
    <>
      <GameStatusBoard deckCount={deck.length} score={score} />
      <Field field={field} onCardMatched={onCardMatched} onCardDidNotMatched={onCardDidNotMatched} />
    </>
  );
}