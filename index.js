function receivesAFunction(callback) {
  callback();
}

console.log("Testing receivesAFunction:");
receivesAFunction(() => console.log("Callback was called"));

function returnsANamedFunction() {
  function namedFunction() {
    return "i am named!";
  }
  return namedFunction;
}

console.log("\nTesting returnsANamedFunction:");
const named = returnsANamedFunction();
console.log("Is it a function? ", typeof named === "function");

function returnsAnAnonymousFunction() {
  return function () {
    return "i am anonymous";
  };
}

console.log("\nTesting returnsAnAnonymousFunction:");
const anon = returnsAnAnonymousFunction();
console.log("Is it a function? ", typeof anon === "function");
console.log("Function name:", anon.name);
console.log("Calling it: ", anon());
