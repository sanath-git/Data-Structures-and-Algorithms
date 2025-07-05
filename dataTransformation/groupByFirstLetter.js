const names = ["Alice", "Amanda", "Bob", "Charlie", "Catherine"];

const resultObject = {};
for(let name of names) {
    const firstLetter = name[0];
    if(!resultObject[firstLetter]) resultObject[firstLetter] = [];
    resultObject[firstLetter].push(name);
}
console.log(resultObject);
// {
//   A: ["Alice", "Amanda"],
//   B: ["Bob"],
//   C: ["Charlie", "Catherine"]
// }
