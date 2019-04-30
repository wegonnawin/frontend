import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const StyledGrid = styled(Grid)`
    width: 184px;
    maxWidth: 184px;
    height: 210px;
    background-color: red;
    color: red;
`

const Card = () => (
    <StyledGrid>
    <Paper>
        <Typography variant='h5' component='h3'>
        hello
        </Typography>
    </Paper>
    </StyledGrid>
)

export default Card
