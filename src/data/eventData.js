export const eventDatabase = {
  intro_messenger: {
    id: 'intro_messenger',
    dialogue: "Bonjour Sire, Je suis votre messager personnel. Je serai à votre service pour vous  transmettre  les nouvelles  du royaume et vous assister dans vos décisions. /p Bonne chance !",
    type : "intro"
    ,used : false
  },
  intro_tarska: {
    id: 'intro_tarska',
    dialogue: "Bonjour jeune Roi, Je suis l'ambassadeur du grand khan de Tarska. /l Nous sommes des milliers de guerriers venus de l'est, /l Si vous essayez de nous la mettre à l'envers, ça sera la guerre !",
    type : "intro"
    , used : false
  },
  intro_calden: {
    id: 'intro_calden',
    dialogue: "Bonjour jeune Roi, Je suis l'ambassadeur du chef de la confédération de Calden. /l Nous esperons que votre montée au pouvoir signifie une ère de paix et propsérité entre nos peuples. Nous souhaitons avant tout garder nos accords commericaux et maintenir nos routes commerciales passant dans votre pays. Nous comptons sur votre sagesse pour éviter tout conflit inutile."
  , type : "intro"
  , used : false
  },
  intro_clerge: {
    id: 'intro_clerge',
    dialogue: "Bonjour Sire, Je suis l'archévèque de votre royaume. /l En tant que représentant du clergé, j'ai été choisi pour vous faire part de nos attentes. /l Nous espérons que vous prendrez en compte les intérêts du clergé dans vos décisions royales et que vous maintiendrez la foi et la morale au sein du royaume. Nous comptons sur votre sagesse pour gouverner avec justice et équité.",
    type : 'intro'
    , used : false
  },
  intro_elsden: {
    id: 'intro_elsden',
    dialogue: "Bonjour jeune Roi, Je suis l'ambassadeur du duc d'Elsden. /l Votre père était un allié précieux et nous espérons que vous continuerez à honorer cette alliance si importante. /l Ensemble, nous pouvons assurer le maintien de la stabilité de nos peuples et la région tout en repoussant toute menaces. Nous comptons cependant sur vous pour ne pas casser les normes qui permettent à nos royaumes de tenir debout, il serait dommage de voir votre chateau réduit en cendres...."
    ,type : 'intro'
    , used : false
  },
  intro_noblesse: {
    id: 'intro_noblesse',
    
    dialogue: "Bonjour Sire, Je suis le représentant de la noblesse de votre royaume. /l En tant que membre influent du conseil, j'ai été choisi pour vous faire part de nos attentes. /l Nous espérons que vous prendrez en compte nos intérêts dans vos décisions royales et que vous maintiendrez le statut et les privilèges de la noblesse. Nous comptons sur votre sagesse pour gouverner avec justice et équité."

    , type : 'intro'
    , used : false
  },
  intro_peuple: {
    id: 'intro_peuple',
    dialogue: "Bonjour Sire, Je suis le représentant du peuple de votre royaume. /l En tant que voix du peuple, j'ai été choisi pour vous faire part de nos attentes. /l Nous espérons que vous prendrez en compte les besoins et les préoccupations du peuple dans vos décisions royales. Nous comptons sur votre sagesse pour gouverner avec justice et équité."
    ,type : 'intro'
    , used : false
  },
  argent_5: {
    id: 'argent_5',
    dialogue: "Seigneur, les caisses du royaumes sont remplies à rabord ! /l Vous pouvez être fier de cela /l Je pense qu'il serait judicieux de faire quelque chose de cet or. "
  },
  argent_4: {
    id: 'argent_4',
    dialogue: "Seigneur, les caisses du royaumes sont plutôt bien remplies ! /l Je ne dis pas qu'il faut tout dépenser mais peut-être envisager quelques investissements ? "
  },
  argent_3: {
    id: 'argent_3',
    dialogue: "Seigneur, j'ai fait un examen du compte du royaume ! /l Nous avons des fonds suffisants pour couvrir nos dépenses courantes. /l Cependant, faites attention, une royaume sans argent est un royaume mort !."
  },
  argent_2: {
    id: 'argent_2',
    dialogue: "Seigneur, j'ai examiné ce qu'il restait dans les caisses du royaume ! /l j'ai constaté que nos réserves sont basses. /l Il serait sage de limiter les dépenses et de chercher des moyens d'augmenter nos revenus."
  },
  argent_1: {
    id: 'argent_1',
    dialogue: "Seigneur, la situation est critique ! /l Les caisses du royaume sont presque vides. /l Nous devons agir rapidement pour éviter une crise financière majeure."
  },
  argent_0: {
    id: 'argent_0',
    dialogue: "Seigneur, les caisses sont vides ! /l Nous avons du emprunter de l'argent à la noblesse mais cela fait grandement augmenter leur pouvoir et si vous ne réglez pas ça rapidement, une révolte est à prévoir !"
  },
  declaration_guerre_tarska: {
    id: 'declaration_guerre_tarska',
    dialogue: "Seigneur, la nouvelle vient de tomber, une lettre du grand khan de Tarska ! /l Ils nous déclarent la guerre ! /l Nous devons préparer nos défenses immédiatement et envisager une contre-attaque."
  },
  declaration_guerre_calden: {
    id: 'declaration_guerre_calden',
    dialogue: "Seigneur, la nouvelle vient de tomber, une lettre du chef de la confédération de Calden ! /l Ils nous déclarent la guerre ! /l Nous devons préparer nos défenses immédiatement et envisager une contre-attaque."
  },
  declaration_guerre_elsden: {
    id: 'declaration_guerre_elsden',
    dialogue: "Seigneur, la nouvelle vient de tomber, une lettre du duc d'Elsden ! /l Ils nous déclarent la guerre ! /l Nous devons préparer nos défenses immédiatement et envisager une contre-attaque."
  },
  prémices_guerre_peuple: {
    id: 'declaration_guerre_peuple',
    dialogue: "Seigneur, des émeutes éclatent dans les rues ! /l Le peuple est en colère et réclame justice. /l Nous devons agir rapidement pour apaiser la situation avant qu'elle ne dégénère. Si vous ne faites rien, ça sera bientôt la révolte !"
  },
  prémices_guerre_noblesse: {
    id: 'déclaration_guerre_noblesse',
    dialogue: "Seigneur, j'ai des nouvelles inquiétantes à vous annoncer ! /l La noblesse complote contre vous, méfiez-vous de leurs intentions. /l Nous devons renforcer notre position et surveiller leurs actions de près. Si vous ne faites rien, ça sera bientôt la guerre civile !"
  },
  mad_clergé: {
    id: 'déclaration_guerre_clergé',
    dialogue: "Seigneur, le clergé n'approuve pas du tout vos dernières décisions ! /l Vous savez qu'avoir l'approbation du clergé est crucial pour maintenir la stabilité du royaume. /l Nous devons trouver un moyen de les apaiser avant que la situation ne dégénère. Si vous ne faites rien, le peuple et la noblesse suivront leur exemple !"
  },
  rand_1: {
    id: 'rand_1',
    type : 'rand',
    dialogue: "Seigneur, 1 un marchand ambulant est arrivé en ville avec des marchandises exotiques ! /l Peut-être pourrions-nous en tirer profit en achetant et revendant certains articles rares."
  },
  rand_2: {
    id: 'rand_2',
    type : 'rand',
    dialogue: "Seigneur, 2 un marchand ambulant est arrivé en ville avec des marchandises exotiques ! /l Peut-être pourrions-nous en tirer profit en achetant et revendant certains articles rares."
  },
  rand_3: {
    id: 'rand_3',
    type : 'rand',
    dialogue: "Seigneur, 3 un marchand ambulant est arrivé en ville avec des marchandises exotiques ! /l Peut-être pourrions-nous en tirer profit en achetant et revendant certains articles rares."
  },
};

export const eventListing = {
  intro : [
    "intro_messenger",
    "intro_tarska",
    "intro_calden",
    "intro_clerge",
    "intro_elsden",
    "intro_noblesse",
  ]
,
  random : [
    "rand_1",
    "rand_2",
    "rand_3",
  ]
  , 
  consequence : [
    "declaration_guerre_tarska",
    "declaration_guerre_calden",
    "declaration_guerre_elsden",
    'declaration_guerre_peuple',
    'declaration_guerre_noblesse',
    'declaration_guerre_clergé',
    "argent_1",
    "argent_2",
    "argent_3",
    "argent_5",
    "argent_4",
  ],
  
};

export default class EventHelper {

  static getRandom(filter = null) {
    let events = Object.values(eventDatabase);

    // filtre par objet de critères
    if (filter && typeof filter === "object") {
      events = events.filter(event =>
        Object.entries(filter).every(
          ([key, value]) => event[key] === value
        )
      );
    }

    // filtre custom (optionnel)
    else if (typeof filter === "function") {
      events = events.filter(filter);
    }

    if (events.length === 0) return null;

    return events[Math.floor(Math.random() * events.length)];
  }
}


