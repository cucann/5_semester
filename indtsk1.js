//. Поиск второго по величине элемента массива. Найдите второй по величине
//элемент массива чисел. 

function findSecondLargest(arr) {
  
    let uniqueArr = [...new Set(arr)];
    
    
    if (uniqueArr.length < 2) {
      return null; 
    }
  
    
    uniqueArr.sort((a, b) => b - a);
    
   
    return uniqueArr[1];
  }
  
  
  const numbers = [3, 5, 7, 5, 3, 8, 10, 10];
  const secondLargest = findSecondLargest(numbers);
  console.log("Второй по величине элемент: " + secondLargest);
  