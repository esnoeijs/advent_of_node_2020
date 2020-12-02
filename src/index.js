const fs = require("fs");
const args = process.argv.slice(2);
const day1 = require(`./day1.js`);
const day2 = require(`./day2.js`);

dayNumber = args[0];
inputFile = args[1];

const input = fs.readFileSync(__dirname + `/../${inputFile}`, 'utf-8');

let values = []
switch (dayNumber) {
  case '1':
    values = input.split('\n').map(x => parseInt(x));
    console.log(`part1: ${day1.solvePart1(values)}`);
    console.log(`part2: ${day1.solvePart2(values)}`);
    break;
  case '2':
    values = input.split('\n');
    console.log(`part1: ${day2.solvePart1(values)}`);
    console.log(`part2: ${day2.solvePart2(values)}`);
    break;
}