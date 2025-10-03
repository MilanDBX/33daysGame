import { Start } from './scenes/Start.js';

//commit fonctionne skibid ? 

const config = {
    type: Phaser.AUTO,
    title: '33 Days',
    description: 'Survive 33 days as the new king of Aslandia',
    parent: 'game-container',
    width: 320,
    height: 180,
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [
        Start
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
            