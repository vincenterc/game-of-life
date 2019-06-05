import React, { useRef, useEffect } from 'react'
import p5 from 'p5'

function P5Wrapper(props) {
  let { sketch } = props
  let p5Wrapper = useRef(null)
  let p5Instance = null

  useEffect(() => {
    p5Instance = new p5(sketch, p5Wrapper.current)
  }, [])

  useEffect(() => {
    if (p5Instance && p5Instance.setSketchProps) {
      p5Instance.setSketchProps(props)
    }
  })

  return <div ref={p5Wrapper} />
}

export default P5Wrapper
