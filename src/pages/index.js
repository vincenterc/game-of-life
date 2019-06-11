import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import actionCreators from '../action-creators'
import PageWrapper from '../components/page-wrapper'
import P5Wrapper from '../components/p5-wrapper'
import gameOfLifeSketch from '../p5-sketches/game-of-life'
import ControlPanel from '../components/control-panel'
import StartModal from '../components/start-modal'

function HomePage(props) {
  let { playGameOfLife, setGameOfLifeState } = props
  let [showStartModal, setShowStartModal] = useState(true)

  return (
    <Wrapper>
      <ControlPanel extraCss={'position: absolute; top: 10px; left: 15px;'} />
      <P5Wrapper
        sketch={gameOfLifeSketch}
        exposeSketchCustomProps={handleExposeSketchCustomProps}
        setStateToRedux={setGameOfLifeState}
      />
      {showStartModal && (
        <StartModal onClickStartButton={handleClickStartButton} />
      )}
    </Wrapper>
  )

  function handleExposeSketchCustomProps(props) {
    setGameOfLifeState(props)
  }

  function handleClickStartButton() {
    setShowStartModal(false)
    playGameOfLife()
  }
}

const Wrapper = styled.div``

export default PageWrapper(
  connect(
    (state, ownProps) => ({
      playGameOfLife: state.gameOfLife.play,
    }),
    actionCreators
  )(HomePage)
)
