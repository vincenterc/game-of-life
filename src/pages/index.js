import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import actionCreators from '../action-creators'
import PageWrapper from '../components/page-wrapper'
import P5Wrapper from '../components/p5-wrapper'
import gameOfLifeSketch from '../p5-sketches/game-of-life'
import ControlPanel from '../components/control-panel'

function HomePage(props) {
  let { setGameOfLifeState } = props

  function handleExposeSketchCustomProps(props) {
    setGameOfLifeState(props)
  }

  return (
    <Wrapper>
      <ControlPanel extraCss={'position: absolute; top: 10px; left: 15px;'} />
      <P5Wrapper
        sketch={gameOfLifeSketch}
        exposeSketchCustomProps={handleExposeSketchCustomProps}
        setStateToRedux={setGameOfLifeState}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default PageWrapper(
  connect(
    null,
    actionCreators
  )(HomePage)
)
