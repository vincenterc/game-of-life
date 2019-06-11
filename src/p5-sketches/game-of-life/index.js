import GOL from './gol'

export default function sketch(p) {
  let gol

  p.customProps = {}

  p.customProps.refresh = function() {
    gol.refresh(p)
  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.background(255)

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
