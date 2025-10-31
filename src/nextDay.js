import gameState from "./gameState.js";
import Character from "./Character.js";
import Faction from "./Faction.js";


export default function nextDay(gameState) {
    
    const possibleEvents = [];

    gameState.jour += 1;
    gameState.personnages.push(Character.randomCharacter());
    gameState.personnages.push(Character.randomCharacter('noblesse'));

    console.log("Jour actuel :", gameState.jour);

    // définition des événements du jour (informatif / choix / histoire) au moins 1 informatif, 1 choix 

    gameState.dayEvents = [];

    gameState.dayEvents.push()
        





}