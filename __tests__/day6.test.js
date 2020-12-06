const day6 = require('../src/day6')

test('day6 part1', () => {
  input =
      'abc\n' +
      '\n' +
      'a\n' +
      'b\n' +
      'c\n' +
      '\n' +
      'ab\n' +
      'ac\n' +
      '\n' +
      'a\n' +
      'a\n' +
      'a\n' +
      'a\n' +
      '\n' +
      'b'
  expect(day6.solvePart1(input)).toEqual(11);
});


test('day6 part2', () => {
  input =
      'abc\n' +
      '\n' +
      'a\n' +
      'b\n' +
      'c\n' +
      '\n' +
      'ab\n' +
      'ac\n' +
      '\n' +
      'a\n' +
      'a\n' +
      'a\n' +
      'a\n' +
      '\n' +
      'b'
  expect(day6.solvePart2(input)).toEqual(6);
});