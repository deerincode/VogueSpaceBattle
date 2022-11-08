
class Ship {
    constructor(){
        this.hull = 1
        this.firepower = 1
        this.accuracy = .1
        this.shipType = ''
    }

    attack(otherShip){
        if(this.hull > 0 && otherShip.hull > 0){
            console.log(`${this.shipType} ship takes aim...`)
            if(Math.random() < this.accuracy) {
                console.log("Successful hit!")
                otherShip.hull = otherShip.hull - this.firepower
            }else{
                console.log("Shot missed!")
            }
        }
    }

}

class PlayerShip extends Ship {
    constructor(){
       super()
       this.hull = 20
       this.firepower = 5
       this.accuracy = 0.7
       this.shipType = 'Player'
    }

    retreat(){

    }
}

class AlienShip extends Ship {
    constructor(){
        super()
        this.hull = Math.floor(Math.random() * 5) + 5
        this.firepower = Math.floor(Math.random() * 3) + 2
        this.accuracy = Math.floor(Math.random() * 3) + 6 / 10
        this.shipType = 'Alien'
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
            // console.log("Player ship takes aim...")
            this.humanShip.attack(this.enemyShips[0])
            console.log(`Alien has ${this.enemyShips[0].hull} hull points left`)
            // console.log("Alien ship takes aim...")
            this.enemyShips[0].attack(this.humanShip)
            console.log(`Player has ${this.humanShip.hull} hull points left`)
        }
        if(this.checkIfAlienIsAlive() == false){
            this.sendOutNextAlien()
            console.log("An alien has been defeated")
        }else if(this.checkIfPlayerIsAlive() == false){
            console.log("Player has been defeated...")
            return
        }

        if(this.checkIfPlayerWins() == false){
            this.startBattle()
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
        if(!this.enemyShips.length){
            console.log(`Player wins!!`)
            return true
        }else if(this.enemyShips.length >= 1){
            console.log("Ships still remain")
            return false
        }
    }

    sendOutNextAlien(){
        this.enemyShips.shift()
    }

}


let game = new Game()

game.gameSetup()
game.startBattle()

