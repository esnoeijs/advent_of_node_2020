const fs = require("fs");
const args = process.argv.slice(2);
const day1 = require(`./day1.js`);
const day2 = require(`./day2.js`);
const day3 = require(`./day3.js`);
const day4 = require(`./day4.js`);
const day5 = require(`./day5.js`);
const day6 = require(`./day6.js`);
const day7 = require(`./day7.js`);

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
  case '3':
    console.log(`part1: ${day3.solvePart1(input)}`);
    console.log(`part2: ${day3.solvePart2(input)}`);
    break;
  case '4':
    console.log(`part1: ${day4.solvePart1(input)}`);
    console.log(`part2: ${day4.solvePart2(input)}`);
    break;
  case '5':
    console.log(`part1: ${day5.solvePart1(input)}`);
    console.log(`part2: ${day5.solvePart2(input)}`);
    break;
  case '6':
    console.log(`part1: ${day6.solvePart1(input)}`);
    console.log(`part2: ${day6.solvePart2(input)}`);
    break;
  case '7':
    console.log(`part1: ${day7.solvePart1(input)}`);
    console.log(`part1: ${day7.solvePart2(input)}`);
    break;
}