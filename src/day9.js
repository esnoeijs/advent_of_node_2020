function calculateValidValues(preamble) {
    let validValues = {};
    for (let i = 0; i < preamble.length; i++) {
        for (let j = i + 1; j < preamble.length; j++) {
            validValues[preamble[i] + preamble[j]] = true;
        }
    }

    return validValues;
}

function findFirstWeakNumber(values, preambleLength) {
    for (let i = preambleLength; i < values.length; i++) {
        const value = values[i];
        const preamble = values.slice(i - preambleLength, i);

        if (calculateValidValues(preamble)[value] !== true) {
            return value;
        }
    }
}

module.exports.solvePart1 = (input, preambleLength) => {
    const values = input.split("\n").map(x => parseInt(x));
    return findFirstWeakNumber(values, preambleLength);
}

module.exports.solvePart2 = (input, preambleLength) => {
    const values = input.split("\n").map(x => parseInt(x));
    const weakNumber = findFirstWeakNumber(values, preambleLength);
    let weakList = [];

    let sum = 0;
    do {
        weakList.push(values.shift());
        sum = weakList.reduce((sum, x) => sum += x);

        while (sum > weakNumber) {
            weakList.shift();
            sum = weakList.reduce((sum, x) => sum += x);
        }

        if (values.length === 0) {
            break;
        }
    } while (sum !== weakNumber)

    weakList.sort()

    return weakList.shift() + weakList.pop()
}