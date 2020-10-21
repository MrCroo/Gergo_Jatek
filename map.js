const { table, getBorderCharacters } = require('table');

const fillMap = (width, height, apples, player) => {
  const arr = new Array(height);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(width);
  }
  return arr;
};

const drawMap = (map) => {
  const text = table(map, {
    border: getBorderCharacters('void'),
    columnDefault: {
      paddingLeft: 0,
      paddingRight: 1
    },
    drawHorizontalLine: () => {
      return false;
    }
  }
  );
  console.log(text);
};

module.exports = {
  fillMap,
  drawMap
};
