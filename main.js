const FULL_CIRCLE = Math.PI * 2
const canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext("2d")

// Resolution
// const nativeWidth = 320
// const nativeHeight = 240
const nativeWidth = 640
const nativeHeight = 360


function setResolution() {
    let deviceWidth = window.innerWidth
    let deviceHeight = window.innerHeight

    let scaleFillNative = Math.max(deviceWidth / nativeWidth, deviceHeight / nativeHeight)
    var scaleFitNative = Math.min(deviceWidth / nativeWidth, deviceHeight / nativeHeight);


    canvas.style.width = deviceWidth + "px";
    canvas.style.height = deviceHeight + "px";
    canvas.width = deviceWidth;
    canvas.height = deviceHeight;

    console.log(
        ctx.getTransform()
    );

    let x = deviceWidth / 2 - (nativeWidth / 2 * scaleFitNative)
    let y = deviceHeight / 2 - (nativeHeight / 2 * scaleFitNative)
    console.log(x, scaleFitNative);

    ctx.setTransform(
        scaleFitNative, 0, // or use scaleFillNative 
        0, scaleFitNative,
        x,
        y
    );
}

setResolution()
window.addEventListener("resize", e => {
    setResolution()
})


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
        if (this.x + this.dx + this.radius >= nativeWidth || this.x + this.dx - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.dy + this.radius >= nativeHeight || this.y + this.dy - this.radius < 0) {
            this.dy = -this.dy
        }
    }
}

let circle = new Entity(ctx, 50, 200, 2, 2, 30)

function gameloop() { // animate
    requestAnimationFrame(gameloop)
    ctx.clearRect(0, -0, nativeWidth, nativeHeight)

    circle.update()
    circle.draw()
    // Debug
    ctx.save()
    ctx.lineWidth = 1
    ctx.strokeStyle = "purple"
    ctx.strokeRect(0, 0, nativeWidth, nativeHeight)
    ctx.restore()
    // 
}

gameloop()
