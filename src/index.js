const fs = require("fs");
const args = process.argv.slice(2);
const day1 = require(`./day1.js`);

dayNumber = args[0];
inputFile = args[1];

const input = fs.readFileSync(__dirname + `/../${inputFile}`, 'utf-8');


switch (dayNumber) {
  case '1':
    const values = input.split('\n').map(x => parseInt(x));
    console.log(`part1: ${day1.solvePart1(values)}`);
    console.log(`part2: ${day1.solvePart2(values)}`);
    break;
}