function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  let output = [];
  let temp = 0;

  if (!array.length) {
    return 0;
  };

  output.push(array[0]);
  console.log("0 = " + array[0]);
  console.log(output);

  for (var i = 1; i < array.length; i++) {
    console.log("i:" + i + " = " + array[i]);

    for (var j = 0; j < output.length; j++) {
      console.log("j:" + j + " = " + output[j]);
      if (array[i].length <= output[j].length) {
        console.log(array[i] + " < " + output[j]);
        output.splice(j, 0, array[i]);
      }
      console.log("j: " + j + "| output.length = " + output.length);
    }
    if (output.length < array.length) {
      output.push(array[i]);
      j++;
    }
    console.log(output);
  }

  return output;
};

sortByLength(["Beg", "Life", "I", "To", "Lives"]);