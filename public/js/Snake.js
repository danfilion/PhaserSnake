
export default class Snake {
    constructor(scene) {
        this.scene = scene;
        this.lastMoveTime = 0;
        this.moveInterval = 500;
        this.direction = Phaser.Math.Vector2.RIGHT;
        this.body = [];
        this.body.push(this.scene.add.rectangle(10,10,16,16,0xff0000)); //.setOrigin(0);

        scene.input.keyboard.on('keydown', e => {
            this.keydown(e)
        });
    }

    keydown(event) {
        console.log(event);
        switch (event.keyCode) {
            case 37: //Left
                this.direction = Phaser.Math.Vector2.LEFT;
                break;
            case 38: //Up
                this.direction = Phaser.Math.Vector2.UP;
                break;
            case 39: //Right
                this.direction = Phaser.Math.Vector2.RIGHT;
                break;
            case 40: //Down
                this.direction = Phaser.Math.Vector2.DOWN;
                break;
            
        }
    }

    update (time) {
        if (time >= this.lastMoveTime + this.moveInterval) {
            this.lastMoveTime = time;
            this.move();
        }
    }

    move() {
        this.body[0].x += this.direction.x * 16;
        this.body[0].y += this.direction.y * 16;
        console.log(this.direction);
    }
}