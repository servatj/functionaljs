const fs = require('fs')

const fileName = './data/sample.dat'
const rawData = `Magician potion1 80 4
Magician potion2 60 2
Magician potion3 50 1
knight weapon1 60 3
knight weapon2 60 3
knight weapon3 60 3
`

const createFile = (file, contents, format) => {
  return new Promise((resolve,reject) => {
  	 fs.writeFile(file,contents,format, (err) => {
  	   if (err) return reject(err);
       resolve(contents);
     });
  })
} 

const output = fs.readFileSync(fileName, 'utf8')
  .trim() 
  .split('\n')
  .map((line) => line.split(' '))
  .reduce((heroes,line) => {
     heroes[line[0]] = heroes[line[0]] || []
     heroes[line[0]].push({
       name:     line[1],
       item:     line[2],
       damage:   line[3],
       quantity: line[4]
      })
      return heroes
   } , {})


// promise call starting point 
createFile(fileName, rawData, 'utf8') 
  .then((contents) => {
    console.log('Ok Success' + contents)
  }).then((err) => {
  	console.log(JSON.stringify(output, null, 2))
  } 
  ).catch((err) => {
    console.log('Error')  
})
