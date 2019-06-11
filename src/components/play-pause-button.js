import React from 'react'
import styled from 'styled-components'
import { Play, Pause } from './icons'

function PlayPauseButton(props) {
  let { extraCss = '', playing = false, onClick = () => {} } = props

  return (
    <Wrapper extraCss={extraCss} onClick={onClick}>
      {playing ? <Pause size={20} /> : <Play size={20} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.extraCss}
`

export default PlayPauseButton
