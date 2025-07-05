const csv = `

name,age,city
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago
`;

const result = [];
const lines = csv.split("\n");
let isFirstLine = true;
const keysArr = [];

for (let line of lines) {
  if (line.trim() === "") continue; // trim to skip lines with just whitespace
  const splitedLine = line.split(",");
  if (isFirstLine) {
    keysArr.push(...splitedLine);
    isFirstLine = false;
  } else {
    const obj = {};
    for (let i = 0; i < splitedLine.length; i++) {
      obj[keysArr[i]] = splitedLine[i];
    }
    result.push(obj);
  }
}

console.log(result);

// [
//   { name: 'Alice', age: '30', city: 'New York' },
//   { name: 'Bob', age: '25', city: 'Los Angeles' },
//   ...
// ]
