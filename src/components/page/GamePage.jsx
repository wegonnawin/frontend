import React, { useEffect, useReducer } from 'react';

import useStaticVariable from '^/utils/useStaticVariable';

import { queryTopKWithTranslations } from '^/api';

import Field from '^/components/molecules/Field';
import GameStatusBoard from '^/components/molecules/GameStatusBoard';
import GameEndModal from '^/components/atoms/GameEndModal';

import { mergeDeepRight } from 'ramda';


const drawDeck = (deck, k)=>{
  const cards = deck.slice(0, k);
  const linkedCards = cards
    .map(c=>c.link)
    .map(id=>_.find(deck, c=>c.id=== id));
  return _.take(_.shuffle(cards.concat(linkedCards)), 9);
}


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

      FBInstant.updateAsync({
        action: 'CUSTOM',
        cta: 'Play',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
        text: {
          default: 'Check the sentence!',
        },
        template: 'play_turn',
        data: { incorrects: [card1, card2] },
        strategy: 'IMMEDIATE',
        notification: 'NO_PUSH'
      }).then(function() {
      			$('#hello').html(new Date());
      });


      setLastMatchResult(!getLastMatchResult());
    };

  useEffect(() => {
    queryTopKWithTranslations(300, 'eng', 'fra')
      .then(loadedDeck => {
        const drawedCards = drawDeck(loadedDeck, 5)

        updateState({ deck: loadedDeck, field: drawedCards });
      }, console.error);
  }, [updateState]);

  return (
    <>
      <GameStatusBoard deckCount={deck.length} score={score} />
      <Field field={field} onCardMatched={onCardMatched} onCardDidNotMatched={onCardDidNotMatched} />
      <GameEndModal log={log} score={score} open={deck.length === 0} />
    </>
  );
}
