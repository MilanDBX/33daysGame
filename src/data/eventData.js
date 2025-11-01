export const eventDatabase = {
  messenger_welcome: {
    id: 'messenger_welcome',
    dialogue: "Bonjour mon Roi, je suis votre messager. /l Je serai là pour vous annoncer les nouvelles du royaume. /l Bonne chance ! /p Feyur... alors oui, il est vrai que c’est pas la folie, cependant non, ça n’est pas une vraie raison !"
  },

  noble_angry: {
    id: 'noble_angry',
    dialogue: "Je vis... un cauchemar ! /l Rendez les bijoux de la couronne !!! /l Bande de loosers ! Crapules ! /p Vous allez voir !!!"
  },

  peasant_complaint: {
    id: 'peasant_complaint',
    dialogue: "Monseigneur, les récoltes ont encore brûlé... /l Et c’est pas à cause du soleil, c’est à cause du feu. /p Et là, y a un moment, faut commencer à se poser des questions."
  },

  merlin_fail_spell: {
    id: 'merlin_fail_spell',
    dialogue: "Alors normalement, si j'agite la main comme ça... /l ...et que je dis ‘abracadabra’... /l Ah bah non, ça fait rien. /p Bon bah, on va dire que c’est expérimental."
  },

  perceval_confused: {
    id: 'perceval_confused',
    dialogue: "Mais si on met les pains d’un côté et la confiture de l’autre, /l au final on fait quoi ? /p Une tartine ou un sandwich ?"
  },

  karadoc_food: {
    id: 'karadoc_food',
    dialogue: "La guerre, c’est bien, mais on va pas partir le ventre vide. /l Parce qu’un ventre vide, c’est un soldat mort. /p Ou au moins, grognon."
  },

  arthur_fedup: {
    id: 'arthur_fedup',
    dialogue: "Mais c’est pas compliqué, bordel ! /l Je demande juste que les ordres soient exécutés ! /p Et sans foutre le feu au château, si possible."
  },

  leodagan_angry: {
    id: 'leodagan_angry',
    dialogue: "Non mais c’est pas croyable ! /l On leur file des armes, des chevaux, et qu’est-ce qu’ils foutent ? /p Ils perdent contre des types en chemise de nuit !"
  },

  guenievre_naive: {
    id: 'guenievre_naive',
    dialogue: "Mais enfin, Arthur... /l Si vous êtes fatigué, vous n’avez qu’à vous reposer ! /p Voilà, problème réglé."
  },

  bohourt_proud: {
    id: 'bohourt_proud',
    dialogue: "J’ai terrassé un ennemi d’un seul coup d’épée ! /l Bon, après, il dormait, mais l’intention y était. /p L’honneur est sauf !"
  },

  venec_deal: {
    id: 'venec_deal',
    dialogue: "Bon, Roi Arthur, je vous fais un prix d’ami. /l Deux chariots pour le prix d’un, et je ferme les yeux sur les roues en moins. /p C’est du commerce honnête !"
  },

  sire_bedivere_science: {
    id: 'sire_bedivere_science',
    dialogue: "Si on considère la trajectoire du projectile, /l on peut déduire que le boulet a une courbe elliptique ! /p Ou alors j’ai juste raté ma cible, c’est possible aussi."
  },

  perceval_plan: {
    id: 'perceval_plan',
    dialogue: "Bon alors, on fait un plan : /l on attaque pas par devant, parce qu’ils nous attendent, /l on attaque pas par derrière, parce que c’est sale, /p du coup on attaque... par la gauche."
  },

  karadoc_philosophy: {
    id: 'karadoc_philosophy',
    dialogue: "Le gras, c’est la vie. /l Le jour où on comprendra ça, on aura fait un grand pas vers la paix. /p Et vers le jambon."
  },

  arthur_sarcasm: {
    id: 'arthur_sarcasm',
    dialogue: "Ah oui, superbe idée. /l On va attaquer sans stratégie, sans vivres et sans renforts. /p Avec un peu de chance, on crèvera tous avant le déjeuner."
  },

  merlin_panic: {
    id: 'merlin_panic',
    dialogue: "Attention Majesté ! /l Je sens une perturbation magique dans l’air... /l Ou alors c’est juste une flatulence, j’suis plus sûr. /p Dans le doute, tenez-vous prêt !"
  },

  leodagan_plan: {
    id: 'leodagan_plan',
    dialogue: "Bon, on brûle tout, on rase tout, et on discute après. /l C’est ma méthode. /p Radical, mais efficace."
  },

  perceval_math: {
    id: 'perceval_math',
    dialogue: "Si on a deux poulets, qu’on en mange un, /l il en reste combien ? /p Aucun, parce qu’on a faim."
  },

  karadoc_wisdom: {
    id: 'karadoc_wisdom',
    dialogue: "Faut pas sous-estimer la sieste stratégique. /l Ça repose le corps et l’esprit. /p Et ça fait passer le temps jusqu’au dîner."
  },

  arthur_end: {
    id: 'arthur_end',
    dialogue: "Bon, on va dire que c’est pas si pire. /l Allez, on remballe tout ça. /p Et la prochaine fois, on essaie de pas foutre le feu à la table ronde."
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


