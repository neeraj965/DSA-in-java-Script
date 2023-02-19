// Confirm the ending

//eg:
// confirmEnding("Bastian", "n") should return true.
// confirmEnding("Congratulation", "on") should return true.
// confirmEnding("Connor", "n") should return false.
// confirmEnding("He has to give me a new name", "name") should return true.
// confirmEnding("Open sesame", "same") should return true.
// confirmEnding("Open sesame", "sage") should return false.
// confirmEnding("Open sesame", "game") should return false.



function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
  const res = confirmEnding("Bastian", "n");
  console.log(res)