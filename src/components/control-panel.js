import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as Icons from './icons'
import RoundButton from './round-button'

function ControlPanel(props) {
  let {
    extraCss,
    gameOfLifePlaying,
    refreshGameOfLife,
    playGameOfLife,
    pauseGameOfLife,
    stopGameOfLife,
  } = props

  return (
    <Wrapper extraCss={extraCss}>
      <RoundButton onClick={refreshGameOfLife}>
        <Icons.Refresh size={20} />
      </RoundButton>

      <RoundButton
        extraCss="margin-left: 5px;"
        onClick={onClickPlayPauseButton}
      >
        {gameOfLifePlaying ? (
          <Icons.Pause size={20} />
        ) : (
          <Icons.Play size={20} />
        )}
      </RoundButton>

      <RoundButton extraCss="margin-left: 5px;" onClick={onClickStopButton}>
        <Icons.Stop size={20} />
      </RoundButton>
    </Wrapper>
  )

  function onClickPlayPauseButton() {
    if (gameOfLifePlaying) {
      pauseGameOfLife()
    } else {
      playGameOfLife()
    }
  }

  function onClickStopButton() {
    stopGameOfLife()
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${props => props.extraCss}
`

export default connect(
  (state, ownProps) => ({
    gameOfLifePlaying: state.gameOfLife.playing,
    refreshGameOfLife: state.gameOfLife.refresh,
    playGameOfLife: state.gameOfLife.play,
    pauseGameOfLife: state.gameOfLife.pause,
    stopGameOfLife: state.gameOfLife.stop,
  }),
  null
)(ControlPanel)
