function buildPassports(input)
{
  return input
    .split("\n\n")
    .map(
      inputPassport => inputPassport
        .replace(/\s+/g,' ')
        .split(" ")
        .map(inputAttribute => inputAttribute.split(':'))
        .reduce(
          (passport, attribute) => {
            passport[attribute[0]] = attribute[1]
            return passport;
          },
          {}
        )
    );
}

const validationFunctions = {
  'required': (value, _) => value !== undefined,
  'regex': (value, regex) => new RegExp(regex).test(value),
  'range': (value, [min, max]) => value >= min && value <= max,
  'func': (value, func) => func(value)
}

function validPassport(passport, filter)
{
  for (let field in filter.fieldRules) {
    let fieldRules = filter.fieldRules[field];
    for (let rule in fieldRules) {
      if (rule in validationFunctions) {
        if (false === validationFunctions[rule](passport[field], fieldRules[rule])) {
          return false;
        }
      }
    }
  }

  return true;
}

module.exports.solvePart1 = (input) => {
  const validPassportFields = {
    fields: ['byr','iyr','eyr','hgt','hcl','ecl','pid'],
    fieldRules: {
      byr: {required: true },
      iyr: { required: true },
      eyr: { required: true },
      hgt: { required: true },
      hcl: { required: true },
      ecl: { required: true },
      pid: { required: true },
    }
  }
  return buildPassports(input).filter(passport => validPassport(passport, validPassportFields)).length;
}

module.exports.solvePart2 = (input) => {
  const validPassportFields = {
    fields: ['byr','iyr','eyr','hgt','hcl','ecl','pid'],
    fieldRules: {
      byr: {
        required: true,
        regex: /^\d{4}$/,
        range: [1920, 2002]
      },
      iyr: {
        required: true,
        regex: /^\d{4}$/,
        range: [2010, 2020]
      },
      eyr: {
        required: true,
        regex: /^\d{4}$/,
        range: [2020, 2030]
      },
      hgt: {
        required: true,
        regex: /\d(cm|in)$/,
        func: (value) => {
          let height = parseInt(value);
          switch (value.slice(-2)) {
            case 'cm': return (height >= 150 && height <= 193)
            case 'in': return (height >= 59 && height <= 76)
            default: return false;
          }
        }
      },
      hcl: {
        required: true,
        regex: /^#[a-f0-9]{6}$/
      },
      ecl: {
        required: true,
        regex: /amb|blu|brn|gry|grn|hzl|oth/
      },
      pid: {
        required: true,
        regex: /^[0-9]{9}$/
      }
    }
  }
  return buildPassports(input).filter(passport => validPassport(passport, validPassportFields)).length;
}