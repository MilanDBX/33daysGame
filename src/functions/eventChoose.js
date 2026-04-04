import gameState from '../data/gameState.js';
import Character from '../classes/Character.js';
import EventHelper from '../data/eventData.js';
import Event from '../classes/Event.js';




export default function eventChoose(door) {
    let event_intro;
    if (gameState.jour == 1) 
        {
            console.log("Jour 1 - événements d'introduction");
            event_intro = EventHelper.getRandom({type : 'intro', used : false});
            event_intro.used = true;
            gameState.dayEvents.push(new Event (Character.getRandomCharacter(), event_intro,door));
            event_intro = EventHelper.getRandom({type : 'intro', used : false});
            event_intro.used = true;
            gameState.dayEvents.push(new Event (Character.getRandomCharacter(), event_intro,door));
            
        }
    if (gameState.argentUpdated == false){
        gameState.argentUpdated = true;
        console.log("Jour " + gameState.jour + " - événement financier");

        if (gameState.argentStatus == 'bankrupt')   {
            gameState.argent = 900;
            gameState.argentStatus = 'faible';
            gameState.argentUpdated = true;
            gameState.dayEvents.push(new Event (Character.getRandomCharacter(), "argent_0",door));
        }
        else if (gameState.argentStatus == 'critique'){
            
            gameState.dayEvents.push(new Event (Character.getRandomCharacter(), "argent_1",door));
        }
        else if (gameState.argentStatus == 'faible'){
            gameState.dayEvents.push(new Event (Character.getRandomCharacter(), "argent_2",door));
        }
        else if (gameState.argentStatus == 'moyen'){
            gameState.dayEvents.push(new Event (Character.getRandomCharacter(), "argent_3",door));
        }
        else if (gameState.argentStatus == 'riche'){
            gameState.dayEvents.push(new Event (Character.getRandomCharacter(), "argent_4",door));
        }
        else if (gameState.argentStatus == 'tres_riche'){
            gameState.dayEvents.push(new Event (Character.getRandomCharacter(), "argent_5",door));
        }
    }

    
   
        gameState.dayEvents.push(new Event (Character.getRandomCharacter(), EventHelper.getRandom({type : 'rand'}),door));
        gameState.dayEvents.push(new Event (Character.getRandomCharacter(), EventHelper.getRandom({type : 'rand'}),door));
        gameState.dayEvents.push(new Event (Character.getRandomCharacter(), EventHelper.getRandom({type : 'rand'}),door));

}