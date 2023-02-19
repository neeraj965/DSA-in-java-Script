// Count Unique Numbers
//
// [1,2,2,3,3,4,4,5,6,7,8,8]
// output-> 8
//conditions
// i=0, j=0
//arrray[i]!==arrat[j]
//1. i++
//2. array[i]=array=[j]

function countUnique(array){
    if(array.length>0){
        let i=0;
        for(let j=1;j<array.length;j++){
            if(array[i]!==array[j]){
                i++;
                array[i]=array[j];
            }
        }
        return i+1;
    }else{
        throw new Error("Array is Empty");

    }
}
const result = countUnique([1,2,2,3,3,4,4,5,6,7,8,8]);
console.log(result);

// o(n) linear time complexity