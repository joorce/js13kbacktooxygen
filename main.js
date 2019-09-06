/* eslint-disable no-sparse-arrays */

import { Bullet, drawBullets, updateBullets } from "./entities/bullet";
import { drawImpulseBar, ImpulseBar } from "./ui/impulsebar";
import { drawMolecules, makeMolecules, updateMolecules } from "./entities/molecule";
import { drawOxygenBar, OxygenBar } from "./ui/oxygenbar";
import { drawPlayer, Player, updatePlayer } from "./entities/player";
import { loadMainSong } from "./sound/sound";
import { Sprite } from "./entities/sprite";
import { drawText, logger, millisToMinutesAndSeconds, setCanvasResolution } from "./lib/utils";



// let btn = document.getElementById("testbtn")
// btn.addEventListener("click", () => {
//     loadMainSong()
// })

const canvas = document.getElementsByTagName("canvas")[0]
const ctx = canvas.getContext("2d")


let forward = false
let brake = false
let currentTime
let lastTime = new Date().getTime()
const startTime = lastTime
const limitTime = 60000
let timeToFinish = 60000
let gamepads
let gamepadIsConnected = false
let isGameFinish = false

// shared state
const state = {
    ...setCanvasResolution(canvas, 640, 360),
    molecules: [],
    bullets: [],
    impulse: 0,
    maxImpulse: 2,
    oxygenCurrent: 0,
    oxygenGoal: 5,
    shootDelay: 200,
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
    state.nativeHeight / 2
)

const player = Player(sprite, 2, 2)

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
                // fireSound()
                fire(state.bullets, player)
                break
            default:
                break
        }
        if (keyCode == KEY_UP) {
            // impulseSound()
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

const oxygenBar = OxygenBar(
    Sprite(state, 16, 8),
    state.oxygenGoal,
    state.oxygenCurrent
)

const impulseBar = ImpulseBar(
    Sprite(state, 525, 8),
    state.impulse,
    state.maxImpulse
)

setControls(player)

makeMolecules(state, 5)

state.oxygenGoal = state.molecules.length * 2

export function fire(bullets, player) {
    if (player.state.shootDelay <= 0) {
        const sprite = Sprite(
            player.state,
            player.x + 5,
            player.y + 6
        )
        const bullet = Bullet(sprite, 2, 2, player.rotation)
        bullets.push(bullet)
        player.state.shootDelay = 200
    }
}

function gameloop() {
    // animate
    if (isGameFinish) {
        drawText(state.canvas, "you win!", state.nativeWidth / 2 - 16 * 3, state.nativeHeight / 2, 1)
        return
    }
    requestAnimationFrame(gameloop)
    ctx.clearRect(-16, -16, state.nativeWidth + 16, state.nativeHeight + 16)

    state.shootDelay -= 15
    // console.log(shootDelay)

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

    if (true /* mainSongisLoaded */ ) {
        // playMainSong()

        updatePlayer(player)
        drawPlayer(player)

        updateBullets(state.bullets)
        drawBullets(state.bullets)

        updateMolecules(state.molecules)
        drawMolecules(state.molecules)

        // Draw UI
        drawText(state.canvas, millisToMinutesAndSeconds(timeToFinish), state.nativeWidth / 2 - 16 * 3, 8, 1)

        drawOxygenBar(oxygenBar)
        drawImpulseBar(impulseBar)

        if (forward) {
            state.impulse += 0.02
            // impulse *= 0.98
            if (state.impulse >= state.maxImpulse) {
                state.impulse = state.maxImpulse
            }
        }
        if (brake) {
            state.impulse *= 0.98
            if (state.impulse <= 0) {
                state.impulse = 0
            }
        }

    }
    if (state.oxygenCurrent >= state.oxygenGoal) {
        isGameFinish = true
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
