// Write an algorithm to find the 3rd largest
// node in a binary search tree.

const BST = require("./03-bstClass");
const thirdLargestNode = function (t) {
  let ordered = [];
  function orderItems(t) {
    if (t) {
      orderItems(t.left);
      ordered.push(t.key);
      orderItems(t.right);
    }
  }
  orderItems(t);
  console.log("ordered: ", ordered);
  return ordered.slice(-3, -2)[0];
};

const tree1 = new BST();
let numbersBST = [3, 1, 4, 6, 9, 2, 5, 7];
for (let value of numbersBST) {
  tree1.insert(value, null);
}
console.log(thirdLargestNode(tree1));

const tree2 = new BST();
values = ["E", "A", "S", "Y", "Q", "U", "E", "S", "T", "I", "O", "N"];
for (let value of values) {
  tree2.insert(value, null);
}
console.log(thirdLargestNode(tree2));
