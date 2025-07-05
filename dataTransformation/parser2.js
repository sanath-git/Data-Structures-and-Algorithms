const data = [
  { name: "John", item: "apple", quantity: 2 },
  { name: "Jane", item: "apple", quantity: 3 },
  { name: "John", item: "orange", quantity: 1 },
  { name: "Jane", item: "orange", quantity: 1 },
  { name: "John", item: "apple", quantity: 1 },
];
const res = {};

for (const obj of data) {
  if (!res[obj.name]) res[obj.name] = {};
  res[obj.name][obj.item] =
    (res[obj.name][obj.item] || 0) + obj.quantity;
}
console.log("res", res);

// {
//   John: { apple: 3, orange: 1 },
//   Jane: { apple: 3, orange: 1 }
// }
