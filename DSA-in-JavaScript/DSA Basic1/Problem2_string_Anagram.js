// String Anagram - Problem 2
// "hello" -> "llheo"

//condition
//length check (for both String)
//String 'hello'
//{h:1,e:1,l:2,o:1} -> {h:0,e:0,l:0,o:0}


function isAnagram(string1,string2){
    if(string1.length!==string2.length){
        return false
    }
    let counter={}
    for(let letter of string1){
      counter[letter]=(counter[letter] || 0) + 1;
    }
    for(let items of string2){
      if(!counter[items]){
        return false;
      }
      counter[items]-=1.
    }
    return true;
  }
  
  const check = isAnagram('hello','llheo');
  console.log(check)

  // linear TC o(n)