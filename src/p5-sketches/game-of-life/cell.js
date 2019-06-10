class Cell {
  constructor(p, x, y, w) {
    this.x = x
    this.y = y
    this.w = w

    this.state = Math.floor(p.random(2))
    this.previousState = this.state
  }

  setState = state => {
    this.state = state
  }

  saveState = () => {
    this.previousState = this.state
  }

  display(p) {
    p.stroke(0)
    p.strokeWeight(1)
    if (this.state === 1) p.fill(50)
    else p.fill(255)
    p.rect(this.x, this.y, this.w, this.w)
  }
}

export default Cell
