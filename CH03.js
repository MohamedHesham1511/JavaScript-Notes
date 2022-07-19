//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH03-VID01 "Built in functions" ✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ Built-in functions in javascript.

//»  Note:  javascript's functions is some how limited.

//➜ 1... "parseInt()" converts into integer type number.
//✱  Example:  Using "parseInt()" to convert from string into numbers.

var x = 'abc101';
parseInt(x); //NaN   "because the string format starts with characters"

x = '101abc';
parseInt(x); //101   "because the string format starts with numbers"

x = '101.1abc';
parseInt(x); //101

//»  Note:  Binary Base 2 converting to equivalent decimal value.
parseInt('0110', '2'); //6
//✱ ============================================================ ✱//

//➜ 2... "parseFloat()" converts into number and taking the floating number into consideration.
//✱  Example:  Using "parseFloat()" to convert from string into numbers with considering floating numbers.

x = '101.1abc';
parseFloat(x); //101.1

x = '101.1.1abc';
parseFloat(x); //101.1
//✱ ================================================================================================= ✱//

//➜ 3... "isFinite()" checks if the passed value is a numerical value or not.
//• if the value is number will return true.
//• if it's any thing other than a number it will return false.
//»  Note:  coercion included.
//✱  Example:  Using "isFinite()" to check if the passed value is a numerical value or not.

isFinite(323265); //true
isFinite('323265'); //true   "if the parameter is all number in form of string will return true"
isFinite('323265asd'); //false
//✱ ================================================================================== ✱//

//➜ 4... "isNaN()" checks if the passed value is not a number.
//• isNaN() ==> if the value is number will return false.
//✱  Example:  Using "isNaN()" to check if the passed value is NOT a numerical value or not.

isNaN(156); //false
isNaN('asda540'); //true
//✱ ================================================================================== ✱//

//»  Note:  "prompt()" alwayes returns string value.
//✱  Example:  Showing that the returning value from the "prompt()" method is a string.

var num1 = prompt('enter first value', '10');
var num2 = prompt('enter second value', '11');
alert(num1 + num2); //'1011'    [type : string]
//✱ ============================================================================== ✱//

//➜ 5... other usefull functions like [decodeURIComponent() , encodeURIComponent()].

//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH03-VID02 "User defined function" ✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ what is a "User defined function" in javascript?

//➜ 6... we could create our own custom function using "function" keyword.
function functionName(argument1, argument2) {
  //some code logic
  return statement;
}

//»  Note:  the created custom function will return "undefined" by default if we don't have a return statment.

//✱  Example:  creating custom function named "addTwoParam () { }".
function addTwoParam(x, y) {
  var sum = 0;
  sum = x + y;
  return sum;
}
var result = addTwoParam(5, 6); //calling "addTwoParam()" custom function and store the returned data into "result" variable.
console.log(result); //11
//✱ ======================================================== ✱//

//✤================== CH03-VID03 "Default value" ==================✤//
//✤ "Default value" for function arguments.

//➜ 1... we could call our own custom function without sending any parameters despite the function accepts parameters.

//✱  Example:  calling the "addTwoParam" without dening all arguments.
function addTwoParam(x, y) {
  var sum = 0;
  sum = x + y;
  return sum;
}
console.log(addTwoParam()); //NaN
console.log(addTwoParam(4)); //NaN
//✱ ============================================================== ✱//

//➜ 2... setting the default value for the function's parameters/arguments using "Ternary operator".

//✱  Example:  setting the default value for the function's parameters/arguments using "Ternary operator".
function addTwoParam(x, y) {
  x = x == undefined ? 0 : x;
  y = y == undefined ? 0 : y;
  var sum = 0;
  sum = x + y;
  return sum;
}
console.log(addTwoParam()); // 0
console.log(addTwoParam(4)); //4
//✱ ================================================================================================= ✱//

//➜ 3... In "ES6" we could use the shorthand expression.

//✱  Example:  setting default values for arguments using ES6 shorthand expression.
function addTwoParam(x = 0, y = 0) {
  var sum = 0;
  sum = x + y;
  return sum;
}
console.log(addTwoParam()); // 0
console.log(addTwoParam(4)); //4
//✱ =========================================================================== ✱//

//✤==========================================================================================================================✤//

//✤================== CH03-VID04 "Variable scope - Shadowing" ==================✤//

//➜ 1... "Global scope"
//• could be accessed any where in the code script.
//• defined out of any function scope.

//»  Note:  if we defined a variable in function without using "var" keyowrd.
//» This variable will be global scoped after the first call of this function.

//➜ 2... "Local scope" function scope only.
//• Accessed only in the function scope.
//• we should use "var" keyword otherwise it will be global scoped.

//➜ 3... "shadowing" : defining two varibales with the same name on in the local scope and the other in the global scope.
var a = 10;
function incVar(x) {
  var a = 50; //"shadowing"
}
//✤==========================================================================================================================✤//

//✤================== CH03-VID05 "JS Debugging" ==================✤//

//➜ 1... "Hoisting" : scanning the code for all variables defined with "var" keyword and all functions statement.
//• Javascript engine before executing our code makes what so called "hoisting".
//»  Note:  functions statement as well as variables defined by "var" keyword are hoisted.
//» will be defined and accessed in global scope.
//✤==========================================================================================================================✤//
