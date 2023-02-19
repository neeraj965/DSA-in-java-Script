// Title Case a Sentence

// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.


function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle){
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  
  const res = titleCase("I'm a little tea pot");
  console.log(res)