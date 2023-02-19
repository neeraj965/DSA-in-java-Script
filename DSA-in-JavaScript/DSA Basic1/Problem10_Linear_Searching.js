// Linear Search Alogorithm


const users=[{username:"Tanish",email:"tanishchaurasia6@gmail.com"},
{username:"abc",email:"abc@gmai.com"},
{username:"xyz", email:"xyz@gmail.com"},
]

function isuserExit(array,val){
    for(let item of array){
        if(item['username']=== val){
            return true;
        }
    }
    return false;
}
const res =isuserExit(users,"abc");
console.log(res)