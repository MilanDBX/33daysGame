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
        scene.add.existing(this).setOrigin(0, 0).setScale(2);;

        // Ajouter le texte ou icône au-dessus du bouton
        if (interior) {
            this.interior = interior;

            // Ajouter à la scène si ce n'est pas déjà fait
            this.interior = scene.add.image(
          x + this.width / 2 - 2,
          y + this.height / 2 - 4,
          interior
        ).setOrigin(0).setDepth(this.depth + 1).setScale(2);
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