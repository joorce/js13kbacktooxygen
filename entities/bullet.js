import { degreesToRadians } from "../lib/utils";

export function Bullet(sprite, dx, dy, rotation) {
    const alive = true
    return {
        ...sprite,
        rotation,
        dx,
        dy,
        alive
    }
}

export function drawBullet(bullet) {
    if (!bullet.alive) {
        return
    }
    const ctx = bullet.state.canvas.getContext("2d")
    ctx.save()
    ctx.imageSmoothingEnabled = false

    const {
        x,
        y,
        rotation
    } = bullet

    const width = 3
    const height = 3
    const centerX = x + 0.5 * width // x of shape center
    const centerY = y + 0.5 * height // y of shape center

    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((Math.PI / 180) * rotation)
    ctx.translate(-centerX, -centerY)
    ctx.drawImage(bullet.img, 24, 0, 1, 16, x, y, 8, 3)
    ctx.restore()
}

export function drawBullets(bullets) {
    bullets.forEach(bullet => {
        drawBullet(bullet)
    })
}

export function updateBullet(bullet) {
    if (!bullet.alive) {
        return
    }
    // console.log(bullet)
    bullet.x +=
        Math.cos(degreesToRadians(bullet.rotation)) * (bullet.dx * bullet.state.maxImpulse + 1)
    bullet.y +=
        Math.sin(degreesToRadians(bullet.rotation)) * (bullet.dy * bullet.state.maxImpulse + 1)

    if (bullet.x >= bullet.state.nativeWidth - 8) {
        bullet.x = bullet.state.nativeWidth - 8
        bullet.alive = false
    }

    if (bullet.x <= 0) {
        bullet.x = 0
        bullet.alive = false
    }

    if (bullet.y >= bullet.state.nativeHeight - 8) {
        bullet.y = bullet.state.nativeHeight - 8
        bullet.alive = false

    }

    if (bullet.y <= 0) {
        bullet.y = 0
        bullet.alive = false
    }
}

export function updateBullets(bullets) {
    let _bullets = bullets.filter((bullet) => bullet.alive)
    for (let i = 0; i < _bullets.length; i++) {
        const bullet = _bullets[i];
        updateBullet(bullet)
    }
    bullets = _bullets


}
