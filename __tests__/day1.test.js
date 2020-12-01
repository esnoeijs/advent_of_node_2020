const day1 = require('../src/day1')

test('day1 part1', () => {
  expect(day1.solvePart1([1010,1,2,3])).toEqual(0);
  expect(day1.solvePart1([1010,1010,2,3])).toEqual(1020100);
  expect(day1.solvePart1([1721,979,366,299,675,1456])).toEqual(514579);
});

test('day1 part2', () => {
  // expect(day1.solvePart2([1010,1,2,3])).toEqual(0);
  // expect(day1.solvePart2([1010,1010,2,3])).toEqual(1020100);
  expect(day1.solvePart2([1721,979,366,299,675,1456])).toEqual(241861950);
});
