// Falsy Bouncer

// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].


function bouncer(arr) {
    let newArray = [];
    for (let i=0; i<arr.length; i++){
      if (arr[i]) newArray.push(arr[i])
    }
    return newArray;
  }
  
const res = bouncer([7, "ate", "", false, 9]);
console.log(res)


//    Sol 2

function bouncer(arr) {
    return arr.filter(Boolean);
  }
const result = bouncer([7, "ate", "", false, 9]);
console.log(result)