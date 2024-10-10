// Naufal Andya Faiz

function threeStepsAB(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' && str[i + 4] === 'b') {
        return true;
      }
      
      if (str[i] === 'b' && str[i + 4] === 'a') {
        return true;
      }
    }
    
    return false;
  }
  
  console.log(threeStepsAB("kamu cantik"));  
  console.log(threeStepsAB("kamu keren banget"));   
  console.log(threeStepsAB("aku anak baik"));   
  console.log(threeStepsAB("lane borrowed"));   
  console.log(threeStepsAB("you are boring")); 
  console.log(threeStepsAB("barbarossa"));     
  console.log(threeStepsAB("bacon and meat"));  
  console.log(threeStepsAB("bacon and meat"));   
 

