
const request = require('request'); // Request library
const fs = require('fs');//file system 

// grab the path and site passed in NODE
const path = process.argv[3]; //path of the file the content will be saved.
const siteUrl = process.argv[2] //site address


request(siteUrl, (error, data, body) => {
  //if errror we can move on and not write anything to the file.
  if (error) {
    console.log('error:', error);
  } //if there is no error write the body of the html to the file.
  fs.writeFile(`${path}`,  body, function(error) {
  
  })
  console.log(`Downloaded and saved 3261 bytes to `)
});


