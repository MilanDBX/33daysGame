export default class Event {
    constructor(character, eventData) {
        this.character = character;
        this.eventData = eventData;
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