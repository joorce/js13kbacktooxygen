import { drawText } from "../lib/utils";

export function OxygenBar(sprite, current, goal) {
    return {
        ...sprite,
        current,
        goal
    }
}

export function drawOxygenBar(oxygenBar) {
    const ctx = oxygenBar.state.canvas.getContext("2d")
    ctx.save()
    ctx.imageSmoothingEnabled = false

    const {
        x,
        y
    } = oxygenBar

    ctx.save()
    ctx.drawImage(oxygenBar.img, 24, 0, 1, 16, x, y, 100, 16)
    ctx.drawImage(oxygenBar.img, 38, 0, 1, 16, x, y, (oxygenBar.state.oxygenCurrent * 100) / oxygenBar.state.oxygenGoal, 16)
    drawText(oxygenBar.state.canvas, "oxygen", x + 220, y + 4, 0.5)
    ctx.restore()
}
