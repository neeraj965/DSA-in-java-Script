// Bubble Sort (Sorting..)
// A Sorting Algorithm where the largest value bubble up at the top


function bubbleSort(array){
    for(let i=array.length; i>0; i--){
        let isSwapped;
        for(let j=0; j<i-1;j++){
            if(array[j] > array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]
                isSwapped=true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return array;
}
const res=bubbleSort([5,3,4,1,2,8,6,7]);
console.log(res)