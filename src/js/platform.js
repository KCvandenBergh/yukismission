import { Actor, Engine, Vector, Physics, CollisionType } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
// import { Spacegun } from './spacegun';
import { Enemy } from "./enemy.js";


export class Platform extends Actor {

    constructor() {
        super({ width: 400, height: 50 })
        this.body.collisionType = CollisionType.Fixed
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Platform.toSprite());

        // composition  
        let enemy = new Enemy()
        this.addChild(enemy)

        // this.body.collider.type = 'fixed'; // Zorg ervoor dat het platform geen invloed heeft op de beweging van het personage
    }

    resetPosition() {
        this.pos = new Vector(500, 100)
    }
}