
// Définition de la classe Button en haut du fichier
import Character from '../Character.js';
import Faction, { printFactions } from '../Faction.js';
import gameState from '../gameState.js';
import Button from '../Button.js';
import  nextDay  from '../nextDay.js';
import {printCharacters} from '../Character.js';
import {printValues} from '../economy.js';
import {increaseValue} from '../economy.js';
import Door from '../Door.js';
import Event from '../Event.js';
import Chat from '../chat.js';




class UI extends Phaser.GameObjects.Container {
    constructor(scene, x, y, bgKey='basic_UI',hoverKey = 'long_UI', logoKey, callback = console.log("button pressed")) {
        super(scene, x, y);

        this.scene = scene;

        this.bg = scene.add.image(0, 0, bgKey)
        this.logo = scene.add.image(0, 0, logoKey)

        this.add([this.bg, this.logo]);

        this.setSize(this.bg.width, this.bg.height);
        this.setInteractive({ useHandCursor: true});

        this.click = true

        this.on('pointerover', () => {

            

           
            
            
        
            
    });
        this.on('pointerout', () => {
            
            
           
        });
        this.on('pointerdown', () => {
            console.log(gameState.jour)
            if (this.click){
this.bg.setOrigin(0.11,0.5)
            this.bg.setTexture(hoverKey)
            //this.setSize(this.bg.width, this.bg.height);
            this.click = false
            }
            else {
this.bg.setTexture(bgKey)
            this.bg.setOrigin(0.5,0.5)
            //this.setSize(this.bg.width, this.bg.height);
            this.click = true
            }
        });

        scene.add.existing(this);
    }
}



export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    
    

    preload() {

    this.load.spritesheet('doorsheet', 'assets/door_spritesheet.png', {
    frameWidth: 48,
    frameHeight: 32
  });

  this.load.spritesheet('candlesheet', 'assets/candle_spritesheet.png', {
    frameWidth: 32,
    frameHeight: 32
  });
        

         this.load.spritesheet('lustresheet', 'assets/lustre_spritesheet.png', {
    frameWidth: 64,
    frameHeight: 64
  });

   this.load.spritesheet('basepnjsheet', 'assets/basepnj_spritesheet.png', {
    frameWidth: 32,
    frameHeight: 32
  });


        this.load.bitmapFont('okok', 'assets/fonts/okok_0.png', 'assets/fonts/okok.fnt');
        this.load.bitmapFont('ghotic', 'assets/fonts/ghotic_0.png', 'assets/fonts/ghotic.fnt');
        this.load.bitmapFont('senior', 'assets/fonts/senior_0.png', 'assets/fonts/senior.fnt');

        

        this.load.image('joursuivant_rest', 'assets/UI/buttons/button_rest.png');
        this.load.image('joursuivant_hover', 'assets/UI/buttons/button_hover.png');
        this.load.image('joursuivant_pressed', 'assets/UI/buttons/button_pressed.png');

        this.load.image('day_rest', 'assets/UI/buttons/BaseState.png');
        this.load.image('day_hover', 'assets/UI/buttons/hoverState.png');
        this.load.image('day_pressed', 'assets/UI/buttons/pressedState.png');

        this.load.image('castle_bg', 'assets/33daysCroquisReaelest.png'); 
        this.load.image('king', 'assets/spriteSheetKing.png');

        //UI 
        this.load.image('laws_UI', 'assets/UI/laws_UI.png');
        this.load.image('economy_UI', 'assets/UI/gold_UI.png');
        this.load.image('diplomacy_UI', 'assets/UI/diplomacy_UI.png');
        this.load.image('court_UI', 'assets/UI/court_UI.png');
        this.load.image('setting_UI', 'assets/UI/setting_UI.png');

        //UI Background
        this.load.image('basic_UI', 'assets/UI/basic_UI.png');
        this.load.image('long_UI', 'assets/UI/long_UI.png');
        this.load.image('long_vertical_UI', 'assets/UI/long_vertical_UI.png');
    
      
    }

    create() {

      Door.registerAnimations(this);
      const door = new Door(this, 285, 126);
      
    

  this.anims.create({
    key: 'light_candle',
    frames: this.anims.generateFrameNumbers('candlesheet', { start: 0, end: 3 }),
    frameRate: 0.5,
    repeat: -1
  });
  this.anims.create({
    key: 'light_candle_alt',
    frames: this.anims.generateFrameNumbers('candlesheet', { start: 2, end: 0 }),
    frameRate: 0.5,
    repeat: -1
  });

  this.anims.create({
    key: 'light_lustre',
    frames: this.anims.generateFrameNumbers('lustresheet', { start: 0, end: 3 }),
    frameRate: 0.5,
    repeat: -1
  });

  this.anims.create({
    key: 'move_pnj',
    frames: this.anims.generateFrameNumbers('basepnjsheet', { start: 0, end: 6 }),
    frameRate: 5,
    repeat: -1
  });

  // Création du sprite
  
  const candle1 = this.add.sprite(64, 113, 'candlesheet',0)
  const candle2 = this.add.sprite(112, 113, 'candlesheet',0)
  const candle3 = this.add.sprite(162, 113, 'candlesheet',0)
  const candle4 = this.add.sprite(210, 113, 'candlesheet',0)
  const lustre = this.add.sprite(140, 30, 'lustresheet',0)

  
  

  candle1.play('light_candle');
  candle2.play('light_candle_alt');
  candle3.play('light_candle');
  candle4.play('light_candle_alt');
  lustre.play('light_lustre');

  
 
     this.dayText = this.add.bitmapText(236, 6, 'okok', 'J:1', 16).setDepth(1).setTint(0x000000);

    // bouton qui met à jour l'affichage du jour
    let showDay = new Button(this, 224, 2, 'day_rest', 'day_hover', 'day_pressed', () => {
        console.log("Jour actuel :", gameState.jour);
        this.dayText.setText('J:' + gameState.jour);
    }).setDepth(0);


        let dayButton = new Button(this, 2, 2, 'joursuivant_rest', 'joursuivant_hover', 'joursuivant_pressed', () => 
            {nextDay(gameState);
            this.dayText.setText('J:' + gameState.jour);
             
             
        });
        let tempButtona = new Button(this, 46, 2, 'joursuivant_rest', 'joursuivant_hover', 'joursuivant_pressed', () => { printCharacters(gameState.personnages);  
            door.open();
        });
        let tempButtonb = new Button(this, 90, 2, 'joursuivant_rest', 'joursuivant_hover', 'joursuivant_pressed', () => {printFactions(gameState.factions);
          door.close();
        });
        let tempButtonc = new Button(this, 134, 2, 'joursuivant_rest', 'joursuivant_hover', 'joursuivant_pressed', () => {printValues(gameState)});
         let tempButtond = new Button(this, 178, 2, 'joursuivant_rest', 'joursuivant_hover', 'joursuivant_pressed', () => {gameState.economie.nourriture = increaseValue(gameState.economie.nourriture, 1);
          eventoh.playEvent();
         });
        let bg = this.add.image(0, 0, 'castle_bg').setOrigin(0, 0);
        this.add.image(137, 120, 'king');

    this.button_economy = new UI(this, 12, 45, 'basic_UI','long_UI', 'economy_UI', () => {console.log("Bouton 1 cliqué !");
      
    }
  ); 
    this.button_laws = new UI(this, 12, 67, 'basic_UI','long_UI', 'laws_UI', () => {console.log("Bouton 1 cliqué !");
      door.close();
    }); 
    this.button_diplomacy = new UI(this, 12, 89, 'basic_UI','long_UI', 'diplomacy_UI', () => console.log("Bouton 1 cliqué !")); 
    this.button_court = new UI(this, 12, 111, 'basic_UI','long_UI', 'court_UI', () => console.log("Bouton 1 cliqué !")); 
    this.button_economy = new UI(this, 305, 12, 'basic_UI','long_UI', 'setting_UI', () => console.log("Bouton 1 cliqué !")); 



        bg.setScale(
    this.scale.width / bg.width,
    this.scale.height / bg.height
    
  );
  bg.setDepth(-1);

    gameState.personnages.push(new Character('Edmond de Virebois',"noblesse" , ['diplomate']));
       gameState.personnages.push(new Character('Pierre', "peuple", ['assassin', 'loyal']));
       gameState.personnages.push(new Character('Légat Marnus', "clergé", ['influenceuse']));
       gameState.personnages.push(new Character('Chancelier Lucien', "cour", ['influenceuse']));
       gameState.personnages.push(new Character('Khan Murad', "tarska", ['influenceuse']));
       
      
       gameState.personnages.push(new Character('maric Dorne', "calden", ['influenceuse']));
       gameState.personnages.push(new Character('Perceval de Hautecine', "elsden", ['influenceuse']));

    Faction.findByName(gameState.factions, 'peuple').assignLeader(Character.findByName(gameState.personnages, 'Pierre'));
    Faction.findByName(gameState.factions, 'noblesse').assignLeader(Character.findByName(gameState.personnages, 'Edmond de Virebois'));
    Faction.findByName(gameState.factions, 'clergé').assignLeader(Character.findByName(gameState.personnages, 'Légat Marnus'));
    Faction.findByName(gameState.factions, 'cour').assignLeader(Character.findByName(gameState.personnages, 'Chancelier Lucien'));
    Faction.findByName(gameState.factions, 'tarska').assignLeader(Character.findByName(gameState.personnages, 'Khan Murad'));
    Faction.findByName(gameState.factions, 'calden').assignLeader(Character.findByName(gameState.personnages, 'maric Dorne'));
    Faction.findByName(gameState.factions, 'elsden').assignLeader(Character.findByName(gameState.personnages, 'Perceval de Hautecine'));
        
    const eventoh = new Event(Character.findByName(gameState.personnages, 'Pierre'),
    {
        dialogues: [
            "Le peuple gronde dans les rues...",
            "Des rumeurs de révolte se propagent parmi le peuple.",
            "Les citoyens réclament justice et équité."
        ]
    },
    door
);
        

this.text = new Chat(this, "Bienvenue, mon roi. \nQue vos decisions soient\nsages et justes pour le royaume.");
this.text.showMessage();

 const uiText = this.add.bitmapText(140, 10, 'senior', 'Texte net et lisible', 8)
        .setOrigin(0.5, 0) // centre horizontalement
        .setDepth(10);
        

      
    }
    

    update() {
        
    }

    
    
}

