
// Définition de la classe Button en haut du fichier
import Character from '../classes/Character.js';
import Faction, { printFactions } from '../classes/Faction.js';
import gameState from '../data/gameState.js';
import Button from '../classes/Button.js';
import  nextDay  from '../functions/nextDay.js';
import {printCharacters} from '../classes/Character.js';
import {printValues} from '../functions/economy.js';
import {increaseValue} from '../functions/economy.js';
import Door from '../classes/Door.js';
import Event from '../classes/Event.js';
import Chat from '../classes/Chat.js';
import EventHelper from '../data/eventData.js';




class UI extends Phaser.GameObjects.Container {

    constructor(scene, x, y, bgKey='basic_UI',hoverKey = 'long_UI', logoKey, callback = console.log("button pressed")) {
        super(scene, x, y);
        this.scene = scene;
        this.bg = scene.add.image(0, 0, bgKey).setScale(2);
        this.logo = scene.add.image(0, 0, logoKey).setScale(2);
        this.add([this.bg, this.logo]);
        this.setSize(this.bg.width, this.bg.height);
        this.setInteractive({ useHandCursor: true});
        this.click = true
       
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

//spitesheet preload

    this.load.spritesheet('doorsheet', 'assets/spritesheet/door_spritesheet.png', {
    frameWidth: 48,
    frameHeight: 32
  });
  this.load.spritesheet('candlesheet', 'assets/spritesheet/candle_spritesheet.png', {
    frameWidth: 32,
    frameHeight: 32
  });
         this.load.spritesheet('lustresheet', 'assets/spritesheet/lustre_spritesheet.png', {
    frameWidth: 64,
    frameHeight: 64
  });
   this.load.spritesheet('basepnjsheet', 'assets/spritesheet/basepnj_spritesheet.png', {
    frameWidth: 32,
    frameHeight: 32
  });
  this.load.spritesheet('secondpnjsheet', 'assets/spritesheet/secondpnj_spritesheet.png', {
    frameWidth: 32,
    frameHeight: 32
  });
  this.load.spritesheet('basepnjgirlsheet', 'assets/spritesheet/basepnj_girl_sheet.png', {
    frameWidth: 32,
    frameHeight: 32
  });
   this.load.spritesheet('messengersheet', 'assets/spritesheet/messenger_sheett.png', {
    frameWidth: 32,
    frameHeight: 32
  });
this.load.spritesheet('acceptsheet', 'assets/UI/uttons/button_accept_spritesheet.png', {
    frameWidth: 48,
    frameHeight: 32
  });
  

  //image preload


        this.load.bitmapFont('okok', 'assets/fonts/okok_0.png', 'assets/fonts/okok.fnt');
        this.load.bitmapFont('ghotic', 'assets/fonts/ghotic_0.png', 'assets/fonts/ghotic.fnt');
        this.load.bitmapFont('senior', 'assets/fonts/senior_0.png', 'assets/fonts/senior.fnt');

        

        this.load.image('joursuivant_rest', 'assets/UI/buttons/button_rest.png');
        this.load.image('joursuivant_hover', 'assets/UI/buttons/button_hover.png');
        this.load.image('joursuivant_pressed', 'assets/UI/buttons/button_pressed.png');

        this.load.image('day_rest', 'assets/UI/buttons/BaseState.png');
        this.load.image('day_hover', 'assets/UI/buttons/hoverState.png');
        this.load.image('day_pressed', 'assets/UI/buttons/pressedState.png');

        this.load.image('base_rest', 'assets/UI/buttons/Round_base_UI.png');
        this.load.image('base_hover', 'assets/UI/buttons/Round_hover_UI.png');
        this.load.image('base_pressed', 'assets/UI/buttons/Round_pressed_UI.png');

        this.load.image('castle_bg', 'assets/props/background33days.png'); 
        this.load.image('king', 'assets/spritesheet/spriteSheetKing.png');

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

        
    
        this.load.image('bubble_rest', 'assets/UI/bubble_UI_rest.png');
        this.load.image('bubble_hover', 'assets/UI/bubble_UI_hover.png');

        //cursor 
        this.load.image('cursor_base', 'assets/UI/cursor/base_cursor.png');
        this.load.image('cursor_rest', 'assets/UI/cursor/click_cursor.png');

        //font preload 

        this.load.bitmapFont('okok', 'assets/fonts/okok_0.png', 'assets/fonts/okok.fnt');
        this.load.bitmapFont('ghotic', 'assets/fonts/ghotic_0.png', 'assets/fonts/ghotic.fnt');
        this.load.bitmapFont('senior', 'assets/fonts/senior_0.png', 'assets/fonts/senior.fnt');
    }

    create() {

       


      Door.registerAnimations(this);
      const door = new Door(this, 570, 252);
      
    

  this.anims.create({
    key: 'light_candle',
    frames: this.anims.generateFrameNumbers('candlesheet', { start: 0, end: 3 }),
    frameRate: 0.5 * 1 / gameState.speed,
    repeat: -1
  });
  this.anims.create({
    key: 'light_candle_alt',
    frames: this.anims.generateFrameNumbers('candlesheet', { start: 2, end: 0 }),
    frameRate: 0.5 * 1 / gameState.speed,
    repeat: -1
  });

  this.anims.create({
    key: 'light_lustre',
    frames: this.anims.generateFrameNumbers('lustresheet', { start: 0, end: 3 }),
    frameRate: 0.5 * 1 / gameState.speed,
    repeat: -1
  });

  this.anims.create({
    key: 'basepnjsheet',
    frames: this.anims.generateFrameNumbers('basepnjsheet', { start: 0, end: 6 }),
    frameRate: 7.5 * 1 / gameState.speed,
    repeat: -1
  });

  this.anims.create({
    key: 'secondpnjsheet',
    frames: this.anims.generateFrameNumbers('secondpnjsheet', { start: 0, end: 6 }),
    frameRate: 7.5 * 1 / gameState.speed,
    repeat: -1
  });

  this.anims.create({
    key: 'basepnjgirlsheet',
    frames: this.anims.generateFrameNumbers('basepnjgirlsheet', { start: 0, end: 6 }),
    frameRate: 7.5 * 1 / gameState.speed,
    repeat: -1
  });

  this.anims.create({
    key: 'messengersheet',
    frames: this.anims.generateFrameNumbers('messengersheet', { start: 0, end: 6 }),
    frameRate: 7.5 * 1 / gameState.speed,
    repeat: -1
  });

  // Création du sprite
  
  const candle1 = this.add.sprite(128, 226, 'candlesheet',0).setScale(2);
  const candle2 = this.add.sprite(224, 226, 'candlesheet',0).setScale(2);
  const candle3 = this.add.sprite(324, 226, 'candlesheet',0).setScale(2);
  const candle4 = this.add.sprite(420, 226, 'candlesheet',0).setScale(2);
  const lustre = this.add.sprite(280, 60, 'lustresheet',0).setScale(2);

  

  
  

  candle1.play('light_candle');
  candle2.play('light_candle_alt');
  candle3.play('light_candle');
  candle4.play('light_candle_alt');
  lustre.play('light_lustre');

  //reglages souris 
  
  this.input.setDefaultCursor('url(assets/UI/cursor/base_cursor.png), pointer');
  this.input.mouse.disableContextMenu();





 
     this.dayText = this.add.bitmapText(527, 10, 'ghotic', 'j:1', 16).setDepth(1).setTint(0x000000).setScale(2);

    // bouton qui met à jour l'affichage du jour
    let showDay = new Button(this, 497, 1, 'day_rest', 'day_hover', 'day_pressed', () => {
        console.log("Jour actuel :", gameState.jour);
        this.dayText.setText('j: ' + gameState.jour);
    }).setDepth(0);


    let dayButton = new Button(this, 4, 4, 'joursuivant_rest', 'joursuivant_hover', 'joursuivant_pressed', () => 
            {nextDay(this,gameState, door);
            
    });

    let button_economy = new Button(this, 3, 57, 'base_rest', 'base_hover', 'base_pressed', () => {}, "economy_UI");
    let button_laws = new Button(this, 3, 103, 'base_rest', 'base_hover', 'base_pressed', () => {}, "laws_UI");
    let button_diplomacy = new Button(this, 3, 149, 'base_rest', 'base_hover', 'base_pressed', () => {}, "diplomacy_UI");
    let button_court = new Button(this, 3, 195, 'base_rest', 'base_hover', 'base_pressed', () => {}, "court_UI");

    let button_settings = new Button(this, 586, 1, 'base_rest', 'base_hover', 'base_pressed', () => {}, "setting_UI");

        /*
        let tempButtona = new Button(this, 92, 4, 'joursuivant_rest', 'joursuivant_hover', 'joursuivant_pressed', () => { printCharacters(gameState.personnages);  
            const eventuh = new Event(Character.getRandomCharacter(), EventHelper.getRandom(), door)
          eventuh.playEvent();
        });
        let tempButtonb = new Button(this, 180, 4, 'joursuivant_rest', 'joursuivant_hover', 'joursuivant_pressed', () => {printFactions(gameState.factions);
          
        });
        let tempButtonc = new Button(this, 268, 4, 'joursuivant_rest', 'joursuivant_hover', 'joursuivant_pressed', () => {printValues(gameState);
          
          
        });
         let tempButtond = new Button(this, 356, 4, 'joursuivant_rest', 'joursuivant_hover', 'joursuivant_pressed', () => {gameState.economie.nourriture = increaseValue(gameState.economie.nourriture, 1);
          eventoh.playEvent();
         });
         */

        let bg = this.add.image(0, 0, 'castle_bg').setOrigin(0, 0);
        this.add.image(274, 240, 'king').setScale(2);;
        
/*
    this.button_economy = new UI(this, 24, 90, 'basic_UI','long_UI', 'economy_UI', () => {console.log("Bouton 1 cliqué !");
      
    }
  ); 
    this.button_laws = new UI(this, 24, 134, 'basic_UI','long_UI', 'laws_UI', () => {console.log("Bouton 1 cliqué !");
      door.close();
    }); 
    this.button_diplomacy = new UI(this, 24, 178, 'basic_UI','long_UI', 'diplomacy_UI', () => console.log("Bouton 1 cliqué !")); 
    this.button_court = new UI(this, 24, 222, 'basic_UI','long_UI', 'court_UI', () => console.log("Bouton 1 cliqué !")); 
    this.button_economy = new UI(this, 610, 24, 'basic_UI','long_UI', 'setting_UI', () => console.log("Bouton 1 cliqué !")); 
*/


        bg.setScale(
    this.scale.width / bg.width,
    this.scale.height / bg.height
    
  );
  bg.setDepth(-1);

       gameState.personnages.push(new Character('Edmond de Virebois',"noblesse" , ['diplomate'],50,"secondpnjsheet"));
       gameState.personnages.push(new Character('Pierre', "peuple", ['assassin', 'loyal'],50,"basepnjsheet"));
       gameState.personnages.push(new Character('Légat Marnus', "clergé", ['influenceuse']));
       gameState.personnages.push(new Character('Chancelier Lucien', "cour", ['influenceuse'],50,"messengersheet"));
       gameState.personnages.push(new Character('Khan Murad', "tarska", ['influenceuse']));
       
      
       gameState.personnages.push(new Character('maric Dorne', "calden", ['influenceuse']));
       gameState.personnages.push(new Character('Charlotte De Vieuxpays', "elsden", ['influenceuse'],50,"basepnjgirlsheet"));

    Faction.findByName(gameState.factions, 'peuple').assignLeader(Character.findByName(gameState.personnages, 'Pierre'));
    Faction.findByName(gameState.factions, 'noblesse').assignLeader(Character.findByName(gameState.personnages, 'Edmond de Virebois'));
    Faction.findByName(gameState.factions, 'clergé').assignLeader(Character.findByName(gameState.personnages, 'Légat Marnus'));
    Faction.findByName(gameState.factions, 'cour').assignLeader(Character.findByName(gameState.personnages, 'Chancelier Lucien'));
    Faction.findByName(gameState.factions, 'tarska').assignLeader(Character.findByName(gameState.personnages, 'Khan Murad'));
    Faction.findByName(gameState.factions, 'calden').assignLeader(Character.findByName(gameState.personnages, 'maric Dorne'));
    Faction.findByName(gameState.factions, 'elsden').assignLeader(Character.findByName(gameState.personnages, 'Perceval de Hautecine'));
        
   

          nextDay(this,gameState, door);
            this.dayText.setText('j:' + gameState.jour);
        


//this.text.showMessage();




        
        
        

      
    }
    

    update() {
        
    }

    
    
}

