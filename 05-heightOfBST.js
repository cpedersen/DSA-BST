// Write an algorithm to find the height
// of a binary search tree. What is the
// time complexity of your algorithm?

const BST = require("./03-bstClass");

const heightBST = function (t) {
  // Exit if no tree
  if (!t) {
    // Base case
    return 0;
  }

  // find sum of left branch
  let leftHeight = heightBST(t.left);
  //console.log("leftHeight: ", leftHeight);
  // find sum of right branch
  let rightHeight = heightBST(t.right);
  //console.log("rightHeight: ", rightHeight);

  // Return the largest value and add 1 for the root node
  const heightTotal = Math.max(leftHeight, rightHeight) + 1;
  console.log("Height: ", heightTotal);
  return heightTotal;
};

const tree = new BST();
let numbersBST = [3, 1, 4, 6, 9, 2, 5, 7, 20, 21, 30];
let x = 0;
for (let value of numbersBST) {
  tree.insert(value, null);
  x++;
}
heightBST(tree);
console.log("tree height: ", tree);
