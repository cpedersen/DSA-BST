const BST = require("./03-bstClass");

function main() {
  let tree1 = new BST();
  let values = [3, 1, 4, 6, 9, 2, 5, 7];
  for (let value of values) {
    tree1.insert(value, null);
  }
  console.log("tree of numbers: ", tree1);
  console.log("---------------------------------------");

  values = ["E", "A", "S", "Y", "Q", "U", "E", "S", "T", "I", "O", "N"];
  let tree2 = new BST();
  for (let value of values) {
    tree2.insert(value, null);
  }
  console.log("tree of letters: ", tree2);
}

main();
