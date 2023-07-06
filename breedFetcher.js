const request = require("request");

const userQuery = process.argv[2];


const makeRequest = (userQuery) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${userQuery}`;

  request(url, (err, response, body) => {
    if (err) {
      throw err;
    }
    const data = JSON.parse(body);

    if (!data.length) {
      console.log("Breed not found!");
      return;
    }
    const obj = data[0];

    console.log(obj.description);
  });
};

makeRequest(userQuery);

