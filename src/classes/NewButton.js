export default class Button extends Phaser.GameObjects.Sprite {
    /**
     * scene : la scène Phaser
     * x, y : position du bouton
     * texture : spritesheet
     * frameUp : frame état normal
     * frameHover : frame hover
     * frameDown : frame pressé
     * callback : fonction au clic
     * interior : texte ou icône (optionnel)
     */
    constructor(scene, x, y, texture, frameUp, frameHover, frameDown, callback, interior = null) {

        super(scene, x, y, texture, frameUp);

        this.scene = scene;
        this.callback = callback;

        this.frameUp = frameUp;
        this.frameHover = frameHover;
        this.frameDown = frameDown;

        this.setInteractive({ useHandCursor: true });
        scene.add.existing(this).setOrigin(0, 0).setScale(2);

        // Ajouter le texte ou icône au-dessus du bouton
        if (interior) {

            this.interior = scene.add.image(
                x + this.width / 2 - 2,
                y + this.height / 2 - 4,
                interior
            )
            .setOrigin(0)
            .setDepth(this.depth + 1)
            .setScale(2);
        }

        // Événements du bouton
        this.on('pointerover', () => this.setFrame(this.frameHover));
        this.on('pointerout', () => this.setFrame(this.frameUp));
        this.on('pointerdown', () => this.setFrame(this.frameDown));

        this.on('pointerup', () => {
            this.setFrame(this.frameHover);
            if (this.callback) this.callback();
        });
    }

    setText(newText) {
        if (this.interior && this.interior.setText) {
            this.interior.setText(newText);
        }
    }
}