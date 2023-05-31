class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const originalTree = new Node(1);
originalTree.left = new Node(2);
originalTree.left.left = new Node(4);
originalTree.left.right = new Node(5);
originalTree.right = new Node(3);
originalTree.right.left = new Node(6);
originalTree.right.right = new Node(7);

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
