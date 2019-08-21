import {
    Entity
} from "./Entity"
import { Ship } from "./Ship";
import {
    setCanvasResolution
} from "./utils"

let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext("2d")

// Config
let config = {
    // Resolution
    nativeWidth: 640,
    nativeHeight: 360,
    canvas: document.getElementsByTagName("canvas")[0]
}

setCanvasResolution(canvas, config.nativeWidth, config.nativeHeight)
window.addEventListener("resize", e => {
    setCanvasResolution(canvas, config.nativeWidth, config.nativeHeight)
})

let circle = new Entity(config, 50, 200, 2, 2, 30)
let ship = new Ship(config, 50, 200, 2, 2, 30)


function gameloop() { // animate
    requestAnimationFrame(gameloop)
    ctx.clearRect(0, -0, config.nativeWidth, config.nativeHeight)

    circle.update()
    circle.draw()

    ship.update()
    ship.draw()

    // Debug
    ctx.save()
    ctx.lineWidth = 1
    ctx.strokeStyle = "purple"
    ctx.strokeRect(0, 0, config.nativeWidth, config.nativeHeight)
    ctx.restore()
    // 
}

gameloop()
