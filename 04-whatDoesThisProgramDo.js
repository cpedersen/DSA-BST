// Without running this code in your code editor, explain
// what the following program does. Show with an example
// the result of executing this program. What is the
// runtime of this algorithm?

// Function accepts tree as arg
function tree(t) {
  // If no tree, then stop
  if (!t) {
    return 0;
  }
  // Recursively add left branch of tree function.
  // Recursively add right branch of tree function.
  // Return sum of tree values.
  return tree(t.left) + t.value + tree(t.right);
}

// This program provides a total of all of the values in a tree.
// It does this with a recursive add of all of the children from the left
// and right subtrees of the parent.

//             10
//           /    \
//          8      12
//         / \     / \
//        6   9   11  15

// Recursively add each branch until reaching null:
// (6 + null = 6) + 8 + (9 + null = 9) + 10 + (11 + null = 11) + 12 + (15 + null = 15) = 71

// Complexity is 0(log(n)) or logarithmic.
