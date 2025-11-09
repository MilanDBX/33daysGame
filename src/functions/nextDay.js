import gameState from "../data/gameState.js";
import Character from "../classes/Character.js";
import Faction from "../classes/Faction.js";
import EventHelper from "../data/eventData.js";
import Door from "../classes/Door.js";
import Event from "../classes/Event.js";
import nextEvent from "./nextEvent.js";
import { eventDatabase } from "../data/eventData.js";


export default function nextDay(scene,gameState, door) {

    scene.cameras.main.once('camerafadeoutcomplete', () => {
    // Pause de 1000ms (1 seconde) en noir avant de rouvrir
    scene.time.delayedCall(400, () => {
        if(gameState.running === true){

            console.log("was running")
            
        gameState.dayEvents[gameState.eventIndex].stopEvent();
        }
        scene.cameras.main.fadeIn(500);
    });
});
    
    const possibleEvents = [];

    gameState.jour += 1;
    //gameState.personnages.push(Character.randomCharacter());
    //gameState.personnages.push(Character.randomCharacter('noblesse'));

    console.log("Jour actuel :", gameState.jour);

    // définition des événements du jour (informatif / choix / histoire) au moins 1 informatif, 1 choix 

    gameState.dayEvents = [];
    gameState.eventIndex = 0;

    gameState.dayEvents.push(new Event (Character.randomCharacter(), EventHelper.getRandom(),door));
    gameState.dayEvents.push(new Event (Character.randomCharacter(), EventHelper.getRandom(),door));
    gameState.dayEvents.push(new Event (Character.randomCharacter(), EventHelper.getRandom(),door));


   scene.cameras.main.fadeOut(500);



    //console.log("Événements du jour :", gameState.dayEvents[0]);

    scene.time.delayedCall(2600, () => {nextEvent(gameState);})

    //gameState.dayEvents[0].playEvent();
        





}