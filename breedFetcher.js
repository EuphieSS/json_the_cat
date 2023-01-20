const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body)  => {
    if (error) {
      callback(error, body); //callback function is index.js
    } else if (body.length === 2) {
      error = "Cat Breed Not Found T_T";
      callback(error, body);
    } else {
      const data = JSON.parse(body)[0].description;
      callback(error, data);
    }
  });
};

module.exports = { fetchBreedDescription };