const arr=[8,2,4,1,3];

// Consider 2nd element , arr[1] - Start yhi se hoga..
// 

const sorted=(arr)=>{
    for(let i=1;i<arr.length;i++){
        let cur=arr[i]; 
        let j=i-1;
        while(j>=0 && arr[j]>cur){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=cur;
    }
    return arr;
}
const res = sorted(arr)
console.log(res);