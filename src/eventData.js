export const eventDatabase = {
    FIND_ITEM: {
        id: 'FIND_ITEM',
        dialogues: [
            "Oh! J'ai trouvé quelque chose!",
            "Qu'est-ce que c'est que ça?"
        ],
        effects: {
            inventory: {
                add: true,
                item: "genericItem"
            },
            stats: {
                luck: +1
            }
        },
        animations: {
            character: "pickup_animation",
            particles: "sparkle_effect"
        },
        sound: "item_found.mp3"
    },
    
    ENEMY_ENCOUNTER: {
        id: 'ENEMY_ENCOUNTER',
        dialogues: [
            "Un ennemi approche!",
            "Je dois me préparer au combat!"
        ],
        effects: {
            stats: {
                health: -10,
                stress: +5
            }
        },
        animations: {
            character: "battle_stance",
            environment: "dark_fog"
        },
        sound: "enemy_appear.mp3"
    }
    // Ajoutez d'autres événements ici
};