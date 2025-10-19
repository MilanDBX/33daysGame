import gameState from "./gameState.js";
import Character from "./Character.js";
import Faction from "./Faction.js";

export default function nextDay(gameState) {
    
    gameState.jour += 1;
    gameState.personnages.push(Character.randomCharacter());
    gameState.personnages.push(Character.randomCharacter('noblesse'));

    console.log("Jour actuel :", gameState.jour);
}