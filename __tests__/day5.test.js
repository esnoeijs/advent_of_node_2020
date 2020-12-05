const day5 = require('../src/day5')

test('day5 part1', () => {
  expect(day5.solvePart1('FBFBBFFRLR')).toEqual(357);
  expect(day5.solvePart1('BFFFBBFRRR')).toEqual(567);
  expect(day5.solvePart1('FFFBBBFRRR')).toEqual(119);
  expect(day5.solvePart1('BBFFBBFRLL')).toEqual(820);

  const input =
    'BFFFBBFRRR\n' +
    'FFFBBBFRRR\n' +
    'BBFFBBFRLL\n';
  expect(day5.solvePart1(input)).toEqual(820);
});
