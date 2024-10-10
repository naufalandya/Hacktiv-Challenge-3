// Naufal Andya Faiz

function isArithmeticSequence(arr) {
    if (arr.length < 2) return true;
    
    const diff = arr[1] - arr[0];
    
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== diff) {
        return false;
      }
    }
    
    return true;
  }
  
  console.log(isArithmeticSequence([2, 4, 6, 8]));  
  console.log(isArithmeticSequence([2, 4, 6, 9])); 
  console.log(isArithmeticSequence([5, 10, 15, 20])); 
  