// Write an algorithm that checks if a BST is balanced
// (i.e., a tree where no 2 leaves differ in distance
// from the root by more than 1).

const BST = require("./03-bstClass");

const isBalanced = function (t) {
  if (!t) {
    return true;
  }

  const heightBST = function (t) {
    // Remove root
    if (!t) {
      return -1;
    }

    // Get heights for left subtrees and right subtrees
    let leftHeight = heightBST(t.left);
    let rightHeight = heightBST(t.right);
    return Math.max(leftHeight, rightHeight) + 1;
  };

  // Check right side
  if (!t.left && t.right) {
    if (heightBST(t.right) > 1) {
      return false;
    }
  }

  // Check left side
  if (t.left && !t.right) {
    if (heightBST(t.left) > 1) {
      return false;
    }
  }

  // Check both sides
  if (t.left && t.right) {
    // Only want a positive number
    if (Math.abs(heightBST(t.left) - heightBST(t.right)) > 1) {
      return false;
    }
  }

  if (!isBalanced(t.left) || !isBalanced(t.right)) {
    return false;
  }

  return true;
};

const tree1 = new BST();
let numbersBST = [3, 1, 4, 6, 9, 2, 5, 7];
for (let value of numbersBST) {
  tree1.insert(value, null);
}
console.log(isBalanced(tree1));

const tree2 = new BST();
values = ["E", "A", "S", "Y", "Q", "U", "E", "S", "T", "I", "O", "N"];
for (let value of values) {
  tree2.insert(value, null);
}
console.log(isBalanced(tree2));

const tree3 = new BST();
values = ["4", "3", "6"];
for (let value of values) {
  tree3.insert(value, null);
}
console.log(isBalanced(tree3));
