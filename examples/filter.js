var persons = [
{ name: 'Ben Affleck',       gender: 'Male'   }, 
{ name: 'Lady Gaga',         gender: 'Female' }, 
{ name: 'Tom cruise',        gender: 'Male'   }, 
{ name: 'Cristina Aguilera', gender: 'Female' }, 
{ name: 'Justin Bieber',     gender: 'Male'   } 
]

// Filter with a simple for loop, non functional example
var males = []
for (var i = 0; i < persons.length; i++) {
	if (persons[i].gender === 'Male')
      males.push(persons[i])
}

console.log(males.length + " person/s found.")

// The same with filter array method functional way
// Filter need a callback that retuns condition true or false if there is some match

var males2 = persons.filter( function (person) { 
  return person.gender === 'Male' 
})

console.log(males2.length + " person/s found.")



// shorter way using arrow function inside filter
var males3 = persons.filter((person) => person.gender === 'Male' )

console.log(males3.length + " person/s found.")


// we can also create the callback function separeted from the filter function that
// improves readability
var isFemale = (person) => person.gender === 'Female' 

males4 = persons.filter(isFemale)

console.log(males3.length + " person/s found.")





