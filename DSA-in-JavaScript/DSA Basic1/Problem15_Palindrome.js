// How do you check if a given string is a Palindrome

// dad -> dad -> true
// level -> level -> true
// ajay -> yaja -> false
// noon ->  noon -> true
// 121 -> 121

// Case 1

function isPal(str){
    let reverse= str.split("").reverse().join("");
    return str.toLowerCase() === reverse.toLowercase();
}
console.log(isPal("level"));

// Case 2

function isPal2(str){
    let newStr = str.toLowerCase();
    let left=0;
    let right=newStr.length -1;

    while (left < right){
        if(newStr[left] !== newStr[right])
        return false;
        left++;
        right--;
    }
    return true;
}
console.log(isPal2("dad"));