const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const orders = [
  { id: 1, orders: [1001, 1002] },
  { id: 2, orders: [1003] },
];

const locations = [
  { id: 1, city: "NY" },
  { id: 2, city: "LA" },
];

function mergeLists({ users, orders, locations }) {
  const map = {};
  const mergedList = [...users, ...orders, ...locations];
  const result = [];
  for (let item of mergedList) {
    if (!map[item.id]) map[item.id] = {};
    map[item.id] = { ...map[item.id], ...item };
  }
  for (let key in map) {
    result.push(map[key]);
  }
  return result;
}
console.log(mergeLists({ users, orders, locations }));

// [
//   { id: 1, name: "Alice", orders: [1001, 1002], city: "NY" },
//   { id: 2, name: "Bob", orders: [1003], city: "LA" }
// ]
