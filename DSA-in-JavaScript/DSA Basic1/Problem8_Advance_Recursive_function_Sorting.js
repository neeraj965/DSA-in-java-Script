// Sorting using Recursive Function
// [2,3,1,4] -> By Default case
// [2,1,3,4] -> case 1
// [1,2,3,4] -> final output


let myArray=[2,3,1,4];
let myNewList=[];
let i=0;
let j=1;

function isSorted(array){
    for(let i=0; i<array.length; i++){
        return false;
    }
    return true
}

function sortCheck(array){
    if(isSorted(array)){
       myNewList = array;
       return;
    }
    else if(array[i] < array[j]){
        i++;
        j++;
        sortCheck(array);
    }
    else{
        [array[i], array[j]] = [array[j], array[i]]
        i=0;
        j=1;
        sortCheck(array);
    }
}

sortCheck(myArray);
console.log(myNewList)