const flatList = [
  { id: 1, name: "Root", parentId: null },
  { id: 2, name: "Child 1", parentId: 1 },
  { id: 3, name: "Child 2", parentId: 1 },
  { id: 4, name: "Sub Child", parentId: 2 },
];

const result = [];

const idAndNode = {};

function flatListToTree(obj) {
  if (obj.parentId) {
    const node = idAndNode[obj.parentId];
    const nodeToBePushed = { ...obj, children: [], parentId: null };
    node.children.push(nodeToBePushed);
    idAndNode[obj.id] = nodeToBePushed;
  } else {
    const node = { ...obj, children: [], parentId: null };
    idAndNode[obj.id] = node;
    result.push(node);
  }
}

for (let list of flatList) {
  flatListToTree(list);
}

console.log(JSON.stringify(result, null, 2));

// [
//   {
//     id: 1,
//     name: "Root",
//     children: [
//       {
//         id: 2,
//         name: "Child 1",
//         children: [{ id: 4, name: "Sub Child", children: [] }],
//       },
//       {
//         id: 3,
//         name: "Child 2",
//         children: [],
//       },
//     ],
//   },
// ];
