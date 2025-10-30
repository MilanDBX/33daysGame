export default class Chat{
    constructor(scene,message) {
        this.message = message;
        this.scene = scene;
0    }

 showMessage() 
 {
this.text = this.scene.add.bitmapText(330, 120, 'senior', this.message,  8).setDepth(1);

 }
}