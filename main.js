//Create A ship object

/*
Ship -
    hull hitpoints
    firepower
    accuracy

    attack ()
    retreat()

*/

//Create an alien ship

/*
Alien Ship -
    hull hitpoints
    firepower
    accuracy

    attack()

*/

class Ship {
    constructor(){
        this.hull = 1
        this.firepower = 1
        this.accuracy = .1
    }

    attack(otherShip){
        if(this.hull > 0 && otherShip.hull > 0)
        otherShip.hull = otherShip.hull - this.firepower
    }

}

class PlayerShip extends Ship {
    constructor(){
       super()
       this.hull = 20
       this.firepower = 5
       this.accuracy = 0.7
    }
}

class AlienShip extends Ship {
    constructor(){
        super()
        this.hull = 6
        this.firepower = 2
        this.accuracy = .6
    }
}

class Game {
    constructor(){
        this.humanShip = new PlayerShip()
        this.enemyShips = []
    }

    gameSetup(){
        for(let i = 0; i < 6; i++){
            this.enemyShips[i] = new AlienShip()
        }
    }

    startBattle(){
        
        while((this.checkIfPlayerIsAlive()) && (this.checkIfAlienIsAlive())){
            console.log("The while loop starts")
            this.humanShip.attack(this.enemyShips[0])
            console.log(`Alien has ${this.enemyShips[0].hull} left`)
            this.enemyShips[0].attack(this.humanShip)
            console.log(`Player has ${this.humanShip.hull} left`)
        }
        if(this.checkIfAlienIsAlive() == false){
            console.log("An alien has been defeated")
        }else if(this.checkIfPlayerIsAlive() == false){
            console.log("Player has been defeated...")
        }

        
    }

    checkIfAlienIsAlive(){
        if(this.enemyShips[0].hull > 0){
            return true
        }else{
            return false
        }
    }

    checkIfPlayerIsAlive(){
        if(this.humanShip.hull > 0){
            return true
        }else{
            return false
        }
    }

    checkIfPlayerWins(){
        if(! this.enemyShips[0]){
            console.log(`Player wins!!`)
        }
    }

    sendOutNextAlien(){
        this.enemyShips.shift()
    }


}

// let player = new PlayerShip()
// let alien = new AlienShip()

// player.attack(alien)
// console.log(`Alien has ${alien.hull} left`)
// alien.attack(player)
// console.log(`Player has ${player.hull} left`)

let game = new Game()

// console.log(game.humanShip)
game.gameSetup()
// console.log(game.enemyShips)
// Simulate Battle
game.startBattle()


/*
Battle - requires Player and Aliens
    -While either the Player or Alien Ship still has hitpoints, player attacks alien, then alien attacks player
    -When an alien is destroyed, check if another alien exists. If not, the player wins
    -If another alien exists, place them in battle, repeat battle

*/