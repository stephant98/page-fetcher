const url = process.argv[2];
const localPath = process.argv[3];

const request = require('request');
const fs = require('fs')




request(`${url}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.


  fs.writeFile(`${localPath}`, body, function (err) {
    const stats = fs.statSync(`${localPath}`)
    const fileSize = stats.size;
    if(err) throw err;
    console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}`)
  })
});