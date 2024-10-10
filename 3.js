// Naufal Andya Faiz

function sumArray(arr, target) {
    let result = [];
    let seen = new Set();
    
    for (let num of arr) {
      let complement = target - num;
      
      if (seen.has(complement)) {
        result.push([complement, num]);
      }
      
      seen.add(num);
    }
    
    return result;
  }
  console.log(sumArray([2, 1, 4, 3], 5));        
  console.log(sumArray([1, 8, 10, 3], 11));        
  console.log(sumArray([2, 4, 3, 5, 7, 8, -1], 7)); 
  console.log(sumArray([1, 2, 3, 4, 5], 9));    
  console.log(sumArray([1, 2, 3, 4], 8));        
  