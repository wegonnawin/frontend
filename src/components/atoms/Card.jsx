import React, { useState, useCallback, useMemo } from 'react';

import mergeCallbacks from '^/utils/mergeCallbacks';

export default function Card({ sentence, onCardClicked }) {
  const [clicked, setClickState] = useState(false);
  const turn = useCallback(() => setClickState(!clicked), [clicked, setClickState]);
  const onClick = useMemo(() => mergeCallbacks(turn, onCardClicked), [turn, onCardClicked]);

  return (
    <p onClick={onClick}>
      {sentence}
    </p>
  );
}
