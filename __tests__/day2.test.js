const day2 = require('../src/day2')

test('day2 part1', () => {
  expect(day2.solvePart1(['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'])).toEqual(2);
});

test('day2 part2', () => {
  expect(day2.solvePart2(['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'])).toEqual(1);
});