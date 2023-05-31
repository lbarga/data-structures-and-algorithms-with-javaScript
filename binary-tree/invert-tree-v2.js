const originalTree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: null, right: null },
    right: { value: 5, left: null, right: null },
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: { value: 7, left: null, right: null },
  },
};

function invertTree(tree) {
  if (tree === null) {
    return null;
  }

  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;

  invertTree(tree.left);
  invertTree(tree.right);

  return tree;
}

function inOrder(tree) {
  if (tree === null) {
    return;
  }

  inOrder(tree.left);
  console.log(tree.value);
  inOrder(tree.right);
}

function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const clonedTree = cloneObject(originalTree);

const invertedTree = invertTree(clonedTree);

console.log("original tree: ");
console.log(originalTree);
console.log("");
inOrder(originalTree);

console.log("======================");

console.log("invertedTree tree: ");
console.log(invertedTree);
console.log("");
inOrder(invertedTree);
