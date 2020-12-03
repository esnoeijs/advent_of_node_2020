
function buildMap(input)
{
  let map = [];

  let x = 0;
  let y = 0;
  for (let char of input.split('')) {
    switch (char) {
      case "\n":
        y++
        x=0;
        break;
      case "#":
        map[`${x}-${y}`] = true;
        x++;
        break;
      default:
        x++;
    }
  }

  return {
    map,
    maxX: x,
    maxY: y,
  };
}


function countTreesOnSlop(map, right, down)
{
  x = 0;
  y = 0;
  let trees = 0;
  while (y <= map.maxY) {
    if (`${x}-${y}` in map.map) {
      trees++;
    }

    x += right;
    y += down;

    if (x > map.maxX) {
      x -= map.maxX;
    }
  }

  return trees;
}

module.exports.solvePart1 = (input) => {
  return countTreesOnSlop(buildMap(input),3, 1);
}

module.exports.solvePart2 = (input) => {
  const map = buildMap(input);
  return   [
    countTreesOnSlop(map,1, 1),
    countTreesOnSlop(map,3, 1),
    countTreesOnSlop(map,5, 1),
    countTreesOnSlop(map,7, 1),
    countTreesOnSlop(map,1, 2)
  ].reduce((value, result) => value * result);
}