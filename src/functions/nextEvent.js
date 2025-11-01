import gameState from '../data/gameState.js';


export default function nextEvent() {
   
    if (gameState.eventIndex >= gameState.dayEvents.length) {
        console.log('Tous les événements du jour ont été joués.');
}
    else {
        
        gameState.dayEvents[gameState.eventIndex].playEvent();
        gameState.eventIndex += 1;
    }

}