class BagMap {
  bags = {};

  getBagOrCreate(name) {
    if (false === name in this.bags) {
      this.bags[name] = new Bag(name);
    }

    return this.bags[name];
  }
}

class Bag {
  name;
  contains = {};
  containedBy = [];

  constructor(name) {
    this.name = name;
  }

  setContains(qty, bag) {
    this.contains[bag.name] = qty;
  }

  setContainedBy(bag) {
    this.containedBy.push(bag);
  }
}

function buildBagMap(input) {
  let bagMap = new BagMap();

  const matchBag = new RegExp(/(?<name>.*?) bags contain (?<contain>.*)$/);
  const matchBagContents = new RegExp(/(?<amount>\d) (?<name>.*?) bag/g);
  input.split("\n").reduce((map, rule) => {
    let ruleMatches = rule.match(matchBag);
    if (!ruleMatches.groups.name) {
      throw Error(`Unparsable bag definition ${rule}`)
    }

    let containMatches = ruleMatches.groups.contain.matchAll(matchBagContents);
    if (!containMatches) {
      throw Error(`Unparsable contain definition "${rule}"`)
    }

    let outerBag = bagMap.getBagOrCreate(ruleMatches.groups.name);
    for (const matches of containMatches) {
      let innerBag = bagMap.getBagOrCreate(matches.groups.name);
      innerBag.setContainedBy(outerBag);
      outerBag.setContains(matches.groups.amount, innerBag);
    }
  }, {})
  return bagMap;
}

module.exports.solvePart1 = (input) => {
  let bagMap = buildBagMap(input);

  let visitList = bagMap.getBagOrCreate('shiny gold').containedBy;
  let seen = {};
  while (visitList.length > 0) {
    let viewBag = visitList.pop();
    seen[viewBag.name] = true;
    visitList = visitList.concat(viewBag.containedBy.filter(x => false === x.name in seen));
  }

  return Object.keys(seen).length;
}

module.exports.solvePart2 = (input) => {
  let bagMap = buildBagMap(input);
  let viewList = [bagMap.getBagOrCreate('shiny gold')];
  let bagCount = -1; // -1 to only count bags inside the shiny gold bag.
  while (viewList.length > 0) {
    let viewBag = viewList.pop();
    bagCount++;

    for (const [key, value] of Object.entries(viewBag.contains)) {
      for (let i=0; i< value; i++) {
        viewList.push(bagMap.getBagOrCreate(key));
      }
    }
  }

  return bagCount;
}