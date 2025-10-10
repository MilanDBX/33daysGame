export default class Character{
    constructor(name, faction, traits = []) {
        this.name = name;
        this.faction = faction;
        this.traits = traits;       // ex: ['assassin', 'diplomate']
        this.status = true
        this.closeness = false
        this.relation = 50;      // relation avec le joueur
        this.actionsPossibles = []; // ex: ['proposer loi', 'demande économique']
    }

    
}