// Find the maximum occuring character in given String?

function getCharString(str){

    const map={}
    str.split("").forEach(element => {
        map[element]=map[element]?map[element]+1:1;
    });
    let char;
    let max=1;
    char=str[0];
    for(let k in map){
        if(map[k] > max){
            max=map[k];
            char=k;
        }
    }
    return char;
}

const res = getCharString("Hello World");
console.log(res);


// Hello World
// Output -> l