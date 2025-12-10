import Character from '../classes/Character.js';
import Faction from '../classes/Faction.js';


 const gameState = {
    
 

    jour: 0,
    argent: 1000,
    lois: {},
    dayEvents: [],
    eventIndex: 0,
    running : null,
    
    personnages: [
    ],
    factions: [
    new Faction('peuple', null, 50),
    new Faction('noblesse', null, 50),
    new Faction('clergé', null, 50),
    new Faction('cour', null, 50),
    new Faction('tarska', null, 50),
    new Faction('calden', null, 50),
    new Faction('elsden', null, 50),
    ],

    economie : {
        nourriture : 3,
        armes : 3,
        materiaux : 3,
        bijoux : 3,
    },
    speed : 0.4,
};

export default gameState;