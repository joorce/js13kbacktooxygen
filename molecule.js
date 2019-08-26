import {
    degreesToRadians,
    distance
} from "./utils";

import {
    makeSprite
} from "./sprite";

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
        if (distance(molecule, bullet) <= 16) {
            molecule.alive = false
        }
    })


    molecule.innerRotation -= 2

    molecule.x += Math.cos(degreesToRadians(molecule.rotation)) * (molecule.dx * 1)
    molecule.y += Math.sin(degreesToRadians(molecule.rotation)) * (molecule.dy * 1)

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

export function updateMolecules(molecules) {
    molecules.forEach(molecule => {
        updateMolecule(molecule)
    });
}

export function drawMolecules(molecules) {
    molecules.forEach(molecule => {
        drawMolecule(molecule)
    });
}

export function makeMolecules(state, numOfMolecules) {
    for (let i = 0; i < numOfMolecules; i++) {
        const sprite = makeSprite(state, Math.random() * state.nativeWidth, Math.random() * state.nativeHeight, "spritesheet.png")

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
