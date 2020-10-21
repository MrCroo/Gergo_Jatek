
const fillMap = (width, height, apples, player) => {
  const arr = new Array(width);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(height);
  }
  return arr;
};

module.exports = {
  fillMap
};
