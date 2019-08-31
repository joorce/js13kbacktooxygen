/**
 * 
 * @param {Object} state The state object 
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 * @param {string} filename The image filename.
 * @returns {Sprite} A Sprite object
 */
export function Sprite(state, x, y, filename = "spritesheet.png") {
    let img = new Image()
    img.src = `./assets/${filename}`
    let rotation = 0
    return {
        state,
        x,
        y,
        rotation,
        img
    }
}
