const input = parseInt(require("fs").readFileSync("input.txt"));

for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
