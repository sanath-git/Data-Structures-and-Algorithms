const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const addresses = [{ id: 1, address: { city: "NY", country: "USA" } }];

function mergerLists(users, addresses) {
  const map = {};
  for (let user of users) {
    if (!map[user.id]) map[user.id] = {};
    map[user.id] = { ...user, address: { city: null, country: null } };
  }

  for (const address of addresses) {
    map[address.id] = { ...map[address.id], ...address };
  }
  return Object.values(map);
}

console.log(mergerLists(users, addresses));

// [
//   {
//     id: 1,
//     name: "Alice",
//     address: { city: "NY", country: "USA" }
//   },
//   {
//     id: 2,
//     name: "Bob",
//     address: { city: null, country: null } // defaults
//   }
// ]
