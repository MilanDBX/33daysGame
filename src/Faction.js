export default class Faction{
    constructor(name, leader, power){
        this.name = name;
        this.leader = leader;
        this.power = power;
        this.relation = 50;
        this.war = false;

    }

     static findByName(list, name) {
        return list.find(c => c.name === name);
    }

    ChangeRelation(amount) {
        this.relation += amount;
        if (this.relation > 100) this.relation = 100;
        if (this.relation < 0) this.relation = 0;
    }


    assignLeader(leader) {
        this.leader = leader;
    }
}
export function printFactions(factions) {
    console.log("=== Liste des factions ===");
    factions.forEach((char, index) => {
        console.log(
            `${index + 1}. ${char.name}  | Relation: ${char.relation} | Leader: ${char.leader.name} | Puissance: ${char.power}`
        );
    });
    console.log("============================");
}
