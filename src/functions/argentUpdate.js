import gameState from '../data/gameState.js';

export default function argentUpdate() {

    gameState.argent += ((gameState.economie.nourriture)-3) * 200;
    gameState.argent += ((gameState.economie.armes)-3) * 200;
    gameState.argent += ((gameState.economie.materiaux)-3) * 200;
    gameState.argent += ((gameState.economie.bijoux)-3) * 200;

    if (gameState.argent <= 0 && gameState.argentStatus != 'bankrupt') {
        gameState.argentStatus = 'bankrupt';
        gameState.argentUpdated = false;
    } else if (gameState.argent < 400 && gameState.argentStatus != 'critique') {
        gameState.argentStatus = 'critique';
        gameState.argentUpdated = false;
    } else if (gameState.argent >= 400 && gameState.argent < 1000 && gameState.argentStatus != 'faible') {
        gameState.argentStatus = 'faible';
        gameState.argentUpdated = false;
    } else if (gameState.argent >= 1000 && gameState.argent < 2000 && gameState.argentStatus != 'moyen') {
        gameState.argentStatus = 'moyen';
        gameState.argentUpdated = false;
    } else if (gameState.argent >= 2000 && gameState.argent < 3000 && gameState.argentStatus != 'riche') {
        gameState.argentStatus = 'riche';
        gameState.argentUpdated = false;
    } else if (gameState.argent >= 3000 && gameState.argentStatus != 'tres_riche') {
        gameState.argentStatus = 'tres_riche';
        gameState.argentUpdated = false;
    }
    }