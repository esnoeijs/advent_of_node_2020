function countDistinctAnswersSomeoneGave(answerBlockInput) {
  let answers = [];
  for (let answer of answerBlockInput.replace(/\s+/gs,'')) {
    answers[answer] = true;
  }

  return Object.keys(answers).length
}

function countDistinctAnswersEveryoneGave(answerBlockInput) {
  let answersPerPerson = answerBlockInput.split("\n").map( personAnswers => personAnswers.split(""));
  // the answers of each person must be included in the answers of each other person.
  let set = answersPerPerson.reduce((set, answers) => set.filter(answer => answers.includes(answer)), answersPerPerson[0]);
  return Object.keys(set).length
}

module.exports.solvePart1 = (input) => {
  return input.split("\n\n").map(answerBlock => countDistinctAnswersSomeoneGave(answerBlock)).reduce((sum, value) => sum += value, 0);
}

module.exports.solvePart2 = (input) => {
  return input.split("\n\n").map(answerBlock => countDistinctAnswersEveryoneGave(answerBlock)).reduce((sum, value) => sum += value, 0);
}
