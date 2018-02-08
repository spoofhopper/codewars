function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  if (!array.length) {
    return 0;
  };

  let output = array;
  let temp = "";
  console.log(output[0]);

  for (var i = 1; i < array.length; i++) {
    if (array[i].length < output[i - 1].length) {
      temp = output[i - 1];
      console.log("array = " + array);
      console.log("output = " + output);
      output[i - 1] = array[i];
      output[i] = temp;
    }
  }



  return output;
};




sortByLength(["Life", "Beg", "I", "To", "Lives"]);