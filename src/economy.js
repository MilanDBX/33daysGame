export  function increaseValue(thing, amount) {
    thing += amount;
    if (thing > 5) { thing = 5; }
    if (thing < 1) { thing = 1; }
    return thing;
}

export function printValues(gameState) {
    console.log("=== Valeurs économiques ===");
    console.log(`Nourriture: ${gameState.economie.nourriture}`);
    console.log(`Armes: ${gameState.economie.armes}`);
    console.log(`Matériaux: ${gameState.economie.materiaux}`);
    console.log(`Bijoux: ${gameState.economie.bijoux}`);
    console.log("===========================");
}