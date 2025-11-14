export const eventDatabase = {
  intro_messenger: {
    id: 'intro_messenger',
    dialogue: "Bonjour Sire, Je suis votre messager personnel. Je serai à votre service pour vous /p transmettre /p les nouvelles /p du royaume et vous assister /p dans vos décisions. /p Bonne chance !"
  },
  intro_iwan: {
    id: 'intro_iwan',
    dialogue: "Je suis Iwan, votre conseiller loyal. Mon devoir est de vous guider à travers les défis qui vous attendent en tant que souverain. Ensemble, nous veillerons à la prospérité de notre royaume."
  },
  intro_rhys: {
    id: 'intro_iwan',
    dialogue: "Je m'appelle Rhys, capitaine de votre garde. Ma mission est de protéger votre personne et le royaume contre toutes les menaces. Vous pouvez compter sur ma loyauté et mon courage."
  },
    
};

export default class EventHelper {

  // 🎲 Récupère un événement aléatoire
  static getRandom(filter = null) {
    let events = Object.values(eventDatabase);

    // appliquer un filtre si fourni
    if (filter && typeof filter === 'function') {
      events = events.filter(filter);
    }

    if (events.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
  }
}


