const day8 = require('../src/day8')

test('day8 part1', () => {
  const input =
    'nop +0\n' +
    'acc +1\n' +
    'jmp +4\n' +
    'acc +3\n' +
    'jmp -3\n' +
    'acc -99\n' +
    'acc +1\n' +
    'jmp -4\n' +
    'acc +6\n'

  expect(day8.solvePart1(input)).toEqual(5);
});

test('day8 part2', () => {
  const input =
    'nop +0\n' +
    'acc +1\n' +
    'jmp +4\n' +
    'acc +3\n' +
    'jmp -3\n' +
    'acc -99\n' +
    'acc +1\n' +
    'jmp -4\n' +
    'acc +6\n'

  expect(day8.solvePart2(input)).toEqual(8);
});