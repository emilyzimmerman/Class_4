function findWaldo(group) {
  let waldoArray = Array.prototype.filter(string => "Waldo")

  if (waldoArray === true){
    let foundWaldo = text.replace("Waldo", "Found Waldo")

    return waldoArray
  };
}

console.log(findWaldo(['Stacy', 'Waldo', 'John']))