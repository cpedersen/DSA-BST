// You are given two arrays which represent two sequences
// of keys that are used to create two binary search trees.
// Write a program that will tell whether the two BSTs will
// be identical or not without actually constructing the tree.
// You may use another data structure such as an array or a
// linked list but don't construct the BST. What is the time
// complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and
// 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will
// create the exact same BSTs and your program should return
// true.

// input:
// [3, 5, 4, 6, 1, 0, 2],
// [3, 1, 5, 2, 4, 6, 0]

// output: true

// If the index 0 in first array does not equal index 0 in second array, false
// If the arrays are of different length, false
// Otherwise sort both arrays and compare to see if they have the same values

const isSameBST = function (arr1, arr2) {
  if (arr1[0] !== arr2[0] || arr1.length !== arr2.length) {
    return false;
  }
  let sorted1 = arr1.concat().sort();
  let sorted2 = arr2.concat().sort();
  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) {
      return false;
    }
  }
  return true;
};

let arr1 = [3, 5, 4, 6, 1, 0, 2];
let arr2 = [3, 1, 5, 2, 4, 6, 0];

console.log(isSameBST(arr1, arr2));

arr1 = [6, 5, 4, 3, 1, 0, 2];
arr2 = [3, 1, 5, 2, 4, 6, 0];
console.log(isSameBST(arr1, arr2));
