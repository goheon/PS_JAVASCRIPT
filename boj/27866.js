const input = require("fs").readFileSync("input.txt").toString().split("\n");
console.log(input[0][Number(input[1]) - 1]);
