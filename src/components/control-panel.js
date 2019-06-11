import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import RefreshButton from './refresh-button'

function ControlPanel(props) {
  let { extraCss, refreshGameOfLife } = props

  return (
    <Wrapper extraCss={extraCss}>
      <RefreshButton onClick={refreshGameOfLife} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${props => props.extraCss}
`

export default connect(
  (state, ownProps) => ({
    refreshGameOfLife: state.gameOfLife.refresh,
  }),
  null
)(ControlPanel)
