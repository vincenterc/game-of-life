import GOL from './gol'

export default function sketch(p) {
  let gol
  let setStateToRedux

  p.setSketchProps = props => {
    if (props.setStateToRedux) setStateToRedux = props.setStateToRedux
  }

  p.customProps = {}

  p.customProps.refresh = function() {
    gol.refresh(p)
    gol.display(p)
  }

  p.customProps.play = function() {
    setStateToRedux({ playing: true })
    p.loop()
  }

  p.customProps.pause = function() {
    setStateToRedux({ playing: false })
    p.noLoop()
  }

  p.customProps.stop = function() {
    setStateToRedux({ playing: false })
    p.noLoop()
    gol.clear()
    gol.display(p)
  }

  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    canvas.mouseClicked(() => {
      let column = Math.floor(p.mouseX / gol.w)
      let row = Math.floor(p.mouseY / gol.w)
      let cell = gol.board[column][row]

      if (cell.state === 1) {
        cell.setState(0)
      } else if (cell.state === 0) {
        cell.setState(1)
      }

      gol.display(p)
    })
    p.background(255)
    p.noLoop()

    gol = new GOL(p)
  }

  p.draw = function() {
    gol.generate()
    gol.display(p)
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }
}
