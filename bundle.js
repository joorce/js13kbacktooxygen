/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ZzFX.micro.js":
/*!***********************!*\
  !*** ./ZzFX.micro.js ***!
  \***********************/
/*! exports provided: zzfx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zzfx", function() { return zzfx; });
// ZzFXmicro - Zuper Zmall Zound Zynth - MIT License - Copyright 2019 Frank Force
const zzfx_v = .5;
const zzfx_x = new AudioContext;
const zzfx = (e, f, a, b = 1, d = .1, g = 0, h = 0, k = 0, l = 0) => {
    let S = 44100,
        P = Math.PI;
    a *= 2 * P / S;
    a *= 1 + f * (2 * Math.random() - 1);
    g *= 1E3 * P / (S ** 2);
    b = 0 < b ? S * (10 < b ? 10 : b) | 0 : 1;
    d *= b | 0;
    k *= 2 * P / S;
    l *= P;
    f = [];
    for (var m = 0, n = 0, c = 0; c < b; ++c) f[c] = e * zzfx_v * Math.cos(m * a * Math.cos(n * k + l)) * (c < d ? c / d : 1 - (c - d) / (b - d)), m += 1 + h * (2 * Math.random() - 1), n += 1 + h * (2 * Math.random() - 1), a += g;
    e = zzfx_x.createBuffer(1, b, S);
    a = zzfx_x.createBufferSource();
    e.getChannelData(0).set(f);
    a.buffer = e;
    a.connect(zzfx_x.destination);
    a.start();
    return a
}


/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound */ "./sound.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./utils.js");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprite */ "./sprite.js");
/* harmony import */ var _molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./molecule */ "./molecule.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* eslint-disable no-sparse-arrays */






let btn = document.getElementById("testbtn")
btn.addEventListener("click", () => {
    Object(_sound__WEBPACK_IMPORTED_MODULE_0__["loadMainSong"])()
})










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
    ...Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setCanvasResolution"])(canvas, 640, 360),
    molecules: [],
    bullets: [],
    // impulse,
    // maxImpulse
}

Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setCanvasResolution"])(canvas, state.nativeWidth, state.nativeHeight)
window.addEventListener("resize", () => {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setCanvasResolution"])(canvas, state.nativeWidth, state.nativeHeight)
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

const sprite = Object(_sprite__WEBPACK_IMPORTED_MODULE_2__["Sprite"])(
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
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["logger"])(
            "Gamepad connected at index %d: %s. %d buttons, %d axes.",
            gp.index,
            gp.id,
            gp.buttons.length,
            gp.axes.length
        )
    })
}

function fire(bullets, player) {
    if (shootDelay <= 0) {
        // console.log(bullets)
        const sprite = Object(_sprite__WEBPACK_IMPORTED_MODULE_2__["Sprite"])(
            state,
            player.x + 5,
            player.y + 6,
            "spritesheet.png"
        )
        const bullet = makeBullet(sprite, 2, 2, player.rotation)
        // bullet.x = player.x + 5
        // bullet.y = player.y + 6
        bullets.push(bullet)
        shootDelay = 200
    }

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
        Math.cos(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(bullet.rotation)) * (bullet.dx * maxImpulse + 1)
    bullet.y +=
        Math.sin(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(bullet.rotation)) * (bullet.dy * maxImpulse + 1)

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

    let _bullets = bullets.filter((bullet) => bullet.alive)
    for (let i = 0; i < _bullets.length; i++) {
        const bullet = _bullets[i];
        updateBullet(bullet)
    }
    bullets = _bullets

    // .forEach(bullet => {
    //     updateBullet(bullet)
    // })
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
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawText"])(impulseBar.conf.canvas, "impulse", x + 408, y + 4, 0.5)
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
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawText"])(oxygenBar.conf.canvas, "oxygen", x + 220, y + 4, 0.5)
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
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["distance"])(player, molecule) <= 16) {
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
        Math.cos(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(player.rotation)) * (player.dx * impulse)
    player.y +=
        Math.sin(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(player.rotation)) * (player.dy * impulse)

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
    Object(_sprite__WEBPACK_IMPORTED_MODULE_2__["Sprite"])(state, 16, 8, "spritesheet.png"),
    oxygenGoal,
    oxygenCurrent
)

const impulseBar = makeImpulseBar(
    Object(_sprite__WEBPACK_IMPORTED_MODULE_2__["Sprite"])(state, 525, 8, "spritesheet.png"),
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

Object(_molecule__WEBPACK_IMPORTED_MODULE_3__["makeMolecules"])(state, 5)



let shootDelay = 200

function gameloop() {
    // animate
    requestAnimationFrame(gameloop)
    ctx.clearRect(0, -0, state.nativeWidth, state.nativeHeight)

    shootDelay -= 15
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


        Object(_molecule__WEBPACK_IMPORTED_MODULE_3__["updateMolecules"])(state.molecules)
        Object(_molecule__WEBPACK_IMPORTED_MODULE_3__["drawMolecules"])(state.molecules)
        // updateMolecule(molecule)
        // drawMolecule(molecule)



        // Draw UI
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["drawText"])(state.canvas, Object(_utils__WEBPACK_IMPORTED_MODULE_1__["millisToMinutesAndSeconds"])(timeToFinish), state.nativeWidth / 2 - 16 * 3, 8, 1)

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


/***/ }),

/***/ "./molecule.js":
/*!*********************!*\
  !*** ./molecule.js ***!
  \*********************/
/*! exports provided: updateMolecules, drawMolecules, makeMolecules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMolecules", function() { return updateMolecules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawMolecules", function() { return drawMolecules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMolecules", function() { return makeMolecules; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./utils.js");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ "./sprite.js");




function makeMolecule(sprite, dx, dy, type, radius) {
    return {
        ...sprite,
        dx,
        dy,
        type,
        radius,
        rotation: Math.floor(Math.random() * 360),
        innerRotation: 0,
        alive: true
    }
}


function drawMolecule(molecule) {
    const ctx = molecule.conf.canvas.getContext("2d")
    ctx.save()
    ctx.imageSmoothingEnabled = false

    const {
        x,
        y,
        innerRotation,
        type
    } = molecule
    const width = 32
    const height = 32
    const centerX = x + 0.5 * width // x of shape center
    const centerY = y + 0.5 * height // y of shape center


    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((Math.PI / 180) * innerRotation)
    ctx.translate(-centerX, -centerY)
    switch (type) {
        case "methane":
            ctx.drawImage(molecule.img, 5 * 16, 0, 16, 16, x, y, 16, 16) // Left top side
            ctx.drawImage(molecule.img, 6 * 16, 0, 16, 16, x + 16, y, 16, 16) // Right top side
            ctx.drawImage(molecule.img, 7 * 16, 0, 16, 16, x, y + 16, 16, 16) // Left bottom side
            ctx.drawImage(molecule.img, 8 * 16, 0, 16, 16, x + 16, y + 16, 16, 16) // Left bottom side
            break;
        case "dioxide":
            ctx.drawImage(molecule.img, 9 * 16, 0, 16, 16, x, y, 16, 16) // Left top side
            ctx.drawImage(molecule.img, 10 * 16, 0, 16, 16, x + 16, y, 16, 16) // Right top side
            ctx.drawImage(molecule.img, 11 * 16, 0, 16, 16, x, y + 16, 16, 16) // Left bottom side
            ctx.drawImage(molecule.img, 12 * 16, 0, 16, 16, x + 16, y + 16, 16, 16) // Left bottom side
            break;
    }

    ctx.restore()
}

function updateMolecule(molecule) {
    if (!molecule.alive) {
        return
    }
    const {
        conf
    } = molecule

    molecule.conf.bullets.forEach(bullet => {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["distance"])(molecule, bullet) <= 16) {
            molecule.alive = false
        }
    })


    molecule.innerRotation -= 2

    molecule.x += Math.cos(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(molecule.rotation)) * (molecule.dx * 1)
    molecule.y += Math.sin(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(molecule.rotation)) * (molecule.dy * 1)

    if (molecule.x >= conf.nativeWidth - 32) {
        molecule.x = conf.nativeWidth - 32
        molecule.dx *= -1
    }

    if (molecule.x <= 0) {
        molecule.x = 0
        molecule.dx *= -1
    }

    if (molecule.y >= conf.nativeHeight - 32) {
        molecule.y = conf.nativeHeight - 32
        molecule.dy *= -1
    }

    if (molecule.y <= 0) {
        molecule.y = 0
        molecule.dy *= -1
    }
}

function updateMolecules(molecules) {
    molecules.forEach(molecule => {
        updateMolecule(molecule)
    });
}

function drawMolecules(molecules) {
    molecules.forEach(molecule => {
        drawMolecule(molecule)
    });
}

function makeMolecules(state, numOfMolecules) {
    for (let i = 0; i < numOfMolecules; i++) {
        const sprite = Object(_sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"])(state, Math.random() * state.nativeWidth, Math.random() * state.nativeHeight, "spritesheet.png")

        state.molecules.push(
            makeMolecule(
                sprite,
                1,
                1,
                Math.random() >= 0.5 ? "methane" : "dioxide",
                16
            )
        )
    }
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./sonantx.js":
/*!********************!*\
  !*** ./sonantx.js ***!
  \********************/
/*! exports provided: AudioGenerator, SoundGenerator, MusicGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioGenerator", function() { return AudioGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundGenerator", function() { return SoundGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicGenerator", function() { return MusicGenerator; });
//
// Sonant-X
//
// Copyright (c) 2014 Nicolas Vanhoren
//
// Sonant-X is a fork of js-sonant by Marcus Geelnard and Jake Taylor. It is
// still published using the same license (zlib license, see below).
//
// Copyright (c) 2011 Marcus Geelnard
// Copyright (c) 2008-2009 Jake Taylor
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//    claim that you wrote the original software. If you use this software
//    in a product, an acknowledgment in the product documentation would be
//    appreciated but is not required.
//
// 2. Altered source versions must be plainly marked as such, and must not be
//    misrepresented as being the original software.
//
// 3. This notice may not be removed or altered from any source
//    distribution.


var WAVE_SPS = 44100; // Samples per second
var WAVE_CHAN = 2; // Channels
var MAX_TIME = 33; // maximum time, in millis, that the generator can use consecutively

var audioCtx = null;

// Oscillators
function osc_sin(value) {
    return Math.sin(value * 6.283184);
}

function osc_square(value) {
    if (osc_sin(value) < 0) return -1;
    return 1;
}

function osc_saw(value) {
    return (value % 1) - 0.5;
}

function osc_tri(value) {
    var v2 = (value % 1) * 4;
    if (v2 < 2) return v2 - 1;
    return 3 - v2;
}

// Array of oscillator functions
var oscillators = [
    osc_sin,
    osc_square,
    osc_saw,
    osc_tri
];

function getnotefreq(n) {
    return 0.00390625 * Math.pow(1.059463094, n - 128);
}

function genBuffer(waveSize, callBack) {
    setTimeout(function () {
        // Create the channel work buffer
        var buf = new Uint8Array(waveSize * WAVE_CHAN * 2);
        var b = buf.length - 2;

        var iterate = function () {
            var begin = new Date();
            var count = 0;
            while (b >= 0) {
                buf[b] = 0;
                buf[b + 1] = 128;
                b -= 2;
                count += 1;
                if (count % 1000 === 0 && (new Date() - begin) > MAX_TIME) {
                    setTimeout(iterate, 0);
                    return;
                }
            }
            setTimeout(function () {
                callBack(buf);
            }, 0);
        };
        setTimeout(iterate, 0);
    }, 0);
}

function applyDelay(chnBuf, waveSamples, instr, rowLen, callBack) {
    var p1 = (instr.fx_delay_time * rowLen) >> 1;
    var t1 = instr.fx_delay_amt / 255;

    var n1 = 0;
    var iterate = function () {
        var beginning = new Date();
        var count = 0;
        while (n1 < waveSamples - p1) {
            var b1 = 4 * n1;
            var l = 4 * (n1 + p1);

            // Left channel = left + right[-p1] * t1
            var x1 = chnBuf[l] + (chnBuf[l + 1] << 8) +
                (chnBuf[b1 + 2] + (chnBuf[b1 + 3] << 8) - 32768) * t1;
            chnBuf[l] = x1 & 255;
            chnBuf[l + 1] = (x1 >> 8) & 255;

            // Right channel = right + left[-p1] * t1
            x1 = chnBuf[l + 2] + (chnBuf[l + 3] << 8) +
                (chnBuf[b1] + (chnBuf[b1 + 1] << 8) - 32768) * t1;
            chnBuf[l + 2] = x1 & 255;
            chnBuf[l + 3] = (x1 >> 8) & 255;
            ++n1;
            count += 1;
            if (count % 1000 === 0 && (new Date() - beginning) > MAX_TIME) {
                setTimeout(iterate, 0);
                return;
            }
        }
        setTimeout(callBack, 0);
    };
    setTimeout(iterate, 0);
}

var AudioGenerator = function (mixBuf) {
    this.mixBuf = mixBuf;
    this.waveSize = mixBuf.length / WAVE_CHAN / 2;
};



AudioGenerator.prototype.getWave = function () {
    var mixBuf = this.mixBuf;
    var waveSize = this.waveSize;
    // Local variables
    var b, k, x, wave, l1, l2, s, y;

    // Turn critical object properties into local variables (performance)
    var waveBytes = waveSize * WAVE_CHAN * 2;

    // Convert to a WAVE file (in a binary string)
    l1 = waveBytes - 8;
    l2 = l1 - 36;
    wave = String.fromCharCode(82, 73, 70, 70,
        l1 & 255, (l1 >> 8) & 255, (l1 >> 16) & 255, (l1 >> 24) & 255,
        87, 65, 86, 69, 102, 109, 116, 32, 16, 0, 0, 0, 1, 0, 2, 0,
        68, 172, 0, 0, 16, 177, 2, 0, 4, 0, 16, 0, 100, 97, 116, 97,
        l2 & 255, (l2 >> 8) & 255, (l2 >> 16) & 255, (l2 >> 24) & 255);
    b = 0;
    while (b < waveBytes) {
        // This is a GC & speed trick: don't add one char at a time - batch up
        // larger partial strings
        x = "";
        for (k = 0; k < 256 && b < waveBytes; ++k, b += 2) {
            // Note: We amplify and clamp here
            y = 4 * (mixBuf[b] + (mixBuf[b + 1] << 8) - 32768);
            y = y < -32768 ? -32768 : (y > 32767 ? 32767 : y);
            x += String.fromCharCode(y & 255, (y >> 8) & 255);
        }
        wave += x;

    }
    return wave;
};
AudioGenerator.prototype.getAudio = function () {
    var wave = this.getWave();
    var a = new Audio("data:audio/wav;base64," + btoa(wave));
    a.preload = "none";
    a.load();
    return a;
};
AudioGenerator.prototype.getAudioBuffer = function (callBack) {
    if (audioCtx === null)
        audioCtx = new AudioContext();
    var mixBuf = this.mixBuf;
    var waveSize = this.waveSize;

    var buffer = audioCtx.createBuffer(WAVE_CHAN, this.waveSize, WAVE_SPS); // Create Mono Source Buffer from Raw Binary
    var lchan = buffer.getChannelData(0);
    var rchan = buffer.getChannelData(1);
    var b = 0;
    var iterate = function () {
        var beginning = new Date();
        var count = 0;
        while (b < waveSize) {
            var y = 4 * (mixBuf[b * 4] + (mixBuf[(b * 4) + 1] << 8) - 32768);
            y = y < -32768 ? -32768 : (y > 32767 ? 32767 : y);
            lchan[b] = y / 32768;
            y = 4 * (mixBuf[(b * 4) + 2] + (mixBuf[(b * 4) + 3] << 8) - 32768);
            y = y < -32768 ? -32768 : (y > 32767 ? 32767 : y);
            rchan[b] = y / 32768;
            b += 1;
            count += 1;
            if (count % 1000 === 0 && new Date() - beginning > MAX_TIME) {
                setTimeout(iterate, 0);
                return;
            }
        }
        setTimeout(function () {
            callBack(buffer);
        }, 0);
    };
    setTimeout(iterate, 0);
};

var SoundGenerator = function (instr, rowLen) {
    this.instr = instr;
    this.rowLen = rowLen || 5605;

    this.osc_lfo = oscillators[instr.lfo_waveform];
    this.osc1 = oscillators[instr.osc1_waveform];
    this.osc2 = oscillators[instr.osc2_waveform];
    this.attack = instr.env_attack;
    this.sustain = instr.env_sustain;
    this.release = instr.env_release;
    this.panFreq = Math.pow(2, instr.fx_pan_freq - 8) / this.rowLen;
    this.lfoFreq = Math.pow(2, instr.lfo_freq - 8) / this.rowLen;
};



SoundGenerator.prototype.genSound = function (n, chnBuf, currentpos) {
    var marker = new Date();
    var c1 = 0;
    var c2 = 0;

    // Precalculate frequencues
    var o1t = getnotefreq(n + (this.instr.osc1_oct - 8) * 12 + this.instr.osc1_det) * (1 + 0.0008 * this.instr.osc1_detune);
    var o2t = getnotefreq(n + (this.instr.osc2_oct - 8) * 12 + this.instr.osc2_det) * (1 + 0.0008 * this.instr.osc2_detune);

    // State variable init
    var q = this.instr.fx_resonance / 255;
    var low = 0;
    var band = 0;
    for (var j = this.attack + this.sustain + this.release - 1; j >= 0; --j) {
        var k = j + currentpos;

        // LFO
        var lfor = this.osc_lfo(k * this.lfoFreq) * this.instr.lfo_amt / 512 + 0.5;

        // Envelope
        var e = 1;
        if (j < this.attack)
            e = j / this.attack;
        else if (j >= this.attack + this.sustain)
            e -= (j - this.attack - this.sustain) / this.release;

        // Oscillator 1
        var t = o1t;
        if (this.instr.lfo_osc1_freq) t += lfor;
        if (this.instr.osc1_xenv) t *= e * e;
        c1 += t;
        var rsample = this.osc1(c1) * this.instr.osc1_vol;

        // Oscillator 2
        t = o2t;
        if (this.instr.osc2_xenv) t *= e * e;
        c2 += t;
        rsample += this.osc2(c2) * this.instr.osc2_vol;

        // Noise oscillator
        if (this.instr.noise_fader) rsample += (2 * Math.random() - 1) * this.instr.noise_fader * e;

        rsample *= e / 255;

        // State variable filter
        var f = this.instr.fx_freq;
        if (this.instr.lfo_fx_freq) f *= lfor;
        f = 1.5 * Math.sin(f * 3.141592 / WAVE_SPS);
        low += f * band;
        var high = q * (rsample - band) - low;
        band += f * high;
        switch (this.instr.fx_filter) {
            case 1: // Hipass
                rsample = high;
                break;
            case 2: // Lopass
                rsample = low;
                break;
            case 3: // Bandpass
                rsample = band;
                break;
            case 4: // Notch
                rsample = low + high;
                break;
            default:
        }

        // Panning & master volume
        t = osc_sin(k * this.panFreq) * this.instr.fx_pan_amt / 512 + 0.5;
        rsample *= 39 * this.instr.env_master;

        // Add to 16-bit channel buffer
        k = k * 4;
        if (k + 3 < chnBuf.length) {
            var x = chnBuf[k] + (chnBuf[k + 1] << 8) + rsample * (1 - t);
            chnBuf[k] = x & 255;
            chnBuf[k + 1] = (x >> 8) & 255;
            x = chnBuf[k + 2] + (chnBuf[k + 3] << 8) + rsample * t;
            chnBuf[k + 2] = x & 255;
            chnBuf[k + 3] = (x >> 8) & 255;
        }
    }
};
SoundGenerator.prototype.getAudioGenerator = function (n, callBack) {
    var bufferSize = (this.attack + this.sustain + this.release - 1) + (32 * this.rowLen);
    var self = this;
    genBuffer(bufferSize, function (buffer) {
        self.genSound(n, buffer, 0);
        applyDelay(buffer, bufferSize, self.instr, self.rowLen, function () {
            callBack(new AudioGenerator(buffer));
        });
    });
};
SoundGenerator.prototype.createAudio = function (n, callBack) {
    this.getAudioGenerator(n, function (ag) {
        callBack(ag.getAudio());
    });
};
SoundGenerator.prototype.createAudioBuffer = function (n, callBack) {
    this.getAudioGenerator(n, function (ag) {
        ag.getAudioBuffer(callBack);
    });
};

var MusicGenerator = function (song) {
    this.song = song;
    // Wave data configuration
    this.waveSize = WAVE_SPS * song.songLen; // Total song size (in samples)
};



MusicGenerator.prototype.generateTrack = function (instr, mixBuf, callBack) {
    var self = this;
    genBuffer(this.waveSize, function (chnBuf) {
        // Preload/precalc some properties/expressions (for improved performance)
        var waveSamples = self.waveSize,
            waveBytes = self.waveSize * WAVE_CHAN * 2,
            rowLen = self.song.rowLen,
            endPattern = self.song.endPattern,
            soundGen = new SoundGenerator(instr, rowLen);

        var currentpos = 0;
        var p = 0;
        var row = 0;
        var recordSounds = function () {
            var beginning = new Date();
            while (true) {
                if (row === 32) {
                    row = 0;
                    p += 1;
                    continue;
                }
                if (p === endPattern - 1) {
                    setTimeout(delay, 0);
                    return;
                }
                var cp = instr.p[p];
                if (cp) {
                    var n = instr.c[cp - 1].n[row];
                    if (n) {
                        soundGen.genSound(n, chnBuf, currentpos);
                    }
                }
                currentpos += rowLen;
                row += 1;
                if (new Date() - beginning > MAX_TIME) {
                    setTimeout(recordSounds, 0);
                    return;
                }
            }
        };

        var delay = function () {
            applyDelay(chnBuf, waveSamples, instr, rowLen, finalize);
        };

        var b2 = 0;
        var finalize = function () {
            var beginning = new Date();
            var count = 0;
            // Add to mix buffer
            while (b2 < waveBytes) {
                var x2 = mixBuf[b2] + (mixBuf[b2 + 1] << 8) + chnBuf[b2] + (chnBuf[b2 + 1] << 8) - 32768;
                mixBuf[b2] = x2 & 255;
                mixBuf[b2 + 1] = (x2 >> 8) & 255;
                b2 += 2;
                count += 1;
                if (count % 1000 === 0 && (new Date() - beginning) > MAX_TIME) {
                    setTimeout(finalize, 0);
                    return;
                }
            }
            setTimeout(callBack, 0);
        };
        setTimeout(recordSounds, 0);
    });
};
MusicGenerator.prototype.getAudioGenerator = function (callBack) {
    var self = this;
    genBuffer(this.waveSize, function (mixBuf) {
        var t = 0;
        var recu = function () {
            if (t < self.song.songData.length) {
                t += 1;
                self.generateTrack(self.song.songData[t - 1], mixBuf, recu);
            } else {
                callBack(new AudioGenerator(mixBuf));
            }
        };
        recu();
    });
};
MusicGenerator.prototype.createAudio = function (callBack) {
    this.getAudioGenerator(function (ag) {
        callBack(ag.getAudio());
    });
};
MusicGenerator.prototype.createAudioBuffer = function (callBack) {
    this.getAudioGenerator(function (ag) {
        ag.getAudioBuffer(callBack);
    });
};


/***/ }),

/***/ "./sound.js":
/*!******************!*\
  !*** ./sound.js ***!
  \******************/
/*! exports provided: mainSongisLoaded, loadMainSong, playMainSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainSongisLoaded", function() { return mainSongisLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMainSong", function() { return loadMainSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playMainSong", function() { return playMainSong; });
/* harmony import */ var _ZzFX_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ZzFX.micro */ "./ZzFX.micro.js");
/* harmony import */ var _sonantx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sonantx */ "./sonantx.js");




let audioCtx
let source
let mainSoundIsStarted = false

let mainSongisLoaded = false

function loadMainSong() {
    let songGen = new _sonantx__WEBPACK_IMPORTED_MODULE_1__["MusicGenerator"](mainSong());
    audioCtx = new AudioContext()
    console.log("loading sound...")
    songGen.createAudioBuffer(function (buffer) {
        source = audioCtx.createBufferSource();


        source.buffer = buffer;
        source.connect(audioCtx.destination);
        // source.start();
        audioCtx.suspend()
        // audioCtx.resume()
        // source.start(0)
        mainSongisLoaded = true
    });


}

function playMainSong() {
    if (!mainSoundIsStarted) {
        audioCtx.resume()
        source.start(0)
        mainSoundIsStarted = true
        return true
    } else {
        return false
    }
}

// zzfx(1, .1, 20, 1, .07, .9, 4.7, .3, .69); // ZzFX 2
// zzfx(1, .1, 150, .7, .35, .6, 0, 5.8, .45); // ZzFX 19
// zzfx(1, .1, 41, 1, .61, .6, .1, 11, .94); // ZzFX 20
// zzfx(1, .1, 885, .2, .1, 5.1, 1.1, 0, .7); // ZzFX 32
// zzfx(1, .1, 0, .6, .45, .9, .1, 0, .87); // ZzFX 47
// zzfx(1, .1, 1495, .2, .25, .1, .1, 9.7, .98); // ZzFX 60 (Fire)

// function impulseSound() {
//     zzfx(1, .1, 20, 1, .07, .9, 4.7, .3, .69);
// }

// function fireSound() {
//     zzfx(1, .1, 1495, .2, .25, .1, .1, 9.7, .98);
// }

function mainSong() {
    return {
        "songLen": 37,
        "songData": [{
                "osc1_oct": 7,
                "osc1_det": 0,
                "osc1_detune": 0,
                "osc1_xenv": 0,
                "osc1_vol": 192,
                "osc1_waveform": 3,
                "osc2_oct": 7,
                "osc2_det": 0,
                "osc2_detune": 7,
                "osc2_xenv": 0,
                "osc2_vol": 201,
                "osc2_waveform": 3,
                "noise_fader": 0,
                "env_attack": 789,
                "env_sustain": 1234,
                "env_release": 13636,
                "env_master": 191,
                "fx_filter": 2,
                "fx_freq": 5839,
                "fx_resonance": 254,
                "fx_delay_time": 6,
                "fx_delay_amt": 121,
                "fx_pan_freq": 6,
                "fx_pan_amt": 147,
                "lfo_osc1_freq": 0,
                "lfo_fx_freq": 1,
                "lfo_freq": 6,
                "lfo_amt": 195,
                "lfo_waveform": 0,
                "p": [
                    1,
                    2,
                    0,
                    0,
                    1,
                    2,
                    1,
                    2
                ],
                "c": [{
                        "n": [
                            154,
                            0,
                            154,
                            0,
                            152,
                            0,
                            147,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            154,
                            0,
                            154,
                            0,
                            152,
                            0,
                            157,
                            0,
                            0,
                            0,
                            156,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "n": [
                            154,
                            0,
                            154,
                            0,
                            152,
                            0,
                            147,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            154,
                            0,
                            154,
                            0,
                            152,
                            0,
                            157,
                            0,
                            0,
                            0,
                            159,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    }
                ]
            },
            {
                "osc1_oct": 7,
                "osc1_det": 0,
                "osc1_detune": 0,
                "osc1_xenv": 0,
                "osc1_vol": 255,
                "osc1_waveform": 2,
                "osc2_oct": 8,
                "osc2_det": 0,
                "osc2_detune": 18,
                "osc2_xenv": 1,
                "osc2_vol": 191,
                "osc2_waveform": 2,
                "noise_fader": 0,
                "env_attack": 3997,
                "env_sustain": 56363,
                "env_release": 100000,
                "env_master": 255,
                "fx_filter": 2,
                "fx_freq": 392,
                "fx_resonance": 255,
                "fx_delay_time": 8,
                "fx_delay_amt": 69,
                "fx_pan_freq": 5,
                "fx_pan_amt": 67,
                "lfo_osc1_freq": 0,
                "lfo_fx_freq": 1,
                "lfo_freq": 4,
                "lfo_amt": 57,
                "lfo_waveform": 3,
                "p": [
                    1,
                    2,
                    1,
                    2,
                    1,
                    2,
                    1,
                    2
                ],
                "c": [{
                        "n": [
                            130,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "n": [
                            123,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    }
                ]
            },
            {
                "osc1_oct": 8,
                "osc1_det": 0,
                "osc1_detune": 0,
                "osc1_xenv": 0,
                "osc1_vol": 0,
                "osc1_waveform": 0,
                "osc2_oct": 8,
                "osc2_det": 0,
                "osc2_detune": 0,
                "osc2_xenv": 0,
                "osc2_vol": 0,
                "osc2_waveform": 0,
                "noise_fader": 60,
                "env_attack": 50,
                "env_sustain": 419,
                "env_release": 4607,
                "env_master": 130,
                "fx_filter": 1,
                "fx_freq": 10332,
                "fx_resonance": 120,
                "fx_delay_time": 4,
                "fx_delay_amt": 16,
                "fx_pan_freq": 5,
                "fx_pan_amt": 108,
                "lfo_osc1_freq": 0,
                "lfo_fx_freq": 0,
                "lfo_freq": 5,
                "lfo_amt": 187,
                "lfo_waveform": 0,
                "p": [
                    0,
                    0,
                    0,
                    0,
                    1,
                    1
                ],
                "c": [{
                    "n": [
                        0,
                        0,
                        147,
                        0,
                        0,
                        0,
                        147,
                        147,
                        0,
                        0,
                        147,
                        0,
                        0,
                        147,
                        0,
                        147,
                        0,
                        0,
                        147,
                        0,
                        0,
                        0,
                        147,
                        147,
                        0,
                        0,
                        147,
                        0,
                        0,
                        147,
                        0,
                        147
                    ]
                }]
            },
            {
                "osc1_oct": 7,
                "osc1_det": 0,
                "osc1_detune": 0,
                "osc1_xenv": 1,
                "osc1_vol": 255,
                "osc1_waveform": 0,
                "osc2_oct": 7,
                "osc2_det": 0,
                "osc2_detune": 0,
                "osc2_xenv": 1,
                "osc2_vol": 255,
                "osc2_waveform": 0,
                "noise_fader": 0,
                "env_attack": 50,
                "env_sustain": 150,
                "env_release": 4800,
                "env_master": 200,
                "fx_filter": 2,
                "fx_freq": 600,
                "fx_resonance": 254,
                "fx_delay_time": 0,
                "fx_delay_amt": 0,
                "fx_pan_freq": 0,
                "fx_pan_amt": 0,
                "lfo_osc1_freq": 0,
                "lfo_fx_freq": 0,
                "lfo_freq": 0,
                "lfo_amt": 0,
                "lfo_waveform": 0,
                "p": [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                "c": [{
                    "n": [
                        147,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        147,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        147,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        147,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                }]
            },
            {
                "osc1_oct": 7,
                "osc1_det": 0,
                "osc1_detune": 0,
                "osc1_xenv": 0,
                "osc1_vol": 255,
                "osc1_waveform": 2,
                "osc2_oct": 7,
                "osc2_det": 0,
                "osc2_detune": 9,
                "osc2_xenv": 0,
                "osc2_vol": 154,
                "osc2_waveform": 2,
                "noise_fader": 0,
                "env_attack": 2418,
                "env_sustain": 1075,
                "env_release": 10614,
                "env_master": 240,
                "fx_filter": 3,
                "fx_freq": 2962,
                "fx_resonance": 255,
                "fx_delay_time": 6,
                "fx_delay_amt": 117,
                "fx_pan_freq": 3,
                "fx_pan_amt": 73,
                "lfo_osc1_freq": 0,
                "lfo_fx_freq": 1,
                "lfo_freq": 5,
                "lfo_amt": 124,
                "lfo_waveform": 0,
                "p": [
                    0,
                    0,
                    0,
                    0,
                    1,
                    2,
                    1,
                    2
                ],
                "c": [{
                        "n": [
                            154,
                            0,
                            154,
                            0,
                            152,
                            0,
                            147,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            154,
                            0,
                            154,
                            0,
                            152,
                            0,
                            157,
                            0,
                            0,
                            0,
                            156,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "n": [
                            154,
                            0,
                            154,
                            0,
                            152,
                            0,
                            147,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            154,
                            0,
                            147,
                            0,
                            152,
                            0,
                            157,
                            0,
                            0,
                            0,
                            159,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    }
                ]
            },
            {
                "osc1_oct": 7,
                "osc1_det": 0,
                "osc1_detune": 0,
                "osc1_xenv": 0,
                "osc1_vol": 192,
                "osc1_waveform": 1,
                "osc2_oct": 6,
                "osc2_det": 0,
                "osc2_detune": 9,
                "osc2_xenv": 0,
                "osc2_vol": 192,
                "osc2_waveform": 1,
                "noise_fader": 0,
                "env_attack": 137,
                "env_sustain": 2000,
                "env_release": 4611,
                "env_master": 192,
                "fx_filter": 1,
                "fx_freq": 982,
                "fx_resonance": 89,
                "fx_delay_time": 6,
                "fx_delay_amt": 25,
                "fx_pan_freq": 6,
                "fx_pan_amt": 77,
                "lfo_osc1_freq": 0,
                "lfo_fx_freq": 1,
                "lfo_freq": 3,
                "lfo_amt": 69,
                "lfo_waveform": 0,
                "p": [
                    1,
                    2,
                    1,
                    3,
                    1,
                    3
                ],
                "c": [{
                        "n": [
                            130,
                            0,
                            130,
                            0,
                            142,
                            0,
                            130,
                            130,
                            0,
                            142,
                            130,
                            0,
                            142,
                            0,
                            130,
                            0,
                            130,
                            0,
                            130,
                            0,
                            142,
                            0,
                            130,
                            130,
                            0,
                            142,
                            130,
                            0,
                            142,
                            0,
                            130,
                            0
                        ]
                    },
                    {
                        "n": [
                            123,
                            0,
                            123,
                            0,
                            135,
                            0,
                            123,
                            123,
                            0,
                            135,
                            123,
                            0,
                            135,
                            0,
                            123,
                            0,
                            123,
                            0,
                            123,
                            0,
                            135,
                            0,
                            123,
                            123,
                            0,
                            135,
                            123,
                            0,
                            135,
                            0,
                            123,
                            0
                        ]
                    },
                    {
                        "n": [
                            135,
                            0,
                            135,
                            0,
                            147,
                            0,
                            135,
                            135,
                            0,
                            147,
                            135,
                            0,
                            147,
                            0,
                            135,
                            0,
                            135,
                            0,
                            135,
                            0,
                            147,
                            0,
                            135,
                            135,
                            0,
                            147,
                            135,
                            0,
                            147,
                            0,
                            135,
                            0
                        ]
                    }
                ]
            },
            {
                "osc1_oct": 7,
                "osc1_det": 0,
                "osc1_detune": 0,
                "osc1_xenv": 0,
                "osc1_vol": 255,
                "osc1_waveform": 3,
                "osc2_oct": 8,
                "osc2_det": 0,
                "osc2_detune": 0,
                "osc2_xenv": 0,
                "osc2_vol": 255,
                "osc2_waveform": 0,
                "noise_fader": 127,
                "env_attack": 22,
                "env_sustain": 88,
                "env_release": 3997,
                "env_master": 255,
                "fx_filter": 3,
                "fx_freq": 4067,
                "fx_resonance": 234,
                "fx_delay_time": 4,
                "fx_delay_amt": 33,
                "fx_pan_freq": 2,
                "fx_pan_amt": 84,
                "lfo_osc1_freq": 0,
                "lfo_fx_freq": 1,
                "lfo_freq": 3,
                "lfo_amt": 28,
                "lfo_waveform": 0,
                "p": [
                    0,
                    0,
                    1,
                    2,
                    1,
                    2,
                    1,
                    3
                ],
                "c": [{
                        "n": [
                            0,
                            0,
                            142,
                            0,
                            154,
                            0,
                            0,
                            0,
                            142,
                            0,
                            0,
                            0,
                            154,
                            0,
                            0,
                            0,
                            0,
                            0,
                            142,
                            0,
                            154,
                            0,
                            0,
                            0,
                            142,
                            0,
                            0,
                            0,
                            154,
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "n": [
                            0,
                            0,
                            147,
                            0,
                            154,
                            0,
                            0,
                            0,
                            147,
                            0,
                            0,
                            0,
                            154,
                            0,
                            0,
                            0,
                            0,
                            0,
                            147,
                            0,
                            154,
                            0,
                            147,
                            0,
                            0,
                            0,
                            154,
                            0,
                            0,
                            0,
                            154,
                            0
                        ]
                    },
                    {
                        "n": [
                            0,
                            0,
                            147,
                            0,
                            154,
                            0,
                            0,
                            0,
                            147,
                            0,
                            0,
                            0,
                            154,
                            0,
                            0,
                            0,
                            0,
                            0,
                            147,
                            0,
                            154,
                            0,
                            0,
                            0,
                            147,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ]
                    }
                ]
            },
            {
                "osc1_oct": 8,
                "osc1_det": 0,
                "osc1_detune": 0,
                "osc1_xenv": 0,
                "osc1_vol": 0,
                "osc1_waveform": 0,
                "osc2_oct": 8,
                "osc2_det": 0,
                "osc2_detune": 0,
                "osc2_xenv": 0,
                "osc2_vol": 0,
                "osc2_waveform": 0,
                "noise_fader": 255,
                "env_attack": 140347,
                "env_sustain": 9216,
                "env_release": 133417,
                "env_master": 208,
                "fx_filter": 2,
                "fx_freq": 2500,
                "fx_resonance": 16,
                "fx_delay_time": 2,
                "fx_delay_amt": 157,
                "fx_pan_freq": 8,
                "fx_pan_amt": 207,
                "lfo_osc1_freq": 0,
                "lfo_fx_freq": 1,
                "lfo_freq": 2,
                "lfo_amt": 51,
                "lfo_waveform": 0,
                "p": [
                    0,
                    0,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                "c": [{
                    "n": [
                        147,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                }]
            }
        ],
        "rowLen": 5513,
        "endPattern": 9
    }
}


/***/ }),

/***/ "./sprite.js":
/*!*******************!*\
  !*** ./sprite.js ***!
  \*******************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
/**
 * 
 * @param {Object} conf The conf object 
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 * @param {string} filename The image filename.
 * @returns {Sprite} A Sprite object
 */
function Sprite(conf, x, y, filename) {
    let img = new Image()
    img.src = `${filename}`
    let rotation = 0
    return {
        conf,
        x,
        y,
        rotation,
        img
    }
}


/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! exports provided: setCanvasResolution, FULL_CIRCLE, distance, degreesToRadians, radiansToDegrees, logger, drawText, millisToMinutesAndSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCanvasResolution", function() { return setCanvasResolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULL_CIRCLE", function() { return FULL_CIRCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawText", function() { return drawText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "millisToMinutesAndSeconds", function() { return millisToMinutesAndSeconds; });
/**
 * @param {HTMLCanvasElement} canvas The canvas we are setting resolution for 
 * @param {number} nativeWidth The native with of the device
 * @param {number} nativeHeight The native height of the device
 */
function setCanvasResolution(canvas, nativeWidth, nativeHeight) {
    let ctx = canvas.getContext("2d")
    let deviceWidth = window.innerWidth
    let deviceHeight = window.innerHeight

    // eslint-disable-next-line no-unused-vars
    let scaleFillNative = Math.max(deviceWidth / nativeWidth, deviceHeight / nativeHeight)
    var scaleFitNative = Math.min(deviceWidth / nativeWidth, deviceHeight / nativeHeight)


    canvas.style.width = deviceWidth + "px"
    canvas.style.height = deviceHeight + "px"
    canvas.width = deviceWidth
    canvas.height = deviceHeight

    let x = deviceWidth / 2 - (nativeWidth / 2 * scaleFitNative)
    let y = deviceHeight / 2 - (nativeHeight / 2 * scaleFitNative)
    // console.log(x, scaleFitNative)

    ctx.setTransform(
        scaleFitNative, 0, // or use scaleFillNative 
        0, scaleFitNative,
        x,
        y
    )

    return {
        canvas,
        nativeWidth,
        nativeHeight
    }
}


const FULL_CIRCLE = Math.PI * 2

/**
 * 
 * @param {number} aX X cordinate of point a
 * @param {number} aY Y cordinate of point a
 * @param {number} bX X cordinate of point b
 * @param {number} bY Y cordinate of point b
 * @returns {number} The distance between point 1 and 2
 */
function distanceBetweenCoordinates(aX, aY, bX, bY) {
    let xDistance = bX - aX
    let yDistance = bY - aY

    return Math.sqrt(xDistance ** 2 + yDistance ** 2)
}

/**
 @typedef Point2D
 @type {Object}
 @property {number} x The x coordinate.
 @property {number} y The y coordinate.
 */

/**
 * 
 * @param {Point2D} a Object a representing a point
 * @param {Point2D} b Object b representing a point
 * @returns {number} The distance between point a and b
 */
function distanceBetweenObjects(a, b) {
    let xDistance = b.x - a.x
    let yDistance = b.y - a.y

    return Math.sqrt(xDistance ** 2 + yDistance ** 2)
}

function distance(...args) {
    if (args.length == 4) {
        return distanceBetweenCoordinates(...args)
    } else if (args.length == 2) {
        return distanceBetweenObjects(...args)
    }
    throw "ERROR: Pass 4 numbers for cordinates or 2 objects with x,y props"
}

const degreesToRadians = (degrees) => degrees * Math.PI / 180
const radiansToDegrees = (radians) => radians * 180 / Math.PI


function logger(...args) {
    // if (window.DEBUGGER) {
    //     console.log(...args)
    //     debugger
    // }
    if (window.LOGGER) {
        console.log(...args)
    }
}
/**
 * 
 * @param {string} str The texto convert
 */
function textToIndex(str) {
    return str.toUpperCase().charCodeAt(0) - 46
}

function textToIndexes(str) {
    return str.split("").map(textToIndex)
}

function drawText(canvas, str, x, y, scale = 1, textSpritesheet = "text_spritesheet.png") {
    let img = new Image()
    img.src = textSpritesheet
    let ctx = canvas.getContext("2d")
    ctx.save()
    ctx.scale(scale, scale)

    let indexes = textToIndexes(str)
    for (let i = 0; i < indexes.length; i++) {
        const letterIndex = indexes[i]
        ctx.drawImage(img, letterIndex * 16, 0, 16, 16, x + (16 * i), y / scale, 16, 16)
    }
    ctx.restore()
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000)
    var seconds = ((millis % 60000) / 1000).toFixed(0)
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map