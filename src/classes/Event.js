import Door from './Door.js';
import Chat from './Chat.js';
import { eventDatabase } from '../data/eventData.js';
import nextEvent from '../functions/nextEvent.js';
import gameState from '../data/gameState.js';




export default class Event {

    
    
    constructor(character, eventData,door) {
        this.door = door;
        this.character = character;
        this.interactable = eventData.interactable || false;
        

        if (typeof eventData === 'string') {
   this.eventData = eventDatabase[eventData];
}
else {
   this.eventData = eventData;
}

        this.scene = door.scene;
        this.message = this.eventData.dialogue;

       

this.cons1 = eventData.cons[0];
        //interaction part
        if (this.interactable) {
        this.cons2 = eventData.cons[1]
        this.constext1 = eventData.constext[0];
        this.constext2 = eventData.constext[1];
    }
  }
    playEvent() {
      gameState.running = true;
  this.door.open();

  // 1️⃣ Le PNJ apparaît et marche
  this.scene.time.delayedCall(200 * gameState.speed, () => {
    this.basepnj = this.scene.add.sprite(568, 252, this.character.spriteSheet, 0).setScale(2);
    this.basepnj.scaleX = -2;
    this.basepnj.play(this.character.spriteSheet);

    this.scene.tweens.add({
      targets: this.basepnj,
      x: 490,
      duration: 1800 * gameState.speed,
      ease: 'Linear',
      onComplete: () => {
        this.basepnj.stop();
        this.basepnj.setFrame(0);
      }
    });
  });

  this.scene.time.delayedCall(1000 * gameState.speed, () => {this.door.close();});



  // 2️⃣ Apparition de la bulle + texte
  this.scene.time.delayedCall(2200 * gameState.speed, () => {
    this.bubble = this.scene.add
      .sprite(370, 150, 'bubble_rest', 0)
      .setScale(2)
      .setAlpha(1)
      .setInteractive({ useHandCursor: true });
      
this.bubble.on('pointerover', () => {
    this.bubble.setTexture('bubble_hover'); // Remplace par la texture de hover
});
this.bubble.on('pointerout', () => {
    this.bubble.setTexture('bubble_rest');
});


    // Affiche le message
    this.text = new Chat(this.scene, this.message);
    this.text.showMessage();

    // 3️⃣ Quand on clique sur la bulle → on lance la suite
    this.bubble.on('pointerdown', () => {
      
      if (this.text.check()){
      
      this.nextPart();
      }
      else {
        this.text.destroyer();
        
        this.text.index++;
        
        this.text.showMessage();
      }
      
    });
  });

  console.log("Event played");
}


// 🧩 La suite de l’événement
nextPart() {
  // Supprime la bulle et le texte
  if (this.bubble) {
    this.bubble.destroy();
    this.bubble = null;
  }

  if (this.text) {
    this.text.destroyer();
  }


  

  // Le PNJ repart
  this.basepnj.scaleX = 2;
  this.basepnj.play(this.character.spriteSheet);

   this.scene.time.delayedCall(1100 * gameState.speed, () => {this.door.open();});
   this.scene.time.delayedCall(1720 * gameState.speed, () => {this.door.close();});

  this.scene.tweens.add({
    targets: this.basepnj,
    x: 575,
    duration: 1800 * gameState.speed,
    ease: 'Linear',
    onComplete: () => {
      this.basepnj.destroy();
      this.basepnj = null;

      this.scene.time.delayedCall(1000 * gameState.speed, () => {
        gameState.running = false;
        nextEvent(gameState);});
    }
  });

  // Porte qui s’ouvre et se referme
  
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

    stopEvent() {
    // Supprime le PNJ s'il existe
    if (this.basepnj) {
        this.basepnj.destroy();
        this.basepnj = null;
    }

    // Supprime la bulle si elle existe
    if (this.bubble) {
        this.bubble.destroy();
        this.bubble = null;
    }

    // Supprime le texte s'il existe
    if (this.text) {
        this.text.destroyer();
        this.text = null;
    }

    // Annule toutes les delayedCall en cours liés à cette scène
    this.scene.time.removeAllEvents();

    // Supprime les tweens actifs sur le PNJ si nécessaire
    this.scene.tweens.killTweensOf(this.basepnj);

    // Enlève les listeners liés à la bulle pour éviter les interactions après arrêt
    if (this.bubble && this.bubble.input) {
        this.bubble.removeAllListeners();
    }
gameState.running = false;
    console.log("Event stopped : ", this.eventData.id);
}

  
}



    
