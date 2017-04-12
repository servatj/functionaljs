const persons = [
{ name: 'Ben Affleck',       gender: 'Male'   }, 
{ name: 'Lady Gaga',         gender: 'Female' }, 
{ name: 'Tom cruise',        gender: 'Male'   }, 
{ name: 'Cristina Aguilera', gender: 'Female' }, 
{ name: 'Justin Bieber',     gender: 'Male'   } 
]


// Problem: We want a new array made from persons array that has all the names of the persons 
// Solution with For loop
const names = []
for (var i = 0; i < persons.length; i++) {
  names.push(persons[i].name)
} 

console.log(names)

// same with mor functional way using map 
// map needs a callbak with one parameter the array we want to iterate 
const names2 = persons.map(function(person) {
	return person.name
})

console.log(names2)

// we could do the same with ES6 arrow function
const names3 = persons.map((person) => person.name)

console.log(names3)


// we can return as well can create new objects (this time with arrow function only)
// if you don't have es6 you can run oldie versions of node with node --harmony_arrow_functions map.js

const names4 = persons.map((person) =>  person.name + ' is a ' + person.gender)

console.log(names4)

// usin more functional variables x, y etc...

const names5 = persons.map((x) =>  x.name + ' is a ' + x.gender)

console.log(names5)


