
// Définition de la classe Button en haut du fichier
import Character from '../Character.js';
import Faction from '../Faction.js';


class Button extends Phaser.GameObjects.Container {
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

const gameState = {
    jour: 1,
    argent: 1000,
    lois: {},
    factions: [],
    personnages: [],
    scoreGuerre: {}, // par faction
    scoreAmitie: {}, // par faction
};

export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    
    

    preload() {


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
    
        //this.load.image('background', 'assets/33daysCroquisReal.png');
        
       // this.load.image('logo', 'assets/phaser.png');

        //  The ship sprite is CC0 from https://ansimuz.itch.io - check out his other work!
       // this.load.spritesheet('ship', 'assets/spaceship.png', { frameWidth: 176, frameHeight: 96 });
    }

    create() {
        let bg = this.add.image(0, 0, 'castle_bg').setOrigin(0, 0);
        this.add.image(137, 120, 'king');

    this.button_economy = new Button(this, 12, 45, 'basic_UI','long_UI', 'economy_UI', () => console.log("Bouton 1 cliqué !")); 
    this.button_laws = new Button(this, 12, 67, 'basic_UI','long_UI', 'laws_UI', () => console.log("Bouton 1 cliqué !")); 
    this.button_diplomacy = new Button(this, 12, 89, 'basic_UI','long_UI', 'diplomacy_UI', () => console.log("Bouton 1 cliqué !")); 
    this.button_court = new Button(this, 12, 111, 'basic_UI','long_UI', 'court_UI', () => console.log("Bouton 1 cliqué !")); 
    this.button_economy = new Button(this, 305, 12, 'basic_UI','long_UI', 'setting_UI', () => console.log("Bouton 1 cliqué !")); 


//button creaction 
/*

        let economy_container = this.add.container(12, 45);
        let laws_container = this.add.container(12, 67);
        let diplomacy_container = this.add.container(12, 89);
        let court_container = this.add.container(12, 111);
        let setting_container = this.add.container(305, 12);

        let button_economy_bg = this.add.image(0,0,'basic_UI').setOrigin(0.5, 0.5);
        let button_laws_bg = this.add.image(0,0,'basic_UI').setOrigin(0.5, 0.5);
        let button_diplomacy_bg = this.add.image(0,0,'basic_UI').setOrigin(0.5, 0.5);
        let button_court_bg = this.add.image(0,0,'basic_UI').setOrigin(0.5, 0.5);
        let button_setting_bg = this.add.image(0,0,'basic_UI').setOrigin(0.5, 0.5);

        let button_economy_lg = this.add.image(0,0,'economy_UI').setOrigin(0.5, 0.5);
        let button_laws_lg = this.add.image(0,0,'laws_UI').setOrigin(0.5, 0.5);
        let button_diplomacy_lg = this.add.image(0,0,'diplomacy_UI').setOrigin(0.5, 0.5);
        let button_court_lg = this.add.image(0,0,'court_UI').setOrigin(0.5, 0.5);
        let button_setting_lg = this.add.image(0,0,'setting_UI').setOrigin(0.5, 0.5);

       economy_container.add([button_economy_bg, button_economy_lg]);
       laws_container.add([button_laws_bg, button_laws_lg]);
       diplomacy_container.add([button_diplomacy_bg, button_diplomacy_lg]);
       court_container.add([button_court_bg, button_court_lg]);
       setting_container.add([button_setting_bg, button_setting_lg]);

        economy_container.setSize(button_economy_bg.width, button_economy_bg.height); // définit la zone cliquable
        economy_container.setInteractive({ useHandCursor: true });

         laws_container.setSize(button_economy_bg.width, button_economy_bg.height); // définit la zone cliquable
        laws_container.setInteractive({ useHandCursor: true });

        diplomacy_container.setSize(button_economy_bg.width, button_economy_bg.height); // définit la zone cliquable
        diplomacy_container.setInteractive({ useHandCursor: true }); 

         court_container.setSize(button_economy_bg.width, button_economy_bg.height); // définit la zone cliquable
        court_container.setInteractive({ useHandCursor: true });

         setting_container.setSize(button_economy_bg.width, button_economy_bg.height); // définit la zone cliquable
        setting_container.setInteractive({ useHandCursor: true });


economy_container.on('pointerdown', () => {
    console.log("Bouton cliqué !");
});
        

*/
      

        bg.setScale(
    this.scale.width / bg.width,
    this.scale.height / bg.height
    
  );
  bg.setDepth(-1);

        //this.background = this.add.tileSprite(0, 0, 358, 190, 'background');

        //const logo = this.add.image(640, 200, 'logo');

        //const ship = this.add.sprite(640, 360, 'ship');

        /*ship.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('ship', { start: 0, end: 2 }),
            frameRate: 15,
            repeat: -1
        });

        ship.play('fly');

        this.tweens.add({
            targets: logo,
            y: 400,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            loop: -1
        });

        */
    }
    

    update() {
        
    }
    
}
