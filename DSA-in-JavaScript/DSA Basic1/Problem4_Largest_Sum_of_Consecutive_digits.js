// [1,2,3,4,3,5,4,6,7,8] => Total elements - 10
// Count Largest sum of consecutive Digits
// num = 4
// sum => 25

// conditions
// num > array -> error message
// 10 - 4 + 1 => 7

function findLargest(array, num){
    if(num>array){
        throw new Error("num is not greater than array")
    }else{
        let max=0;
        for(let i=0; i<array.length - num +1;i++){
            let tmp=0;
            for(let j=0;j<num;j++){
                console.log("i"+i+"j"+j)
                tmp+=array[i+j];
            }
            if(tmp > max){
                max=tmp;
            }
        }
        return max;
    }
}

const result = findLargest([1,2,3,4,3,5,4,6,7,8],4);
console.log("result", result)