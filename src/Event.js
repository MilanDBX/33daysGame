import Door from './Door.js';

export default class Event {

    
    preload() {
  this.load.spritesheet('basepnjsheet', 'assets/basepnj_spritesheet.png', {
    frameWidth: 32,
    frameHeight: 32
  });
}
    constructor(character, eventData,door) {
        this.door = door;
        this.character = character;
        this.eventData = eventData;
        this.scene = door.scene;
    }

    playEvent(){
        this.door.open();
        
         this.scene.time.delayedCall(200, () => {
        this.basepnj = this.scene.add.sprite(284, 126, this.character.spriteSheet,0)
        this.basepnj.scaleX = -1;
        this.basepnj.play('move_pnj');

      this.scene.tweens.add({
    targets: this.basepnj,
    x: 235,       // destination
    duration: 2000, // en ms
    ease: 'Linear', // type d’animation
    yoyo: false,     // revient à la position initiale
    repeat: 0 ,
    onComplete: () => {
        
        this.basepnj.stop();      // arrêter l'animation
        this.basepnj.setFrame(0); // revenir à la frame de repos
    }
    
});
 
    });
       
        
        
        this.scene.time.delayedCall(1000, () => {
      this.door.close();
    });



    
    console.log("Event played");
        
    }

    playDialogue() {
        return this.eventData.dialogues[Math.floor(Math.random() * this.eventData.dialogues.length)];
    }

    applyEffects() {
        if (this.eventData.effects) {
            // Appliquer les effets sur les stats
            if (this.eventData.effects.stats) {
                Object.entries(this.eventData.effects.stats).forEach(([stat, value]) => {
                    this.character[stat] += value;
                });
            }
            
            // Gérer l'inventaire
            if (this.eventData.effects.inventory) {
                if (this.eventData.effects.inventory.add) {
                    this.character.addToInventory(this.eventData.effects.inventory.item);
                }
            }
        }
    }

    playAnimations() {
        return this.eventData.animations;
    }

    getSound() {
        return this.eventData.sound;
    }
}

export function triggerEvent(gameState, event) {
    // Jouer le dialogue
    const dialogue = event.playDialogue();
    gameState.displayDialogue(dialogue);

    // Appliquer les effets
    event.applyEffects();

    // Jouer les animations
    const animations = event.playAnimations();
    if (animations) {
        Object.entries(animations).forEach(([target, animationName]) => {
            gameState.playAnimation(target, animationName);
        });
    }

    // Jouer le son
    const sound = event.getSound();
    if (sound) {
        gameState.playSound(sound);
    }
}