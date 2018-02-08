function transposeTwoStrings(arr) {

  let rows = 0;
  for (var z = 0; z < arr.length; z++) {
    if (arr[z].length > rows) {
      rows = arr[z].length
    }
  }
  let columns = arr.length;
  // string[][] output = new string[rows][columns];
  let output = [
    [],
    []
  ];
  console.log(rows);
  console.log(columns);



  for (var x = 0; x < columns; x++) {
    for (var y = 0; y < rows; y++) {

      for (var a = 0; a < arr.length; a++) {

        let current_word = arr[a].split("");
        for (var i = current_word.length - 1; i > 0; i--) {
          current_word.splice(i, 0, " ");
        }
        output[x][y] = current_word[x];
      }

    }
  }







  console.log(output);
  return output;

}
transposeTwoStrings(['Hello', 'Worlds']);