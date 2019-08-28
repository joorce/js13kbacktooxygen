const FULL_CIRCLE = 180 * Math.PI

export function add(a, b) {
    return a + b
}

export class Entity { // Circle

    /**
     * Entity constructor
     * @param {config} config A config object
     * @param {number} x X Position of entity
     * @param {number} y Y Position of entity
     * @param {number} dx X velocity of entity
     * @param {number} dy Y velocity of entity
     * @param {number} radius Radius of entity
     */
    constructor(config, x, y, dx, dy, radius) {
        this.config = config
        /** @private 
         * @property {CanvasRenderingContext2D} c The rendering context of this entity
         */
        this.c = this.config.canvas.getContext("2d")
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
        if (this.x + this.dx + this.radius >= this.config.nativeWidth || this.x + this.dx - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.dy + this.radius >= this.config.nativeHeight || this.y + this.dy - this.radius < 0) {
            this.dy = -this.dy
        }
    }
}
