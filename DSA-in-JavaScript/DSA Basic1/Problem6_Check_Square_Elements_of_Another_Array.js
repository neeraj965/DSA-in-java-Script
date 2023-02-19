// Checking Square in another array
// arr1={1,2,3,4} , arr2={1,9,4,16}
// 

function isSquareCheck(array1,array2){
    let isSquare
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array1[i] * array1[i] === array2[j]){
                isSquare=true;
            }
            if(j === array2.length-1){
                if(!isSquare){
                    return false;
                }
            }
        }
    }
    return true;
  }
  const result=isSquareCheck([1,2,3,4],[1,9,4,16]);
  console.log(result)

// time complexity O(n^2)


  // Another method
// arr1={1,2,3,4}, arr2={1,9,4,16} - Case 1
// arr1={1,2,4,2}, arr2={1,4,4,16} - Case 2

// map1={1:1,2:2,4:1}
// map2={1:1,4:2,16:1}

function isSquare(array1, array2){
    let map1={};
    let map2={};
  let item;
  let item1;
    for(item of array1){
        map1[item] = (map1[item] || 0) + 1; 
    }
    // console.log("Map1",map1);
    for(item1 of array2){
        map2[item1]=(map2[item1] || 0) + 1;
    }
    // console.log("Map2",map2);
  
  for(let key in map1){
    // console.log("Key", key)
    if(!map2[key * key]){
        return false;
    }
    if (map1[key] !== map2[key * key]){
        return false;
    }
  }
  return true;
  }
  
  const res=isSquare([1,2,4,2],[1,4,4,16]);
  console.log(res)
  
  // TC O(n)