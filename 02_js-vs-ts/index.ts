
// IIFE
(function () {

  function tokenize(data: string | string[]) {
    let result: string | boolean = '';

    if (data && data.length > 0) {
      for (var index = 0; index < data.length; index++) {
        result = result + data[index] + '-';
      }
    } else {
      result = false;
    }
    return result;
  }

  var output;
  output = tokenize('hello'); // h-e-l-l-o-
  console.log(output);

  output = tokenize(['hello', 'world']); // hello-world-
  console.log(output);

  output = tokenize(''); // false
  console.log(output);
})();
