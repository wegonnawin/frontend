import React, { useState, useCallback, useMemo } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import mergeCallbacks from '^/utils/mergeCallbacks';

export default function ({ sentence, onCardClicked }) {
  const [clicked, setClickState] = useState(false);
  const turn = useCallback(() => setClickState(!clicked), [clicked, setClickState]);
  const onClick = useMemo(() => mergeCallbacks(turn, onCardClicked), [turn, onCardClicked]);

  return (
    <Grid item xs={4} onClick={onClick}>
      <Card>
        <CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {sentence}
            </Typography>
          </CardContent>
        </CardMedia>
      </Card>
    </Grid>
  );
}
