class Enemy {
    constructor(name, hp, type, dmg, can_attack, movement_speed, defence){
        this.name = name;
        this.hp = hp;
        this.type = type;
        this.dmg = dmg;
        this.can_attack = can_attack;
        this.movement_speed = movement_speed;
        this.defence = defence;
        this.weakness = this.weakness(this.type)

    }

    weakness(){
        if(this.type ==='fire') return 'water';
        if(this.type ==='rock') return 'fire';
        if(this.type === 'air') return 'rock';
        if(this.type === 'water') return 'air';
    }

    toString(){
        const enemyString = 'name: ' + this.name + '\n' +
                            'hp: ' + this.hp + '\n' +
                            'type: ' + this.type + '\n' +
                            'dmg: ' + this.dmg + '\n' +
                            'can_attack: ' + this.can_attack + '\n' +
                            'movement_speed: ' + this.movement_speed + '\n' +
                            'defence: ' + this.defence + '\n' +
                            'weakness: ' + this.weakness + '\n';

        return enemyString;
    }

    static TYPE = {
        fire: 'fire',
        rock: 'rock',
        air: 'air',
        water: 'water'
    }
}