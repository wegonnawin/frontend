import React from 'react'
import styled, { css } from 'styled-components'
import Paper from '@material-ui/core/Paper';

const StyledPaper = styled(Paper)`
    width: 184,
    maxWidth: 184,
    height: 210,
    backgroundColor: 'red'
`

const Card = ({}) => (
    <StyledPaper>
        <Typography variant='h5' component='h3'>
        hello
        </Typography>
    </StyledPaper>
)

export default Card;
