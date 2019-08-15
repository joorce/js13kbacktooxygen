const FULL_CIRCLE = Math.PI * 2
const nativeWidth = 640
const nativeHeight = 360

let canvas = document.getElementsByTagName("canvas")[0];

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let ctx = canvas.getContext("2d")
// ctx.fillRect(100, 100, 30, 30)


class Entity { // Circle

    /**
     * Entity constructor
     * @param {CanvasRenderingContext2D} ctx The rendering context of this entity
     * @param {number} x X Position of entity
     * @param {number} y Y Position of entity
     * @param {number} dx X velocity of entity
     * @param {number} dy Y velocity of entity
     * @param {number} radius Radius of entity
     */
    constructor(ctx, x, y, dx, dy, radius) {
        /** @private 
         * @property {CanvasRenderingContext2D} c The rendering context of this entity
         */
        this.c = ctx
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius

    }

    draw() {
        this.c.save()
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.radius, 0, FULL_CIRCLE)
        this.c.strokeStyle = "blue"
        this.c.stroke()
        this.c.restore()
    }

    update() {
        this.checkBounds()
        this.x += this.dx
        this.y += this.dy
    }

    checkBounds() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
    }
}

let circle = new Entity(ctx, 50, 200, 1, 1, 30)

function gameloop() { // animate
    requestAnimationFrame(gameloop)
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    circle.update()
    circle.draw()
    // Debug
    ctx.save()
    ctx.lineWidth = 10
    ctx.strokeStyle = "purple"
    ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight)
    ctx.restore()
    // 
}

gameloop()
