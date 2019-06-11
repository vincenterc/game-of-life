import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import RefreshButton from './refresh-button'
import PlayPauseButton from './play-pause-button'
import StopButton from './stop-button'

function ControlPanel(props) {
  let {
    extraCss,
    refreshGameOfLife,
    playGameOfLife,
    pauseGameOfLife,
    stopGameOfLife,
  } = props
  let [gameOfLifePlaying, setGameOfLifePlaying] = useState(true)

  return (
    <Wrapper extraCss={extraCss}>
      <RefreshButton onClick={refreshGameOfLife} />
      <PlayPauseButton
        extraCss={'margin-left: 5px;'}
        playing={gameOfLifePlaying}
        onClick={onClickPlayPauseButton}
      />
      <StopButton extraCss="margin-left: 5px;" onClick={onClickStopButton} />
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

  function onClickStopButton() {
    stopGameOfLife()
    setGameOfLifePlaying(false)
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
    stopGameOfLife: state.gameOfLife.stop,
  }),
  null
)(ControlPanel)
