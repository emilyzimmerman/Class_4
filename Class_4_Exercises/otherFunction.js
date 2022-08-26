function countTrue(Increments){

  
    for(let i = 0; i < Increments.length; i++){
      if(Increments[i]=== true){
        Increments++; 
        return Increments[i]

      }else{
        return 0; 
      }
    } 
  }
  
  countTrue([true, false, false, true, false]) 