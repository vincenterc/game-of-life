import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../components/page-wrapper'
import P5Wrapper from '../components/p5-wrapper'
import gameOfLifeSketch from '../p5-sketches/game-of-life'

function HomePage() {
  return (
    <Wrapper>
      <P5Wrapper sketch={gameOfLifeSketch} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default PageWrapper(HomePage)
