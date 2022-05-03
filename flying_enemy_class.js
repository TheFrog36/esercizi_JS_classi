class Flying_enemy extends Enemy{
    constructor(name, hp, type, dmg, can_attack, movement_speed, defence, flying_speed, is_flying, dive_speed, flying_height){
           super(name, hp, type, dmg, can_attack, movement_speed, defence);
            this.flying_speed = flying_speed;
            this.is_flying = is_flying;
            this.dive_speed = dive_speed;
            this.flying_height = flying_height;
    }
    toString(){
        const enemy_string = super.toString()
        const my_string = 'flying_speed: ' + this.flying_speed + '\n' +
                          'is_flying: ' + this.is_flying + '\n' +
                          'dive_speed: ' + this.dive_speed + '\n' +
                          'flying_height: ' + this.flying_height + '\n';
        return enemy_string + my_string;
    }
    flying_dmg(){
        if(this.is_flying) return this.dmg * 2
        return this.dmg
    }
    diving_dmg(){
        if(this.is_flying) return this.flying_height/100 * this.dmg
        return 0;
    }
        
}