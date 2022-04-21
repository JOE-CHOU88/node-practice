// const xyz = require('./people');
const { people, ages } = require('./people');

// // print null; it returns nothing to xyz before you tell people to export
// console.log(xyz);
// console.log(xyz.people, xyz.ages);
// console.log(people, ages);

// // though we access the data in people, it does not mean that we are allowed to access to people itself
// console.log(people);

const os = require('os');

// print out platform and home directory
console.log(os.platform(), os.homedir());
