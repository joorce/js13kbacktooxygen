import { drawText } from "../lib/utils";

export function ImpulseBar(sprite, impulse, maxImpulse) {
    return {
        ...sprite,
        impulse,
        maxImpulse
    }
}

export function drawImpulseBar(impulseBar) {
    const ctx = impulseBar.state.canvas.getContext("2d")
    ctx.save()
    ctx.imageSmoothingEnabled = false

    const {
        x,
        y
    } = impulseBar

    ctx.save()
    ctx.drawImage(impulseBar.img, 24, 0, 1, 16, x, y, 100, 16)
    ctx.drawImage(impulseBar.img, 54, 0, 1, 16, x, y, (impulseBar.state.impulse * 100) / impulseBar.state.maxImpulse, 16)
    drawText(impulseBar.state.canvas, "impulse", x + 408, y + 4, 0.5)
    ctx.restore()
}
