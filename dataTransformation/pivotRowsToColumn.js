const data = [
  { name: "Alice", subject: "Math", score: 90 },
  { name: "Alice", subject: "Science", score: 85 },
  { name: "Bob", subject: "Math", score: 88 },
  { name: "Bob", subject: "Science", score: 80 }
];

function pivotRowToColumn(){
    const map = {};

    for(const line of data) {
        if(!map[line.name]) map[line.name] = {name: line.name};
        const key = line.subject;

        map[line.name][key] = line.score;
    }
    return Object.values(map);
}

console.log(pivotRowToColumn())

// [
//   { name: "Alice", Math: 90, Science: 85 },
//   { name: "Bob", Math: 88, Science: 80 }
// ]
