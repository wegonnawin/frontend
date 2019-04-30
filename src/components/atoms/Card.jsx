import React from 'react';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const StyledGrid = styled(Grid)`
  width: 184px;
  max-width: 184px;
  height: 210px;
`;

const StyledPaper = styled(Paper)`
  padding-top: theme.spacing.unit * 10;
  padding-bottom: theme.spacing.unit * 10;
  height: 100%;
  margin: auto;
`;

const Card = ({ sentence }) => (
  <StyledGrid>
    <StyledPaper>
      <Typography variant='h5' component='h3'>
        {sentence}
      </Typography>
    </StyledPaper>
  </StyledGrid>
);

export default Card;
