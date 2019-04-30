import React, { useCallback } from 'react';

import Card from '^/components/atoms/Card';

import useStaticVariable from '^/utils/useStaticVariable';
import Grid from '@material-ui/core/Grid';

export default function Field({ field, onCardMatched, onCardDidNotMatched }) {
  const [getLastClickedCard, setLastClickedCard] = useStaticVariable(null);
  const onCardClicked = clickedCard => {
    const lastClickedCard = getLastClickedCard();

    if (lastClickedCard === null) {
      setLastClickedCard(clickedCard);
    } else {
      const properCallback = lastClickedCard.link === clickedCard.id ? onCardMatched : onCardDidNotMatched;
      properCallback(lastClickedCard, clickedCard);
      setLastClickedCard(null);
    }
  };

  return (
    <Grid container spacing={16}>
      {field.map(card => <Card key={card.id} sentence={card.sentence} onCardClicked={() => onCardClicked(card)} />)}
    </Grid>
  );
}