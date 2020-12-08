class Operation {
  constructor(instruction, value) {
    this.instruction = instruction;
    this.value = parseInt(value);
  }
}

class ProgramState {
  position = 0;
  value = 0;
  seenOps = []
}

const programExec = {
  'acc': (state, value) => {
    state.value += value;
    state.position++;
  },
  'jmp': (state, value) => {
    state.position += value;
  },
  'nop': (state, value) => {
    state.position++;
  },
}

function runProgram(operationList) {
  let state = new ProgramState();
  while (true) {
    const operation = operationList[state.position];
    if (false === operation.instruction in programExec) {
      throw Error(`operation "${operation.instruction}" not known`);
    }
    programExec[operation.instruction](state, operation.value);

    if (state.seenOps[state.position] === true || state.position === operationList.length) {
      state.seenOps[state.position] = true;
      return state;
    } else {
      state.seenOps[state.position] = true;
    }
  }
}

function runFixedProgram(operationList) {
  let nopPos = 0;
  while (nopPos < operationList.length) {
    const fixedList = [...operationList];
    fixedList.splice(nopPos, 1, new Operation('nop', -1))
    const state = runProgram(fixedList);

    if (state.seenOps[operationList.length] === true) {
      return state.value;
    }
    nopPos++;
  }
}

module.exports.solvePart1 = (input) => {
  let operations = input.trim().split("\n").map(operationInput => new Operation(...operationInput.split(' ')));

  return runProgram(operations).value
}

module.exports.solvePart2 = (input) => {
  let operations = input.trim().split("\n").map(operationInput => new Operation(...operationInput.split(' ')));

  return runFixedProgram(operations)
}
