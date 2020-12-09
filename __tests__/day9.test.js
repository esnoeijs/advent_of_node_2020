const day9 = require('../src/day9')

test('day9 part1', () => {
    const input =
        '35\n' +
        '20\n' +
        '15\n' +
        '25\n' +
        '47\n' +
        '40\n' +
        '62\n' +
        '55\n' +
        '65\n' +
        '95\n' +
        '102\n' +
        '117\n' +
        '150\n' +
        '182\n' +
        '127\n' +
        '219\n' +
        '299\n' +
        '277\n' +
        '309\n' +
        '576'

    expect(day9.solvePart1(input, 5)).toEqual(127);
});

test('day9 part2', () => {
    const input =
        '35\n' +
        '20\n' +
        '15\n' +
        '25\n' +
        '47\n' +
        '40\n' +
        '62\n' +
        '55\n' +
        '65\n' +
        '95\n' +
        '102\n' +
        '117\n' +
        '150\n' +
        '182\n' +
        '127\n' +
        '219\n' +
        '299\n' +
        '277\n' +
        '309\n' +
        '576'

    expect(day9.solvePart2(input, 5)).toEqual(62);
});