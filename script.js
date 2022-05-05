const enemy1 = new Enemy('green goblin', 100,Enemy.TYPE.rock, 20, true, 10, 5)
const enemy2 = new Flying_enemy('big ass dragon', 500, Enemy.TYPE.fire, 30, true, 10, 20, 100, true, 90, 500)
const enemy3 = new Swimming_enemy('Panzer of the lake', 1000, Enemy.TYPE.rock, 50, true, 0, 100, 0, true, 9.8, 11000)

console.log(enemy3.toString())
console.log(enemy2.diving_dmg())
console.log(enemy3.calculate_real_defence()) 
