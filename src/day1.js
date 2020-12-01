module.exports.solvePart1 = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const valueA = input[i];
      const valueB = input[j];

      if (valueA + valueB === 2020) {
        return valueA * valueB;
      }
    }
  }

  return 0;
}

module.exports.solvePart2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = j + 1; k < input.length; k++) {
        const valueA = input[i];
        const valueB = input[j];
        const valueC = input[k];

        if (valueA + valueB + valueC === 2020) {
          return valueA * valueB * valueC;
        }
      }
    }
  }

  return 0;
}