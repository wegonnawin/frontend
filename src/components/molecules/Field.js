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

const Field = ({}) => (
    <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
        hello
        </Typography>
    </Paper>
)

export default Card
