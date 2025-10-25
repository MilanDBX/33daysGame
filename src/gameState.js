import Character from './Character.js';
import Faction from './Faction.js';


 const gameState = {
    
 

    jour: 1,
    argent: 1000,
    lois: {},
    
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
    scoreGuerre: {}, 
    scoreAmitie: {},
};

export default gameState;