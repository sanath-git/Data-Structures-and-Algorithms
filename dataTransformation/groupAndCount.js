const data = [
  { name: "Alice", category: "A" },
  { name: "Bob", category: "B" },
  { name: "Alice", category: "A" },
  { name: "Charlie", category: "A" },
  { name: "Bob", category: "B" }
];


const result = {};

for(let obj of data) {
    const firstLetter = obj.name[0];
    if(!result[firstLetter]) result[firstLetter] = {};
    result[firstLetter][obj.name] = (result[firstLetter][obj.name] || 0) + 1;
}

console.log(result);

// {
//   A: {
//     Alice: 2,
//     Charlie: 1
//   },
//   B: {
//     Bob: 2
//   }
// }
