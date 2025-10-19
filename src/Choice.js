import Button from "./Button.js";

export default class Choice extends Phaser.GameObjects.Container {
    constructor(promtS,p1,p2,c1,c2){
        this.prompt = promptS
        this.p1 = p1
        this.p2 = p2
        this.c1 = c1
        this.c2 = c2
    }
}