import {
    degreesToRadians
} from "./utils";

import {
    getGamepadState,
    isPressed
} from "./gamepad";

let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext("2d")

function setCanvasResolution(canvas, nativeWidth, nativeHeight) {
    let ctx = canvas.getContext("2d")
    let deviceWidth = window.innerWidth
    let deviceHeight = window.innerHeight

    let scaleFillNative = Math.max(deviceWidth / nativeWidth, deviceHeight / nativeHeight)
    var scaleFitNative = Math.min(deviceWidth / nativeWidth, deviceHeight / nativeHeight);


    canvas.style.width = deviceWidth + "px";
    canvas.style.height = deviceHeight + "px";
    canvas.width = deviceWidth;
    canvas.height = deviceHeight;

    // console.log(
    //     ctx.getTransform()
    // );

    let x = deviceWidth / 2 - (nativeWidth / 2 * scaleFitNative)
    let y = deviceHeight / 2 - (nativeHeight / 2 * scaleFitNative)
    // console.log(x, scaleFitNative);

    ctx.setTransform(
        scaleFitNative, 0, // or use scaleFillNative 
        0, scaleFitNative,
        x,
        y
    );

    return {
        canvas,
        nativeWidth,
        nativeHeight
    };
}

// conf
let conf = {
    ...setCanvasResolution(canvas, 640, 360)
};

setCanvasResolution(canvas, conf.nativeWidth, conf.nativeHeight)
window.addEventListener("resize", e => {
    setCanvasResolution(canvas, conf.nativeWidth, conf.nativeHeight)
})

let isKeyRightPressed = false
let isKeyLeftPressed = false

function setControls() {
    const KEY_LEFT = 37
    const KEY_UP = 38
    const KEY_RIGHT = 39
    const KEY_DOWN = 40

    window.addEventListener("keydown", e => {
        let keyCode = e.keyCode
        switch (keyCode) {
            case KEY_RIGHT:
                isKeyRightPressed = true
                break;
            case KEY_LEFT:
                isKeyLeftPressed = true
                break;
            default:
                break;
        }
    })
    window.addEventListener("keyup", e => {
        let keyCode = e.keyCode
        switch (keyCode) {
            case KEY_RIGHT:
                isKeyRightPressed = false
                break;
            case KEY_LEFT:
                isKeyLeftPressed = false
                break;
            default:
                break;
        }
    })

    window.addEventListener("gamepadconnected", function (e) {
        var gp = navigator.getGamepads()[e.gamepad.index];
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
            gp.index, gp.id,
            gp.buttons.length, gp.axes.length);
    });
}

setControls()

/**
 * 
 * @param {Object} conf The conf object 
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 * @param {number} dx The x speed.
 * @param {number} dy The y speed.
 * @param {string} filename The image filename.
 * @returns {Sprite} A Sprite object
 */
function makeSprite(conf, x, y, dx, dy, filename) {
    let img = new Image();
    img.src = `${filename}`;
    let rotation = 0
    return {
        conf,
        x,
        y,
        dx,
        dy,
        rotation,
        img
    };
}

function makePlayer(sprite) {
    return {
        ...sprite
    };
}

function updatePlayer(player) {
    if (isKeyRightPressed) {
        player.rotation = player.rotation < 360 ? player.rotation += 2 : player.rotation = 0
    } else if (isKeyLeftPressed) {
        player.rotation = player.rotation > 0 ? player.rotation -= 2 : player.rotation = 360
    }

}

function drawPlayer(player) {
    let ctx = player.conf.canvas.getContext("2d")
    ctx.save()
    ctx.imageSmoothingEnabled = false;

    let x = player.x;
    let y = player.y;
    let rotation = player.rotation
    let width = 16;
    let height = 16
    let centerX = x + 0.5 * width; // x of shape center
    let centerY = y + 0.5 * height; // y of shape center

    ctx.save()
    ctx.translate(centerX, centerY);
    ctx.rotate((Math.PI / 180) * rotation);
    ctx.translate(-centerX, -centerY);
    ctx.drawImage(player.img, 0, 0, 16, 16, x, y, 16, 16)
    ctx.restore()
}

let sprite = makeSprite(
    conf,
    conf.nativeWidth / 2,
    conf.nativeHeight / 2,
    2,
    2,
    "spritesheet.png"
);

// let circle = new Entity(conf, 50, 200, 2, 2, 30)
// let ship = new Ship(conf, 50, 200, 2, 2, 30)

let player = makePlayer(sprite)

function gameloop() { // animate
    requestAnimationFrame(gameloop)
    ctx.clearRect(0, -0, conf.nativeWidth, conf.nativeHeight)

    // console.log("isKeyLeftPressed", isKeyLeftPressed);
    // console.log("isKeyRightPressed", isKeyRightPressed);

    getGamepadState()
    updatePlayer(player)
    drawPlayer(player)
    // circle.update()
    // circle.draw()

    // ship.update()
    // ship.draw()

    // Debug
    ctx.save()
    ctx.lineWidth = 1
    ctx.strokeStyle = "purple"
    ctx.strokeRect(0, 0, conf.nativeWidth, conf.nativeHeight)
    ctx.restore()
    // 
}

gameloop()
