function bubbleSort(array){
  var yourLongness = array.length;
  var completed = false;

  while(completed === false){
    completed = true;

    for(var ii = 0; ii < yourLongness; ii++){
      if(array[ii-1] > array[ii]){
        var holder = array[ii - 1];
        array[ii -1] = array[ii];
        array[ii] = holder;
        completed = false;
      }
    }
  }
  console.log(array);
}


bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]