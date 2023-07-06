const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("#fetchBreedDescription", () => {
  it("return a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.isNull(err);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it("returns an error message if the breed doesn't exit, via callback", (done) => {
    fetchBreedDescription('Lion', (err, desc) => {
      const error = "Breed not found!";

      assert.equal(error, err);
      assert.isNull(desc);
      done();
    });
  });
});