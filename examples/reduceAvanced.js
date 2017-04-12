const fs = require('fs')

const rawData = `
Magician  potion1 80 4
Magician  potion2 60 2
Magician  potion3 50 1
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

createFile('./data/sample.dat', rawData, 'utf8')
  .then((contents) => {
    console.log('Ok Success' + contents)
  }).catch((err) => {
    console.log('Error')  
})
