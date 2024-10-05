// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
    // Edge case: if array is empty, return false
    if (arr.length === 0) return false;
  
    // Initialize two pointers
    let left = 0;
    let right = arr.length - 1;
  
    // Loop through the array using the two pointers
    while (left < right) {
      // Calculate the average of the pair
      let avg = (arr[left] + arr[right]) / 2;
  
      if (avg === targetAvg) {
        return true; // Found a pair
      } else if (avg < targetAvg) {
        left++; // Move the left pointer to increase the average
      } else {
        right--; // Move the right pointer to decrease the average
      }
    }
  
    // If no pair found, return false
    return false;
  }