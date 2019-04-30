import React from 'react';

import DeckCount from '^/components/atoms/DeckCount';
import ScoreBoard from '^/components/atoms/ScoreBoard';

export default function GameStatusBoard({ score, deckCount }) {
  return (
    <>
      <DeckCount deckCount={deckCount} />
      <ScoreBoard score={score} />
    </>
  );
}