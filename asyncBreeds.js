// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    // if (!error) return data;
    if (error) {
      functionToRunWhenThingsAreDone(undefined);
    } else if (!error) {
      functionToRunWhenThingsAreDone(data);
    }


  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};



// we try to get the return value
// const bombay = breedDetailsFromFile('Bombay', data=>{
//   console.log(data);
// });
// console.log('Return Value: ', bombay);
// => will NOT print out details, instead we will see undefined!

// const balinese = breedDetailsFromFile('Balinese', data=>{
//   console.log(data);
// });
// console.log('Return Value: ', balinese);
// => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;