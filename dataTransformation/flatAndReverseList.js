const flat = [
  { id: 1, name: 'Root 1', parentId: null },
  { id: 2, name: 'Child 1.1', parentId: 1 },
  { id: 3, name: 'Child 1.2', parentId: 1 },
  { id: 4, name: 'SubChild 1.1.1', parentId: 2 },
  { id: 5, name: 'SubChild 1.1.2', parentId: 2 },
  { id: 6, name: 'SubChild 1.2.1', parentId: 3 },
  { id: 7, name: 'Leaf 1.1.1.1', parentId: 4 },
  { id: 8, name: 'Leaf 1.1.2.1', parentId: 5 },
  { id: 9, name: 'Leaf 1.2.1.1', parentId: 6 },

  { id: 10, name: 'Root 2', parentId: null },
  { id: 11, name: 'Child 2.1', parentId: 10 },
  { id: 12, name: 'Child 2.2', parentId: 10 },
  { id: 13, name: 'SubChild 2.1.1', parentId: 11 },
  { id: 14, name: 'SubChild 2.2.1', parentId: 12 },
  { id: 15, name: 'Leaf 2.1.1.1', parentId: 13 },
  { id: 16, name: 'Leaf 2.2.1.1', parentId: 14 },

  { id: 17, name: 'Root 3', parentId: null },
  { id: 18, name: 'Child 3.1', parentId: 17 },
  { id: 19, name: 'Child 3.2', parentId: 17 },
  { id: 20, name: 'Leaf 3.1.1', parentId: 18 },
  { id: 21, name: 'Leaf 3.2.1', parentId: 19 },
];


// [
//   {
//     id: 1,
//     name: 'Root',
//     parentId: null,
//     children: [
//       {
//         id: 2,
//         name: 'Child',
//         parentId: 1,
//         children: []
//       }
//     ]
//   }
// ]

function convertListToTree(lists) {
  const idToNode = {};
  const result = [];

  // Create a lookup map for all nodes
  for (const list of lists) {
    idToNode[list.id] = { ...list, children: [] };
  }

  // Link children to their parents
  for (const list of lists) {
    const node = idToNode[list.id];
    if (list.parentId) {
      const parent = idToNode[list.parentId];
      parent.children.push(node); // ✅ add actual child node to parent's children
    } else {
      result.push(node); // Root node
    }
  }

  return result;
}

function convertTreeToList(tree) {
  const result = [];
  function processTree(processedTree) {
    for (const item of processedTree) {
      if (item.children.length) {
        processTree(item.children);
      }
      delete item.children;
      result.push(item);
    }
  }
  processTree(tree);
  return result;
}

const tree = convertListToTree(flat);
console.log('tree', JSON.stringify(tree, null, 5));

console.log(convertTreeToList(tree));
