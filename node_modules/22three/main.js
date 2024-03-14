
const lodash = require('lodash');
const lint = require('web3');

let data = [];
for (let i = 0; i < 100; i++) {
  data.push('String ' + (i + 1));
}


let randomString = lodash.sample(data);
console.log(randomString);


let shuffledData = lodash.shuffle(data);
console.log(shuffledData);


let firstTenStrings = lodash.take(data, 10);
console.log(firstTenStrings);
