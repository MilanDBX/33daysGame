

export default class Door {
    
    static registerAnimations(scene) {
        if (!scene.anims.exists('open_door')) {
            scene.anims.create({
                key: 'open_door',
                frames: scene.anims.generateFrameNumbers('doorsheet', { start: 0, end: 3 }),
                frameRate: 20,
                repeat: 0
            });
            
        }
        if (!scene.anims.exists('close_door')) {
            scene.anims.create({
                key: 'close_door',
                frames: scene.anims.generateFrameNumbers('doorsheet', { start: 3, end: 0 }),
                frameRate: 20,
                repeat: 0
            });
            
        }
    }

    constructor(scene, x, y, key = 'doorsheet', frame = 0) {
        this.scene = scene;
        this.sprite = scene.add.sprite(x, y, key, frame);
    }

    open() {
        this.sprite.play('open_door');
        return new Promise(resolve => {
            const handler = (animation) => {
                if (animation.key === 'open_door') {
                    this.sprite.off('animationcomplete', handler);
                    resolve();
                }
            };
            this.sprite.on('animationcomplete', handler);
        });
        console.log("Animation 'open_door' jouée.");
    }

    close() {
        this.sprite.play('close_door');
        
        return new Promise(resolve => {
            const handler = (animation) => {
                if (animation.key === 'close_door') {
                    this.sprite.off('animationcomplete', handler);
                    resolve();
                }
            };
            this.sprite.on('animationcomplete', handler);
        });
         
    }

    // utilitaires si besoin
    setFrame(frame) { this.sprite.setFrame(frame); }
    destroy() { this.sprite.destroy(); }
}