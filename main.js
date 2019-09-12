/* eslint-disable no-sparse-arrays */

import { Bullet, drawBullets, updateBullets } from "./entities/bullet";
import { drawImpulseBar, ImpulseBar } from "./ui/impulsebar";
import {
    drawMolecules,
    makeMolecules,
    updateMolecules
} from "./entities/molecule";
import { drawOxygenBar, OxygenBar } from "./ui/oxygenbar";
import { drawPlayer, Player, updatePlayer } from "./entities/player";
import { loadMainSong, fireSound, playMainSong } from "./sound/sound";
import { Sprite } from "./entities/sprite";
import {
    drawText,
    logger,
    millisToMinutesAndSeconds,
    setCanvasResolution
} from "./lib/utils";

const canvas = document.getElementsByTagName("canvas")[0];
canvas.addEventListener("click", () => {
    if (state.scene == "menu") {

        state.scene = "loadingsound"
        loadMainSong(state)
    }
})
const ctx = canvas.getContext("2d");

let forward = false;
let brake = false;
let currentTime;
let lastTime = new Date().getTime();
const startTime = lastTime;
const limitTime = 60000;
let timeToFinish = 60000;
let gamepads;
let gamepadIsConnected = false;
let isGameFinish = false;

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
    model:
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
    scene: "menu"
};

setCanvasResolution(canvas, state.nativeWidth, state.nativeHeight);
window.addEventListener("resize", () => {
    setCanvasResolution(canvas, state.nativeWidth, state.nativeHeight);
});

window.addEventListener("gamepadconnected", e => {
    console.log(
        "Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index,
        e.gamepad.id,
        e.gamepad.buttons.length,
        e.gamepad.axes.length
    );
    gamepadIsConnected = true;
});

const sprite = Sprite(state, state.nativeWidth / 2, state.nativeHeight / 2);

const player = Player(sprite, 2, 2);

function setControls(player) {
    const KEY_LEFT = 37;
    const KEY_UP = 38;
    const KEY_RIGHT = 39;
    const KEY_DOWN = 40;
    const KEY_SPACE = 32;

    window.addEventListener("keydown", e => {
        if (!player.alive) { return }
        const keyCode = e.keyCode;
        switch (keyCode) {
            case KEY_RIGHT:
                player.turnRight = true;
                break;
            case KEY_LEFT:
                player.turnLeft = true;
                break;
            case KEY_SPACE:
                fireSound()
                fire(state.bullets, player);
                break;
            default:
                break;
        }
        if (keyCode == KEY_UP) {
            // impulseSound()
            forward = true;
        }
        if (keyCode == KEY_DOWN) {
            brake = true;
        }
    });
    window.addEventListener("keyup", e => {
        const keyCode = e.keyCode;
        switch (keyCode) {
            case KEY_RIGHT:
                player.turnRight = false;
                break;
            case KEY_LEFT:
                player.turnLeft = false;
                break;
            default:
                break;
        }
        if (keyCode == KEY_UP) {
            forward = false;
        }
        if (keyCode == KEY_DOWN) {
            brake = false;
        }
    });

    window.addEventListener("gamepadconnected", e => {
        const gp = navigator.getGamepads()[e.gamepad.index];
        logger(
            "Gamepad connected at index %d: %s. %d buttons, %d axes.",
            gp.index,
            gp.id,
            gp.buttons.length,
            gp.axes.length
        );
    });
}

const oxygenBar = OxygenBar(
    Sprite(state, 16, 8),
    state.oxygenGoal,
    state.oxygenCurrent
);

const impulseBar = ImpulseBar(
    Sprite(state, 525, 8),
    state.impulse,
    state.maxImpulse
);

setControls(player);

makeMolecules(state, 5);

state.oxygenGoal = state.molecules.length * 2;

export function fire(bullets, player) {
    if (player.state.shootDelay <= 0) {
        const sprite = Sprite(player.state, player.x + 5, player.y + 6);
        const bullet = Bullet(sprite, 2, 2, player.rotation);
        bullets.push(bullet);
        player.state.shootDelay = 200;
    }
}

export function drawBackground(state) {

    const ctx = state.canvas.getContext("2d");
    ctx.save();
    ctx.imageSmoothingEnabled = false;

    let tileSizeX = 16;
    let tileSizeY = 15;

    let x = 0;
    let y = 0;
    let img = new Image();
    const filename = "spritesheet.png";
    img.src = `./assets/${filename}`;



    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 10; col++) {
            if (!isGameFinish) {
                ctx.drawImage(img, 13 * tileSizeX, 0, tileSizeX, tileSizeY, x + col * tileSizeX * 4, y + row * tileSizeY * 4, tileSizeX * 4, tileSizeY * 4);
            } else {
                ctx.drawImage(img, 14 * tileSizeX, 0, tileSizeX, tileSizeY, x + col * tileSizeX * 4, y + row * tileSizeY * 4, tileSizeX * 4, tileSizeY * 4);
            }
        }
    }

    ctx.restore();
}

function gameloop() {
    // animate
    if (isGameFinish) {
        //drawBackground(state)
        // drawPlayer(player);
        // Draw UI
        drawText(state.canvas, millisToMinutesAndSeconds(timeToFinish), state.nativeWidth / 2 - 16 * 3, 8, 1)

        drawOxygenBar(oxygenBar)
        drawImpulseBar(impulseBar)
        if (state.scene == "win") {

            drawText(
                state.canvas,
                "you win!",
                state.nativeWidth / 2 - 16 * 3,
                state.nativeHeight / 2,
                1
            );
        } else if (state.scene == "lose") {
            drawText(
                state.canvas,
                "you lose!",
                state.nativeWidth / 2 - 16 * 3,
                state.nativeHeight / 2,
                1
            );
        }
        return;
    }
    requestAnimationFrame(gameloop);
    ctx.clearRect(-16, -16, state.nativeWidth + 16, state.nativeHeight + 16);

    state.shootDelay -= 15;

    currentTime = new Date().getTime();
    if (currentTime - lastTime >= 1000) {
        timeToFinish = limitTime - (currentTime - startTime);
        lastTime = currentTime;
    }

    // Gamepad
    if (gamepadIsConnected) {
        gamepads = navigator.getGamepads();

        const gp = gamepads[0];
        const buttonLeft = gp.buttons[14];
        const buttonRight = gp.buttons[15];
        const impulseButton = gp.buttons[12];
        const brakeButton = gp.buttons[13];
        const fireButton = gp.buttons[0];

        if (buttonLeft.pressed) {
            player.turnLeft = true;
        } else {
            player.turnLeft = false;
        }
        if (buttonRight.pressed) {
            player.turnRight = true;
        } else {
            player.turnRight = false;
        }
        if (impulseButton.pressed) {
            forward = true;
        } else {
            forward = false;
        }
        if (brakeButton.pressed) {
            brake = true;
        } else {
            brake = false;
        }
        if (fireButton.pressed) {
            // Controlar velocidad de disparo
            fire(state.bullets, player);
        }
    }

    if (state.scene == "play") {
        playMainSong()

        drawBackground(state);

        updatePlayer(player);
        drawPlayer(player);

        updateBullets(state.bullets);
        drawBullets(state.bullets);

        updateMolecules(state.molecules)
        drawMolecules(state.molecules);

        // Draw UI
        drawText(state.canvas, millisToMinutesAndSeconds(timeToFinish), state.nativeWidth / 2 - 16 * 3, 8, 1)

        drawOxygenBar(oxygenBar)
        drawImpulseBar(impulseBar)

        if (forward) {
            state.impulse += 0.02;
            // impulse *= 0.98
            if (state.impulse >= state.maxImpulse) {
                state.impulse = state.maxImpulse;
            }
        }
        if (brake) {
            state.impulse *= 0.98;
            if (state.impulse <= 0) {
                state.impulse = 0;
            }
        }

        if (state.oxygenCurrent >= state.oxygenGoal) {
            isGameFinish = true;
            state.scene = "win"
        }

        if (timeToFinish <= 0) {
            isGameFinish = true;
            state.scene = "lose"
        }

        if (!player.alive) {
            isGameFinish = true;
            state.scene = "lose"
        }
    }
    else if (state.scene == "menu") {
        drawBackground(state);

        // eslint-disable-next-line no-inner-declarations
        function drawParagraph(x, y, text, centered = true) {

            for (let i = 0; i < text.length; i++) {
                const sentence = text[i];
                let length = centered ? sentence.length * 16 : 0
                drawText(state.canvas, sentence, x - length / 2, i * 24 + y, 1)
            }

        }

        let text = [
            "Clean the clouds",
            "Bring back the oxygen to the sky",
            "by breaking the toxic molecules",
            "and catching blue <oxygen> molecules"
        ]
        drawParagraph(state.nativeWidth / 2, 96, text)
        drawText(state.canvas, "Press to play", state.nativeWidth / 2 - 112, state.nativeHeight / 2 + 16, 1)
    } else if (state.scene === "loadingsound") {
        drawBackground(state);
        drawText(state.canvas, "Loading sound...", state.nativeWidth / 2 - 124, state.nativeHeight / 2, 1)
    }

    // Debug
    // ctx.save();

    // ctx.lineWidth = 1;
    // ctx.strokeStyle = "purple";
    // ctx.strokeRect(0, 0, state.nativeWidth, state.nativeHeight);
    // ctx.restore();
    //
}

gameloop();
