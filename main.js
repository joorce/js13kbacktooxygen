/* eslint-disable no-sparse-arrays */

import {
    zzfx
} from "./ZzFX.micro"

import {
    sonantx
} from "sonantx";

function impulseSound() {
    zzfx(1, .1, 20, 1, .07, .9, 4.7, .3, .69);
}

function fireSound() {
    zzfx(1, .1, 1495, .2, .25, .1, .1, 9.7, .98);
}

let generateMusicInterval;
let musicPlayer
var wave
var audio


let btn = document.getElementById("testbtn")
btn.addEventListener("click", () => {
    // zzfx(1, .1, 20, 1, .07, .9, 4.7, .3, .69); // ZzFX 2
    // zzfx(1, .1, 150, .7, .35, .6, 0, 5.8, .45); // ZzFX 19
    // zzfx(1, .1, 41, 1, .61, .6, .1, 11, .94); // ZzFX 20
    // zzfx(1, .1, 885, .2, .1, 5.1, 1.1, 0, .7); // ZzFX 32
    // zzfx(1, .1, 0, .6, .45, .9, .1, 0, .87); // ZzFX 47
    // zzfx(1, .1, 1495, .2, .25, .1, .1, 9.7, .98); // ZzFX 60 (Fire)



})

import {
    degreesToRadians,
    logger,
    drawText,
    millisToMinutesAndSeconds,
    setCanvasResolution,
    distance
} from "./utils"


import {
    Sprite as Sprite
} from "./sprite"

import {
    makeMolecules,
    updateMolecules,
    drawMolecules
} from "./molecule";

const canvas = document.getElementsByTagName("canvas")[0]
const ctx = canvas.getContext("2d")
let impulse = 0
const maxImpulse = 2
let forward = false
let brake = false
let currentTime
let lastTime = new Date().getTime()
const startTime = lastTime
const limitTime = 60000
let timeToFinish = 60000
// eslint-disable-next-line prefer-const
let oxygenCurrent = 2
const oxygenGoal = 5
// const bullets = []
let gamepads
let gamepadIsConnected = false


// conf
const state = {
    ...setCanvasResolution(canvas, 640, 360),
    molecules: [],
    bullets: [],
    // impulse,
    // maxImpulse
}

setCanvasResolution(canvas, state.nativeWidth, state.nativeHeight)
window.addEventListener("resize", () => {
    setCanvasResolution(canvas, state.nativeWidth, state.nativeHeight)
})

window.addEventListener("gamepadconnected", e => {
    console.log(
        "Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index,
        e.gamepad.id,
        e.gamepad.buttons.length,
        e.gamepad.axes.length
    )
    gamepadIsConnected = true
})

const sprite = Sprite(
    state,
    state.nativeWidth / 2,
    state.nativeHeight / 2,
    "spritesheet.png"
)

const player = makePlayer(sprite, 2, 2)

function setControls(player) {
    const KEY_LEFT = 37
    const KEY_UP = 38
    const KEY_RIGHT = 39
    const KEY_DOWN = 40
    const KEY_SPACE = 32

    window.addEventListener("keydown", e => {
        const keyCode = e.keyCode
        switch (keyCode) {
            case KEY_RIGHT:
                player.turnRight = true
                break
            case KEY_LEFT:
                player.turnLeft = true
                break
            case KEY_SPACE:
                fireSound()
                fire(state.bullets, player)
                break
            default:
                break
        }
        if (keyCode == KEY_UP) {
            impulseSound()
            forward = true
        }
        if (keyCode == KEY_DOWN) {
            brake = true
        }
    })
    window.addEventListener("keyup", e => {
        const keyCode = e.keyCode
        switch (keyCode) {
            case KEY_RIGHT:
                player.turnRight = false
                break
            case KEY_LEFT:
                player.turnLeft = false
                break
            default:
                break
        }
        if (keyCode == KEY_UP) {
            forward = false
        }
        if (keyCode == KEY_DOWN) {
            brake = false
        }
    })

    window.addEventListener("gamepadconnected", e => {
        const gp = navigator.getGamepads()[e.gamepad.index]
        logger(
            "Gamepad connected at index %d: %s. %d buttons, %d axes.",
            gp.index,
            gp.id,
            gp.buttons.length,
            gp.axes.length
        )
    })
}

function fire(bullets, player) {
    // console.log(bullets)
    const sprite = Sprite(
        state,
        player.x + 5,
        player.y + 6,
        "spritesheet.png"
    )
    const bullet = makeBullet(sprite, 2, 2, player.rotation)
    // bullet.x = player.x + 5
    // bullet.y = player.y + 6
    bullets.push(bullet)
}

function makeBullet(sprite, dx, dy, rotation) {
    const alive = true
    return {
        ...sprite,
        rotation,
        dx,
        dy,
        alive
    }
}

function drawBullet(bullet) {
    if (!bullet.alive) {
        return
    }
    const ctx = bullet.conf.canvas.getContext("2d")
    ctx.save()
    ctx.imageSmoothingEnabled = false

    const {
        x,
        y,
        rotation
    } = bullet

    const width = 3
    const height = 1
    const centerX = x + 0.5 * width // x of shape center
    const centerY = y + 0.5 * height // y of shape center

    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((Math.PI / 180) * rotation)
    ctx.translate(-centerX, -centerY)
    ctx.drawImage(bullet.img, 24, 0, 1, 16, x, y, 8, 3)
    ctx.restore()
}

function drawBullets(bullets) {
    bullets.forEach(bullet => {
        drawBullet(bullet)
    })
}

function updateBullet(bullet) {
    if (!bullet.alive) {
        bullet = null
        return
    }
    // console.log(bullet)
    bullet.x +=
        Math.cos(degreesToRadians(bullet.rotation)) * (bullet.dx * maxImpulse + 1)
    bullet.y +=
        Math.sin(degreesToRadians(bullet.rotation)) * (bullet.dy * maxImpulse + 1)

    if (bullet.x >= state.nativeWidth - 8) {
        bullet.x = state.nativeWidth - 8
        bullet.alive = false
    }

    if (bullet.x <= 0) {
        bullet.x = 0
        bullet.alive = false
    }

    if (bullet.y >= state.nativeHeight - 8) {
        bullet.y = state.nativeHeight - 8
        bullet.alive = false
    }

    if (bullet.y <= 0) {
        bullet.y = 0
        bullet.alive = false
    }
}

function updateBullets(bullets) {
    bullets.forEach(bullet => {
        updateBullet(bullet)
    })
}

function makeImpulseBar(sprite, impulse, maxImpulse) {
    return {
        ...sprite,
        impulse,
        maxImpulse
    }
}

function drawImpulseBar(impulseBar) {
    const ctx = impulseBar.conf.canvas.getContext("2d")
    ctx.save()
    ctx.imageSmoothingEnabled = false

    const {
        x,
        y
    } = impulseBar

    ctx.save()
    ctx.drawImage(impulseBar.img, 24, 0, 1, 16, x, y, 100, 16)
    ctx.drawImage(impulseBar.img, 54, 0, 1, 16, x, y, (impulse * 100) / maxImpulse, 16)
    drawText(impulseBar.conf.canvas, "impulse", x + 408, y + 4, 0.5)
    ctx.restore()
}

function makeOxygenBar(sprite, current, goal) {
    return {
        ...sprite,
        current,
        goal
    }
}

function drawOxygenBar(oxygenBar) {
    const ctx = oxygenBar.conf.canvas.getContext("2d")
    ctx.save()
    ctx.imageSmoothingEnabled = false

    const {
        x,
        y
    } = oxygenBar

    ctx.save()
    ctx.drawImage(oxygenBar.img, 24, 0, 1, 16, x, y, 100, 16)
    ctx.drawImage(oxygenBar.img, 38, 0, 1, 16, x, y, (oxygenCurrent * 100) / oxygenGoal, 16)
    drawText(oxygenBar.conf.canvas, "oxygen", x + 220, y + 4, 0.5)
    ctx.restore()
}



function makePlayer(sprite, dx, dy, turnLeft = false, turnRight = false) {
    return {
        ...sprite,
        dx,
        dy,
        turnLeft,
        turnRight,
        alive: true
    }
}

function updatePlayer(player) {
    if (!player.alive) {
        return
    }

    player.conf.molecules.forEach(molecule => {
        if (distance(player, molecule) <= 16) {
            player.alive = false
        }
    })

    if (player.turnRight) {
        player.rotation =
            player.rotation < 360 ? (player.rotation += 2) : (player.rotation = 0)
    } else if (player.turnLeft) {
        player.rotation =
            player.rotation > 0 ? (player.rotation -= 2) : (player.rotation = 360)
    }

    player.x +=
        Math.cos(degreesToRadians(player.rotation)) * (player.dx * impulse)
    player.y +=
        Math.sin(degreesToRadians(player.rotation)) * (player.dy * impulse)

    if (player.x >= state.nativeWidth - 16) {
        player.x = state.nativeWidth - 16
    }

    if (player.x <= 0) {
        player.x = 0
    }

    if (player.y >= state.nativeHeight - 16) {
        player.y = state.nativeHeight - 16
    }

    if (player.y <= 0) {
        player.y = 0
    }
}

function drawPlayer(player) {
    if (!player.alive) {
        return
    }
    const ctx = player.conf.canvas.getContext("2d")
    ctx.save()
    ctx.imageSmoothingEnabled = false

    const {
        x,
        y,
        rotation
    } = player

    const width = 16
    const height = 16
    const centerX = x + 0.5 * width // x of shape center
    const centerY = y + 0.5 * height // y of shape center

    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((Math.PI / 180) * rotation)
    ctx.translate(-centerX, -centerY)
    ctx.drawImage(player.img, 0, 0, 16, 16, x, y, 16, 16)
    ctx.restore()
}

const oxygenBar = makeOxygenBar(
    Sprite(state, 16, 8, "spritesheet.png"),
    oxygenGoal,
    oxygenCurrent
)

const impulseBar = makeImpulseBar(
    Sprite(state, 525, 8, "spritesheet.png"),
    impulse,
    maxImpulse
)

setControls(player)

// const molecule = makeMolecule(
//     makeSprite(state, state.nativeWidth / 2 + 50, state.nativeHeight / 2, "spritesheet.png"),
//     2, 2,
//     Math.random() >= 0.5 ? "methane" : "dioxide",
//     16
// )

makeMolecules(state, 5)




function gameloop() {
    // animate
    requestAnimationFrame(gameloop)
    ctx.clearRect(0, -0, state.nativeWidth, state.nativeHeight)

    currentTime = new Date().getTime()
    if (currentTime - lastTime >= 1000) {
        timeToFinish = limitTime - (currentTime - startTime)
        lastTime = currentTime
    }

    // Gamepad
    if (gamepadIsConnected) {
        gamepads = navigator.getGamepads()

        const gp = gamepads[0]
        const buttonLeft = gp.buttons[14]
        const buttonRight = gp.buttons[15]
        const impulseButton = gp.buttons[12]
        const brakeButton = gp.buttons[13]
        const fireButton = gp.buttons[0]

        if (buttonLeft.pressed) {
            player.turnLeft = true
        } else {
            player.turnLeft = false
        }
        if (buttonRight.pressed) {
            player.turnRight = true
        } else {
            player.turnRight = false
        }
        if (impulseButton.pressed) {
            forward = true
        } else {
            forward = false
        }
        if (brakeButton.pressed) {
            brake = true
        } else {
            brake = false
        }
        if (fireButton.pressed) {
            // Controlar velocidad de disparo
            fire(state.bullets, player)
        }
    }

    updatePlayer(player)
    drawPlayer(player)

    updateBullets(state.bullets)
    drawBullets(state.bullets)


    updateMolecules(state.molecules)
    drawMolecules(state.molecules)
    // updateMolecule(molecule)
    // drawMolecule(molecule)

    // Draw UI
    drawText(state.canvas, millisToMinutesAndSeconds(timeToFinish), state.nativeWidth / 2 - 16 * 3, 8, 1)

    drawOxygenBar(oxygenBar)
    drawImpulseBar(impulseBar)

    if (forward) {
        impulse += 0.02
        // impulse *= 0.98
        if (impulse >= maxImpulse) {
            impulse = maxImpulse
        }
    }
    if (brake) {
        impulse *= 0.98
        if (impulse <= 0) {
            impulse = 0
        }
    }
    // Debug
    ctx.save()
    ctx.lineWidth = 1
    ctx.strokeStyle = "purple"
    ctx.strokeRect(0, 0, state.nativeWidth, state.nativeHeight)
    ctx.restore()
    //
}

gameloop()
