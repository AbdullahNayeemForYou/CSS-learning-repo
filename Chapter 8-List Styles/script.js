/*
👉hasOwnProperty('property name') => checks if it it's own
👉prototype chain 
 */

class Engine{
   constructor(){
    this.names = "a"
   }
  
sound(){
}
}

class car extends Engine{
  constructor(){
    super()
    this.company = "Toyota"
  }
  buy(){

  }
}

const myCar = new car()

console.log(Engine.prototype.hasOwnProperty('sound'))
console.log(car.prototype.hasOwnProperty('buy'))
console.log(myCar.hasOwnProperty('company'))
console.log(myCar.hasOwnProperty('names'))




