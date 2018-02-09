function transposeTwoStrings(arr) {

  let output = "";
  let new_string = "";
  let a = "";
  let b = "";
  let max = 0;
  for (var z = 0; z < arr.length; z++) {
    if (arr[z].length > max) {
      max = arr[z].length
    }
  }
  // let num_words = arr.length;

  for (var i = 0; i < max; i++) {
    a = arr[0].charAt(i);
    b = arr[1].charAt(i);
    if (a == "") {
      a = " "
    } else if (b == "") {
      b = " "
    };
    if (i == max - 1) {
      new_string = a + " " + b;
      output += new_string;
    } else {
      new_string = a + " " + b + "\n";
      output += new_string;
    }
  }

  console.log(output);
  return output;
}

transposeTwoStrings(['Hello', 'Worlds']);

/*
function transposeTwoStrings(arr){
  var result = [];
  var len = Math.max(arr[0].length, arr[1].length);

  for (var i = 0; i < len; i++) {
    var column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
    result.push(column);
  }

  return result.join("\n");
}
*/