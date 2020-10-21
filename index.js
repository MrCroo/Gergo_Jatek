// import tableImport from 'table';

const { fillMap, drawMap } = require('./map');

const width = 10;
const height = 20;

let map = [];
const apples = [];
const player = { pos: { x: 1, y: 1 }, score: 0 };

map = fillMap(width, height, apples, player);

drawMap(map);
