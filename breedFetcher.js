const request = require('request');
const input = process.argv.slice(2);

const breedFetcher = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log(error.message);
    } else {
      const data = JSON.parse(body);
      if (Object.keys(data).length === 0) {
        console.log("Cat Breed Not Found T_T");
      } else {
        console.log(data[0].description);
      }
    }
  });
};

breedFetcher(input);