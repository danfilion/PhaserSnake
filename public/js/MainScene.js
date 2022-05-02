import Snake from './Snake.js'

export class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    create() {
        this.Snake = new Snake(this);
    }

    update(time) {
        //console.log('update');
        this.Snake.update(time);
    }
}