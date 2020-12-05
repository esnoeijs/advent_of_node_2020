function solveBSP(sequence) {
  let range = [0, (Math.pow(2, sequence.length)) - 1];
  for (let side of sequence) {
    let selection = Math.ceil((range[1] - range[0]) / 2);
    if (side === 1) {
      range[1] -= selection;
    } else {
      range[0] += selection;
    }
  }

  return range[0];
}

function calculateSeatID(boardingPassCode) {
  if (boardingPassCode.length !== 10) {
    return 0;
  }

  const row = solveBSP(boardingPassCode.slice(0, 7).split('').map(x => x === 'F' ? 1 : 0));
  const col = solveBSP(boardingPassCode.slice(7).split('').map(x => x === 'L' ? 1 : 0));

  return (row * 8) + col;
}

function findGapsInSequence(sequence) {
  sequence.sort((a,b) => a - b);
  let gaps = [];
  for (let i = 0; i < sequence.length - 1; i++) {
    let curr = sequence[i];
    let peak = sequence[i+1];

    if (curr+1 !== peak) {
      gaps.push(curr+1);
    }
  }

  return gaps;
}

module.exports.solvePart1 = (input) => {
  return Math.max(...input.split('\n').map(boardingPassCode => calculateSeatID(boardingPassCode)));
}

module.exports.solvePart2 = (input) => {
  const seats = input.split('\n').map(boardingPassCode => calculateSeatID(boardingPassCode));
  return findGapsInSequence(seats);
}
