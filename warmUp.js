
//function findWaldo(group) {
  //let waldoArray = Array.prototype.find(string = "Waldo")

  //if (waldoArray === true){
    //let foundWaldo = text.replace("Waldo", "Found Waldo")

    //return waldoArray
  //};
//}

//console.log(findWaldo(['Stacy', 'Waldo', 'John']))

function findWaldo(group){

  let newArr = []; 

  for(let i = 0; i < group.length; i++){
    if(group[i]=== "Waldo"){
      newArr.push("I found Waldo!")
    }else{
      newArr.push(group[i])
    }
  }
  return newArr; 
}

findWaldo(['Stacy', 'Waldo', 'John']) 
findWaldo(['Waldo', 'Jimmy', 'James', 'Jamie', 'Waldo']) 