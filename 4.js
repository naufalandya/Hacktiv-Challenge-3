// Naufal Andya Faiz

function arrSum(arr) {
    let currentSubarraySum = arr[0]; 
    let maxSubarraySum = arr[0];
    let startIndex = 0, endIndex = 0, tempStartIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > currentSubarraySum + arr[i]) {
        currentSubarraySum = arr[i];
        tempStartIndex = i; 
      } else {
        currentSubarraySum += arr[i]; 
      }
  
      if (currentSubarraySum > maxSubarraySum) {
        maxSubarraySum = currentSubarraySum;
        startIndex = tempStartIndex; 
        endIndex = i;
      }
    }
  
    let maxSubarray = arr.slice(startIndex, endIndex + 1);
  
    return [maxSubarray, maxSubarraySum]; 
  }
  
  const array = [-2, -3, 4, -1, -2, 1, 5, -3];
  console.log(arrSum(array));
  