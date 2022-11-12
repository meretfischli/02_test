class Cell {
    constructor(pos, size) {
        this.pos = pos
        this.size = size
        // this.curve = new Curve(this.pos)
    }
    show() {
        rect(this.pos.x, this.pos.y, this.size)
        // this.curve.show()
    }
}

// class Curve {
//     constructor(xPos, yPos) {
//         this.pos = {x: xPos, y: yPos}
//     }
//     show() {
//         ellipse(this.pos.x, this.pos.y, 100)
//     }
// }


let grid = []
let forms = []
let radius = 50
let factor = 0


function setup() {
    createCanvas(500,500)
    background(100,0,100)

    let gridSize = 4
    let cellSize = width/gridSize


    for (let row = 0; row < gridSize; row += 1) {
        for (let col = 0; col < gridSize; col += 1) {
            let posX = col * cellSize
            let posY = row * cellSize
            let posCell = {x: posX, y: posY}
            let newCell = new Cell(posCell, cellSize)
            
            grid.push(newCell)

            let radius = 30
    
            for (let a = 0; a < TWO_PI; a = a + TWO_PI/360) {
                push()
                translate(col * cellSize + cellSize/2, row * cellSize + cellSize/2)
                let newX = cos(a*5) * radius
                let newY = sin(a*4) * radius
                let posCurve = {x: newX, y: newY}
                ellipse(newX, newY, radius/10)
                pop()
            }

        }
    }

    
}


function draw() {
    noFill()
    for (let i = 0; i < grid.length; i += 1) {
        let currentCell = grid[i]
        currentCell.show()
    }
}