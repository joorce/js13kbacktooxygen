import {
    Entity
} from "./Entity";
import {
    degreesToRadians
} from "./utils";

export class Ship extends Entity {
    constructor(config, x, y, dx, dy, radius) {
        super(config, x, y, dx, dy, radius)
        this.rotation = degreesToRadians(90)
    }

    update() {

    }

    draw() {
        this.c.strokeStyle = "red"
        this.c.beginPath();
        // draw a triangle
        this.c.moveTo(75, 50);
        this.c.lineTo(100, 75);
        this.c.lineTo(100, 25);


        this.c.closePath();
        this.c.stroke();
    }
}
