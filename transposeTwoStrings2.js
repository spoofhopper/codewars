function transposeTwoStrings(arr) {

  let output = [];
  let max = 0;
  for (var z = 0; z < arr.length; z++) {
    if (arr[z].length > max) {
      max = arr[z].length
    }
  }
  let num_words = arr.length;

  for (var i = 0; i < num_words; i++) {
    for (var j = 0; j < max; j++) {
      output.push(arr[i].charAt[j] + arr[i + 1].charAt[j])
    }
  }



  console.log(output);
  return output;
}
transposeTwoStrings(['Hello', 'Worlds']);