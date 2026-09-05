import gameState from "../data/gameState.js";
import Character from "../classes/Character.js";
import Faction from "../classes/Faction.js";
import EventHelper from "../data/eventData.js";
import Door from "../classes/Door.js";
import Event from "../classes/Event.js";
import nextEvent from "./nextEvent.js";
import { eventDatabase } from "../data/eventData.js";
import eventChoose from "./eventChoose.js";
import  argentUpdate  from "./argentUpdate.js";


export default function nextDay(scene,gameState, door) {

    // éviter superposition des events
    if (gameState.running === true) {
        return
    }
    gameState.running = true

    scene.cameras.main.once('camerafadeoutcomplete', () => {
    // Pause de 1000ms (1 seconde) en noir avant de rouvrir
    scene.time.delayedCall(400, () => {
        gameState.jour += 1;
        console.log("Jour actuel :", gameState.jour);
        
        argentUpdate();
        eventChoose(door);
        scene.dayText.setText('j:' + gameState.jour);
        console.log(gameState.argent);
        

        
        scene.cameras.main.fadeIn(500);
    });
});
    
    const possibleEvents = [];

   
    //gameState.personnages.push(Character.randomCharacter());
    //gameState.personnages.push(Character.randomCharacter('noblesse'));

    

    // définition des événements du jour (informatif / choix / histoire) au moins 1 informatif, 1 choix 

   
    

        


   scene.cameras.main.fadeOut(500);



    //console.log("Événements du jour :", gameState.dayEvents[0]);

    scene.time.delayedCall(2600, () => {nextEvent(gameState);})

    //gameState.dayEvents[0].playEvent();
        





}