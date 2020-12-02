const ruleRegex = new RegExp("(?<a>[0-9]+)-(?<b>[0-9]+) (?<char>[a-z])");

function parseInputString(input) {
  let [ruleInput, password] = input.split(':').map(x => x.trim());
  let {a, b, char} = ruleRegex.exec(ruleInput).groups;

  return {
    rule: {
      a: parseInt(a),
      b: parseInt(b),
      char
    },
    password
  };
}

function testSledRentalRule(rule, password) {
  const counter = Array.from(password).filter(char => char === rule.char).length
  return counter >= rule.a && counter <= rule.b;
}

function testTobogganRule(rule, password) {
  return 1 === [rule.a, rule.b].map(pos => password[pos -1]).filter(char => char === rule.char).length
}

module.exports.solvePart1 = (input) => {
  return input
    .map(x => parseInputString(x))
    .filter(x => testSledRentalRule(x.rule, x.password))
    .length;
}

module.exports.solvePart2 = (input) => {
  return input
    .map(x => parseInputString(x))
    .filter(x => testTobogganRule(x.rule, x.password))
    .length;
}