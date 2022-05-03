class Swimming_enemy extends Enemy{
    constructor(name, hp, type, dmg, can_attack, movement_speed, defence, swimming_speed, is_swimming, dive_speed, swimming_depth){
           super(name, hp, type, dmg, can_attack, movement_speed, defence);
            this.swimming_speed = swimming_speed;
            this.is_swimming = is_swimming;
            this.dive_speed = dive_speed;
            this.swimming_depth = swimming_depth;
    }
    toString(){
        const enemy_string = super.toString();
        const my_string = 'swimming speed: '+ this.swimming_speed + '\n' +
                          'is_swimming: '+ this.is_swimming + '\n' +
                          'dive_speed: '+ this.dive_speed + '\n' +
                          'swimming_depth : '+ this.swimming_depth + '\n';
        return enemy_string + my_string;
    }
    calculate_real_defence(){
        if(this.is_swimming) return this.defence * 4
        return this.defence
    }
}