export const MoleculeType = Object.freeze({
    METHANE: Symbol("methane"),
    DIOXIDE: Symbol("dioxine"),
    CARBON: Symbol("carbon"),
    OXYGEN: Symbol("oxygen"),
    HYDROGEN: Symbol("hydrogen"),
});

/**
 * @param {HTMLCanvasElement} canvas The canvas we are setting resolution for 
 * @param {number} nativeWidth The native with of the device
 * @param {number} nativeHeight The native height of the device
 */
export function setCanvasResolution(canvas, nativeWidth, nativeHeight) {
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


export const FULL_CIRCLE = Math.PI * 2

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

export function distance(...args) {
    if (args.length == 4) {
        return distanceBetweenCoordinates(...args)
    } else if (args.length == 2) {
        return distanceBetweenObjects(...args)
    }
    throw "ERROR: Pass 4 numbers for cordinates or 2 objects with x,y props"
}

export const degreesToRadians = (degrees) => degrees * Math.PI / 180
export const radiansToDegrees = (radians) => radians * 180 / Math.PI


export function logger(...args) {
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

export function drawText(canvas, str, x, y, scale = 1, textSpritesheet = "text_spritesheet.png") {
    let img = new Image()
    img.src = `./assets/${textSpritesheet}`
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

export function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000)
    var seconds = ((millis % 60000) / 1000).toFixed(0)
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
}
