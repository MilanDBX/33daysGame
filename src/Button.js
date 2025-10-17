export default class Button extends Phaser.GameObjects.Sprite {
    /**
     * scene : la scène Phaser
     * x, y : position du bouton
     * keyUp : texture pour l'état normal
     * keyHover : texture pour l'état hover
     * keyDown : texture pour l'état pressé
     * callback : fonction au clic
     * interior : texte ou icône à placer sur le bouton (optionnel)
     */
    constructor(scene, x, y, keyUp, keyHover, keyDown, callback, interior = null) {
        super(scene, x, y, keyUp);
        this.scene = scene;
        this.callback = callback;

        this.setInteractive({ useHandCursor: true });
        scene.add.existing(this).setOrigin(0, 0);

        // Ajouter le texte ou icône au-dessus du bouton
        if (interior) {
            this.interior = interior;

            // Ajouter à la scène si ce n'est pas déjà fait
            if (!interior.scene) scene.add.existing(interior);

            // Centrer l'intérieur sur le bouton
            this.interior.setOrigin(0.5);
            this.interior.x = this.x + this.width / 2;
            this.interior.y = this.y + this.height / 2;
        }

        // Événements du bouton
        this.on('pointerover', () => this.setTexture(keyHover));
        this.on('pointerout', () => this.setTexture(keyUp));
        this.on('pointerdown', () => this.setTexture(keyDown));
        this.on('pointerup', () => {
            this.setTexture(keyHover);
            if (this.callback) this.callback();
        });
    }

    // Méthode pour mettre à jour le texte si c'est un texte
    setText(newText) {
        if (this.interior && this.interior.setText) this.interior.setText(newText);
    }
}