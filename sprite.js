/**
 * 
 * @param {Object} conf The conf object 
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 * @param {string} filename The image filename.
 * @returns {Sprite} A Sprite object
 */
export function Sprite(conf, x, y, filename) {
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
