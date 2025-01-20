function firstFunction() {
  console.log('I am first function');

    function secondFunction() {
        console.log('I am second function');
        return "hello"
    }

    return secondFunction;
}

const result = firstFunction();
console.log("result: ", result());
