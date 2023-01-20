const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => { //takes one user input, callback function will be called in breedFetcher.js
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});