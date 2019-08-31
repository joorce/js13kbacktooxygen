import { degreesToRadians, distance, MoleculeType } from "../lib/utils";

export function Player(sprite, dx, dy, turnLeft = false, turnRight = false) {
    return {
        ...sprite,
        dx,
        dy,
        turnLeft,
        turnRight,
        alive: true
    }
}

export function updatePlayer(player) {
    if (!player.alive) {
        return
    }

    player.state.molecules.forEach(molecule => {
        if (molecule.alive) {
            if (molecule.type == MoleculeType.METHANE && distance(player, molecule) <= molecule.radius * 1.5) {
                player.alive = false
            }
            if (molecule.type == MoleculeType.DIOXIDE && distance(player, molecule) <= molecule.radius * 1.8) {
                player.alive = false
            }
            if (molecule.type == MoleculeType.CARBON && distance(player, molecule) <= molecule.radius) {
                player.alive = false
            }
            if (molecule.type == MoleculeType.HYDROGEN && distance(player, molecule) <= molecule.radius * 2) {
                player.alive = false
            }
            if (molecule.type == MoleculeType.OXYGEN && distance(player, molecule) <= molecule.radius * 2) {
                molecule.alive = false
                player.state.oxygenCurrent++
            }
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
        Math.cos(degreesToRadians(player.rotation)) * (player.dx * player.state.impulse)
    player.y +=
        Math.sin(degreesToRadians(player.rotation)) * (player.dy * player.state.impulse)

    if (player.x >= player.state.nativeWidth - 16) {
        player.x = player.state.nativeWidth - 16
    }

    if (player.x <= 0) {
        player.x = 0
    }

    if (player.y >= player.state.nativeHeight - 16) {
        player.y = player.state.nativeHeight - 16
    }

    if (player.y <= 0) {
        player.y = 0
    }
}

export function drawPlayer(player) {
    if (!player.alive) {
        return
    }
    const ctx = player.state.canvas.getContext("2d")
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
