const arr = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

request(arr[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(arr[1], body, (err) => {

    if(err) throw err;
    console.log('file completed!');
  })
});