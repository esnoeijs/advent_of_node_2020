function solveBSP(sequence) {
  let val = 0;
  for (let idx = 1; idx <= sequence.length; idx++) {
    if (sequence[idx-1] === 1) {
      val += Math.pow(2, (sequence.length - idx));
    }
  }

  return val;
}

function calculateSeatID(boardingPassCode) {
  if (boardingPassCode.length !== 10) {
    return 0;
  }

  const row = solveBSP(boardingPassCode.slice(0, 7).split('').map(x => x === 'B' ? 1 : 0));
  const col = solveBSP(boardingPassCode.slice(7).split('').map(x => x === 'R' ? 1 : 0));

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
