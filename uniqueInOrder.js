var uniqueInOrder = function(iterable) {
  //your code here - remember iterable can be a string or an array

  let output = [];
  if (!iterable) {
    return output;
  }

  iterable = (typeof iterable == 'string') ? iterable.split('') : iterable;
  // iterable.sort();


  let counter = 0;
  output.push(iterable[0]);
  // console.log(iterable);

  for (let i = 1; i < iterable.length; i++) {
    // console.log("iterable: " + iterable);
    // console.log("output: " + output);
    // console.log("iterable[" + i + "]: " + iterable[i]);
    // console.log("output[" + (counter) + "]: " + output[counter]);
    if (iterable[i] != output[counter]) {
      output.push(iterable[i]);
      // console.log("pushing " + iterable[i]);
      counter++;
    };

  }
  // console.log(output);
  return output;
}


// uniqueInOrder('AAAABBBCCDAABBB');
// == ['A', 'B', 'C', 'D', 'A', 'B']


uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 3, 2, 2, 3]) == [1, 2, 3]



// var uniqueInOrder = function (iterable)
// {
//   return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
// }