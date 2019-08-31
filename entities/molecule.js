import { Sprite } from "./sprite";
import { degreesToRadians, distance, MoleculeType } from "../lib/utils";


function Molecule(sprite, dx, dy, type, radius) {
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
    const ctx = molecule.state.canvas.getContext("2d")
    ctx.save()
    ctx.imageSmoothingEnabled = false

    const { x, y, innerRotation, type } = molecule
    let width
    let height
    if (molecule.type == MoleculeType.METHANE || MoleculeType.DIOXIDE) {
        width = 32
        height = 32
    } else {
        width = 16
        height = 16
    }
    const centerX = x + 0.5 * width // x of shape center
    const centerY = y + 0.5 * height // y of shape center
    const tileSize = 16
    const padding = 2
    const halfPadding = padding / 2

    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((Math.PI / 180) * innerRotation)
    ctx.translate(-centerX, -centerY)
    if (molecule.alive) {
        switch (type) {
            case MoleculeType.METHANE:
                // void ctx.drawImage(image,    sxMolculeType.DIOXIDE   sWidth,     sHeight,    dx,     dy,     dWidth,     dHeight);
                ctx.drawImage(molecule.img, 5 * tileSize, 0, tileSize, tileSize, x + halfPadding, y + halfPadding, tileSize, tileSize) // Left top side
                ctx.drawImage(molecule.img, 6 * tileSize, 0, tileSize, tileSize, x + tileSize - halfPadding, y + halfPadding, tileSize, tileSize) // Right top side
                ctx.drawImage(molecule.img, 7 * tileSize, 0, tileSize, tileSize, x + halfPadding, y + tileSize - halfPadding, tileSize, tileSize) // Left bottom side
                ctx.drawImage(molecule.img, 8 * tileSize, 0, tileSize, tileSize, x + tileSize - halfPadding, y + tileSize - halfPadding, tileSize, tileSize) // Left bottom side
                break;
            case MoleculeType.DIOXIDE:
                ctx.drawImage(molecule.img, 9 * tileSize, 0, tileSize, tileSize, x + halfPadding, y + halfPadding, tileSize, tileSize) // Left top side
                ctx.drawImage(molecule.img, 10 * tileSize, 0, tileSize, tileSize, x + tileSize - halfPadding, y + halfPadding, tileSize, tileSize) // Right top side
                ctx.drawImage(molecule.img, 11 * tileSize, 0, tileSize, tileSize, x + halfPadding, y + tileSize - halfPadding, tileSize, tileSize) // Left bottom side
                ctx.drawImage(molecule.img, 12 * tileSize, 0, tileSize, tileSize, x + tileSize - halfPadding, y + tileSize - halfPadding, tileSize, tileSize) // Left bottom side
                break;
            case MoleculeType.CARBON:
                ctx.drawImage(molecule.img, 1 * tileSize, 0, tileSize, tileSize, x, y, tileSize, tileSize) // Left top side
                break;
            case MoleculeType.HYDROGEN:
                ctx.drawImage(molecule.img, 4 * tileSize, 0, tileSize, tileSize, x, y, tileSize, tileSize) // Left top side
                break;
            case MoleculeType.OXYGEN:
                ctx.drawImage(molecule.img, 2 * tileSize, 0, tileSize, tileSize, x, y, tileSize, tileSize) // Left top side
                break;
        }
    }

    ctx.restore()
}

function updateMolecule(molecule) {
    // if (!molecule.alive) {
    //     return
    // }
    const { state } = molecule

    molecule.state.bullets.forEach(bullet => {
        const type = molecule.type
        if (molecule.alive) {
            if (distance(molecule, bullet) <= molecule.radius * 2 && type == MoleculeType.METHANE) {
                bullet.alive = false
                molecule.alive = false

                const sprite = Sprite(state, molecule.x, molecule.y)
                state.molecules.push(Molecule(sprite, 1, 1, MoleculeType.DIOXIDE, 11))
                state.molecules.push(Molecule(sprite, 1, 1, MoleculeType.HYDROGEN, 7))


            } else if (distance(molecule, bullet) <= molecule.radius && type == MoleculeType.DIOXIDE) {
                bullet.alive = false
                molecule.alive = false

                const sprite = Sprite(state, molecule.x, molecule.y)

                state.molecules.push(Molecule(sprite, 1, 1, MoleculeType.CARBON, 7))
                state.molecules.push(Molecule(sprite, 1, 1, MoleculeType.OXYGEN, 7))
                state.molecules.push(Molecule(sprite, 1, 1, MoleculeType.OXYGEN, 7))

            } else if (distance(molecule, bullet) <= molecule.radius * 2 && type == MoleculeType.CARBON) {
                bullet.alive = false
                molecule.alive = false
                bullet.x = -10
                bullet.y = -10
            }
        }
    })



    molecule.innerRotation -= 2

    molecule.x += Math.cos(degreesToRadians(molecule.rotation)) * (molecule.dx * 1)
    molecule.y += Math.sin(degreesToRadians(molecule.rotation)) * (molecule.dy * 1)

    if (molecule.x >= state.nativeWidth - 32) {
        molecule.x = state.nativeWidth - 32
        molecule.dx *= -1
    }

    if (molecule.x <= 0) {
        molecule.x = 0
        molecule.dx *= -1
    }

    if (molecule.y >= state.nativeHeight - 32) {
        molecule.y = state.nativeHeight - 32
        molecule.dy *= -1
    }

    if (molecule.y <= 0) {
        molecule.y = 0
        molecule.dy *= -1
    }
}

export function updateMolecules(molecules) {


    let _molecules = molecules.filter((bullet) => bullet.alive)
    for (let i = 0; i < _molecules.length; i++) {
        const molecule = _molecules[i];
        updateMolecule(molecule)
    }
    molecules = _molecules
}

export function drawMolecules(molecules) {
    molecules.forEach(molecule => {
        drawMolecule(molecule)
    });
}

export function makeMolecules(state, numOfMolecules) {
    for (let i = 0; i < numOfMolecules; i++) {
        const sprite = Sprite(state, Math.random() * state.nativeWidth, Math.random() * state.nativeHeight)

        const type = Math.random() >= 0.5 ? MoleculeType.METHANE : MoleculeType.DIOXIDE
        state.molecules.push(
            Molecule(
                sprite,
                1,
                1,
                type,
                type == MoleculeType.METHANE ? 13 : 11
            )
        )
    }
}
