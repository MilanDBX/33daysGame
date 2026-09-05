import Character from '../classes/Character.js';
import Faction from '../classes/Faction.js';


 const gameState = {
    
 

    jour: 0,
    lois: {},
    dayEvents: [],
    eventIndex: 0,
    running : false,
    argent : 1700, //critique [0-400] faible[400-1000] moyen [1000-2000] riche [2000-3000] tres_riche [3000+]
    argentStatus : 'moyen',
    argentUpdated : true,
    
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
        nourriture : 4,
        armes : 2,
        materiaux : 3,
        bijoux : 1,
    },
    speed : 1,
};

export default gameState;