import { nameList } from "../data/nameList.js";
import gameState  from "../data/gameState.js";
import Faction from "./Faction.js";

export default class Character{
    constructor(name, faction, traits = [], influence = 30,spriteSheet = 'basepnjsheet' ){ 
        this.name = name;
        this.faction = Faction.findByName(gameState.factions,faction);
        this.traits = traits;       
        this.status = true;
        this.arrested = false
        this.relation = 50;      
        this.actionsPossibles = []; 
        this.influence = influence;
        this.spriteSheet = spriteSheet;
    }

     static findByName(list, name) {
        return list.find(c => c.name === name);
    }

     kill() {
        this.status = false;
    }

    arrest() {
        this.arrested = true;
    }

    ChangeRelation(amount) {
        this.relation += amount;
        if (this.relation > 100) this.relation = 100;
        if (this.relation < 0) this.relation = 0;
    }

    static randomCharacter(faction) {
    const possibleTraits = ['guerrier', 'assassin', 'sage', 'diplomate', 'rusé'];
    const traits = [];

    // Nombre aléatoire de traits (1 ou 2)
    const numTraits = Math.floor(Math.random() * 2) + 1;
    while (traits.length < numTraits) {
        const trait = possibleTraits[Math.floor(Math.random() * possibleTraits.length)];
        if (!traits.includes(trait)) traits.push(trait);
    }
     

    if ( faction === undefined){
    const factionList = ['peuple', 'noblesse'];
    faction = factionList[Math.floor(Math.random() * factionList.length)];
    }

    let firstName, lastName, name;

    if (faction === 'noblesse') { 
        firstName = nameList.nobleFirstNames[Math.floor(Math.random() * nameList.nobleFirstNames.length)];
        lastName = nameList.nobleTitles[Math.floor(Math.random() * nameList.nobleTitles.length)];
    } else {
        firstName = nameList.peasantFirstNames[Math.floor(Math.random() * nameList.peasantFirstNames.length)];
        lastName = nameList.peasantLastNames[Math.floor(Math.random() * nameList.peasantLastNames.length)];
    }

   
    name = `${firstName} ${lastName}`;

   
    console.log(name, " faction : ", faction); // affiche le nom généré

    return new Character(name, faction, traits);
}

printInsideCharacter(){
    console.log(`Nom: ${this.name} | Faction: ${this.faction} | Traits: ${this.traits.join(', ')} | Relation: ${this.relation} | Statut: ${this.status ? 'Vivant' : 'Mort'} | Arresté: ${this.arrested ? 'Oui' : 'Non'}`);
}

static getRandomCharacter(filter = null) {
  // on récupère tous les personnages existants
  let characters = gameState.personnages;

  // si le tableau est vide
  if (!characters || characters.length === 0) {
    console.warn("⚠️ Aucun personnage dans gameState.personnages !");
    return null;
  }

  // filtre optionnel : par exemple ignorer les morts ou arrêtés
  if (filter && typeof filter === "function") {
    characters = characters.filter(filter);
  }

  // si plus aucun personnage après filtrage
  if (characters.length === 0) {
    console.warn("⚠️ Aucun personnage ne correspond au filtre !");
    return null;
  }

  // sélection aléatoire
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

    
}
export function printCharacters(characters) {
    console.log("=== Liste des personnages ===");
    characters.forEach((char, index) => {
        console.log(
            `${index + 1}. ${char.name} | Faction: ${char.faction.name} | Traits: ${char.traits.join(', ')} | Status: ${char.status ? 'Vivant' : 'Mort'} | Relation: ${char.relation}`
        );
    });
    console.log("============================");
}


