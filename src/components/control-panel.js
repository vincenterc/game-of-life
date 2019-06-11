import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import RefreshButton from './refresh-button'
import PlayPauseButton from './play-pause-button'

function ControlPanel(props) {
  let { extraCss, refreshGameOfLife, playGameOfLife, pauseGameOfLife } = props
  let [gameOfLifePlaying, setGameOfLifePlaying] = useState(true)

  return (
    <Wrapper extraCss={extraCss}>
      <RefreshButton onClick={refreshGameOfLife} />
      <PlayPauseButton
        extraCss={'margin-left: 5px;'}
        playing={gameOfLifePlaying}
        onClick={onClickPlayPauseButton}
      />
    </Wrapper>
  )

  function onClickPlayPauseButton() {
    if (gameOfLifePlaying) {
      pauseGameOfLife()
    } else {
      playGameOfLife()
    }
    setGameOfLifePlaying(!gameOfLifePlaying)
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${props => props.extraCss}
`

export default connect(
  (state, ownProps) => ({
    refreshGameOfLife: state.gameOfLife.refresh,
    playGameOfLife: state.gameOfLife.play,
    pauseGameOfLife: state.gameOfLife.pause,
  }),
  null
)(ControlPanel)
