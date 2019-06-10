import Cell from './cell'

class GOL {
  constructor(p) {
    this.w = 20

    this.columns = Math.floor(p.width / this.w)
    this.rows = Math.floor(p.height / this.w)

    this.board = Array(this.columns)
      .fill()
      .map(() => Array(this.rows).fill())

    this.init(p)
  }

  init(p) {
    this.board = this.board.map((column, i) =>
      column.map((_, j) => {
        let cell = new Cell(p, i * this.w, j * this.w, this.w)
        if (
          i === 0 ||
          i === this.columns - 1 ||
          j === 0 ||
          j === this.rows - 1
        ) {
          cell.setState(0)
        }
        return cell
      })
    )
  }

  generate() {
    this.board.forEach(column => column.forEach(cell => cell.saveState()))

    this.board.forEach((column, i) => {
      column.forEach((cell, j) => {
        // At boundaries, state remains the same
        if (i > 0 && i < this.columns - 1 && j > 0 && j < this.rows - 1) {
          let neighbors = 0
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              neighbors += this.board[i + x][j + y].previousState
            }
          }
          neighbors -= cell.previousState

          if (cell.previousState === 1 && neighbors < 2) cell.setState(0)
          else if (cell.previousState === 1 && neighbors > 3) cell.setState(0)
          else if (cell.previousState === 0 && neighbors === 3) cell.setState(1)
        }
      })
    })
  }

  display(p) {
    this.board.forEach(column => column.forEach(cell => cell.display(p)))
  }
}

export default GOL
