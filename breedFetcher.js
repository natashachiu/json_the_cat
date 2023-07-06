const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    const data = JSON.parse(body);

    if (!data.length) {
      callback("Breed not found!", null);
      return;
    }
    const obj = data[0];

    callback(null, obj.description);
  });
};

// const breedDescription = (err, desc) => console.log(desc);

// fetchBreedDescription('Siberian', breedDescription);


module.exports = { fetchBreedDescription };