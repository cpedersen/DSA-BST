// Binary search trees take the concept of binary trees
// 1 step further. All of the nodes in the left-hand
// branch of a node are guaranteed to have lower values
// than the node itself, and all of the nodes in the
// right-hand branch of a node are guaranteed to have a
// higher value than the node itself.

// Write an algorithm to check whether an arbitrary binary
// tree is a binary search tree, assuming the tree does
// not contain duplicates.

const BST = require("./03-bstClass");

const isItBST = function (t) {
  if (!t) {
    return true;
  }

  const findMin = function (t) {
    if (!t.left) {
      return t.key;
    }
    return findMin(t.left);
  };

  const findMax = function (t) {
    if (!t.right) {
      return t.key;
    }
    return findMax(t.right);
  };

  if (t.left) {
    if (findMax(t.left) > t.key) {
      return false;
    }
  }

  if (t.right) {
    if (findMin(t.right) < t.key) {
      return false;
    }
  }

  if (!isItBST(t.left) || !isItBST(t.right)) {
    return false;
  }
  return true;
};

const tree = new BST();
let numbersBST = [3, 1, 4, 6, 9, 2, 5, 7];
for (let value of numbersBST) {
  tree.insert(value, null);
}
console.log(isItBST(tree));
