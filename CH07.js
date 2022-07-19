//✤================== CH07-VID01 "function Object" ==================✤//
//✤ Function is an Object.
//• creation
//➜ 1... function statement.
//# HOISTED
//# parsed only once
function sum(a, b) {
  return a + b;
}

//➜ 2...function expression.
//# NOT HOISTED
//# parsed only once
//# Anonymous function without name
var sum = function (a, b) {
  return a + b;
};

//➜ 3... constructor. (NOT RECOMMENDED)
//!  warning:  each time it's invoked, the function is dynamically reconstructed,
//! performance wise not recommened.
var sum = new Function('a', 'b', 'return a+b;');
//✤===========================================================================================✤//

//✤================== CH07-VID02 "IIFE pattern" ==================✤//
//✤ IIFE pattern
//➜ 1... IIFE pattern: Immediately Invoked Function Expression.
//• this function cannot be recalled.
//• this pattern is used to setting the environment like in "JQuery" library.

(function () {
  console.log(110); //110
})();
//✤===========================================================================================✤//

//✤================== CH07-VID03 "function object properties" ==================✤//
//✤ Properties of function object.

//➜ 1... "arguments" collection.
//• collection means it's like an array and we can deal with it using index.
//• "arguments" collection has length property.

//✱  Example:  accessing the function's "arguments" collection data.

var fun = function () {
  //»  Note:  we have access to "arguments" collection within the function scope only.
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5, 6, 7, 8)); //36
//✱ ============================================================ ✱//

//✤===========================================================================================✤//

//✤================== CH07-VID04 "function object methods" ==================✤//

//»  Note:  "join()" function could be only work with array to turn the array
//» elements into string concatinated with each other seprated with the joining paramater.

//»  Note:  we could not use the "join()" array function on a string.

//✱  Example:  trying to use the "join()" on string.

var str = 'this is Javascript';
console.log(str.join()); //Error

var arr = [1, 2, 3, 'abc'];
console.log(arr.join()); //1,2,3,abc
console.log(arr.join('-_-')); //1-_-2-_-3-_-abc
//✱ =========================================== ✱//

//➜ function borrowing.
//➜ 1... function borrowing using "apply()".
//• takes parameters/arguments within an array.
var str = 'this is Javascript';
[].join.apply(str, ['-_-']); //"t-_-h-_-i-_-s-_- -_-i-_-s-_- -_-J-_-a-_-v-_-a-_-s-_-c-_-r-_-i-_-p-_-t"
arr.join.apply(str, ['-_-']); //"t-_-h-_-i-_-s-_- -_-i-_-s-_- -_-J-_-a-_-v-_-a-_-s-_-c-_-r-_-i-_-p-_-t"

//➜ 2... function borrowing using "call()".
//• takes parameters/arguments directly starting from the second paramater and so on.
var str = 'this is Javascript';
arr.join.call(str, '-_-'); //"t-_-h-_-i-_-s-_- -_-i-_-s-_- -_-J-_-a-_-v-_-a-_-s-_-c-_-r-_-i-_-p-_-t"
[].join.call(str, '-_-'); //"t-_-h-_-i-_-s-_- -_-i-_-s-_- -_-J-_-a-_-v-_-a-_-s-_-c-_-r-_-i-_-p-_-t"

//➜ 3... function borrowing using "bind()".
//• returns a function to be called later.
var str = 'this is Javascript';
var result = arr.join.bind(str);
var result = [].join.bind(str);
console.log(result()); //t,h,i,s, ,i,s, ,J,a,v,a,s,c,r,i,p,t
console.log(result('-_-')); //t-_-h-_-i-_-s-_- -_-i-_-s-_- -_-J-_-a-_-v-_-a-_-s-_-c-_-r-_-i-_-p-_-t
//✤===========================================================================================✤//

//✤================== CH07-VID05 "Inner function (scope chain & shadowing concept)" ==================✤//

//➜ 1... level up === scope chaining.
var a = 5;
function mainFun(x, y) {
  function innerFun(z) {
    var w = 10;
    function thirdLevelFun() {
      var b = 'abc';
      var a = 101; //shadowing
    }
    return x + y + z + w + a;
  }
  console.log(innerFun(3));
  return 'simple function exec.';
}
//innerFun(); //xxxxxxx can't be seen out of the mainFun scope

var result = mainFun(1, 2); //21
console.log(result); //simple function exec.
//✤===========================================================================================✤//

//✤================== CH07-VID06 "closure" ==================✤//

var b = 2;
function outerFun(x, y) {
  var z = 10;
  var a = 1;
  var innerFun = function (a, b) {
    var w = 20;
    return x + y + z + a + b + w;
  };
  return innerFun;
}

var result = outerFun(5, 6);
console.log(result(3, 4)); //48
//✤===========================================================================================✤//

//✤================== CH07_VID07_Using IIFE pattern ==================✤//

//!  warning:  closure issue.
function outerFun() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}
var result = outerFun();
result[0](); //3
result[1](); //3
result[2](); //3

//➜ 1... solution using IIFE Pattern.
function outerFun() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    //# IIFE Pattern
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}
var result = outerFun();
result[0](); //0
result[1](); //1
result[2](); //2
//✤===========================================================================================✤//
