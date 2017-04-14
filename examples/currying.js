const _ = require('lodash')

// Currying is a technique where a new function is created by binding arguments to an existing function in advance,
// and sending the arguments as the remaining arguments to the original function. 
// The original function's return value is then returned

let player = (name, position, score) =>
   name + ' was a NBA player ' +
   position + ' and scored ' +
   score + ' points during his career.'


console.log(player('Michael Jordan','Shooting Guard','32,292'))

// the idea of currying is pass through the application an gradually received the agurments. Actually currying  is a technigque
// to tranforms a a function that multiple arguments into a sequence of function with just what argument. 

let player2 = 
  name => 
   position => 
    score => 
      name + ' was a NBA player ' +
      position + ' and scored ' +
      score + ' points during his career.'

// If we want to call this function and print the result we need to pass all the arguments this way
console.log(player2('Michael Jordan')('Shooting Guard')('32,292'))

// if we partially pass one argument it will return a function that needs 2 arguments
console.log('', player2('Michael Jordan'))

// We can create more sofiticaded functions 
let namePlayer = player2('Michael Jordan')
let shootingGuardPlayer = namePlayer('Shooting Guard')

console.log(shootingGuardPlayer('32,292'))


// we don't have to currify all our function by ourselves we can make many on the functional libraries that exist 
// for javascript as lodash or ramda with the built in function curry 

player3 = _.curry(player)

// We can create more sofiticaded functions 
let namePlayer2 = player3('Michael Jordan')
let shootingGuardPlayer2 = namePlayer('Shooting Guard')

console.log(shootingGuardPlayer2('32,292'))

let players = [
  { name: 'Michael Jordan', position: 'Shooting Guard' },
  { name: 'Larry Bird', position: 'Power Forward' },
  { name: 'Kobe Bryan', position: 'Shooting Guard' },
  { name: 'Shaquile Oneal', position: 'Center' }
]


let hasElement = 
  (position, obj) => obj.position === position

let shootingGuard = 	
  players.filter((x) => hasElement('Shooting Guard',x))


console.log('', shootingGuard)


// now currying this function
let hasElement2 = 
  _.curry((position, obj) => obj.position === position)

let shootingGuard2 = 	
  players.filter(hasElement2('Shooting Guard')) // has elemente returns a function that expects x, (x) => obj.position === position


console.log('', shootingGuard2)






