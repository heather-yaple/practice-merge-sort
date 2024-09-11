// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return
  // Base case: arrays with 0 or 1 elements are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort each half and merge them
  return merge(mergeSort(left), mergeSort(right));
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      merged.push(arrA[i]);
      i++;
    } else {
      merged.push(arrB[j]);
      j++;
    }
  }

  while (i < arrA.length) {
    merged.push(arrA[i]);
    i++;
  }

  while (j < arrB.length) {
    merged.push(arrB[j]);
    j++;
  }

  return merged;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}


module.exports = [merge, mergeSort];

