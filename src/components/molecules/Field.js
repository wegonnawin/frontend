import React from 'react'
import styled, { css } from 'styled-components'

const styles = css`
    width: 184,
    maxWidth: 184,
    height: 210,
    backgroundColor: "red"
`

const StyledTextarea = styled.textarea`${styles}`
const StyledSelect = styled.select`${styles}`
const StyledInput = styled.input`${styles}`

const Field = ({cards}) => (
  <Grid key={v1} container spacing={24} className={classes.gridRow}>
    {cards.map(v2 => (
    <Grid key={v2} className={classes.card} item xs={4}>
        {card}
    </Grid>
    ))}
  </Grid>
)

export default Card
