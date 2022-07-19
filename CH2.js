//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH02-VID01 "JS variable, Data types" ✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ How to define a variable in javascript?

//➜ 1... Variables are containers that hold values.
//• we could define variables using "var" keyword.

//»  Note:  Variables in javascript are loosely typed.
//» [we could save a number in variable "x" then store a string into it later on]

//✱  Example:  showing that Variables in javascript are loosely typed.
var x = 10;
console.log(x); //10
x = 'Hello';
console.log(x); //'Hello'
//✱ ============================================================= ✱//

//➜ 2... Javascript primitive Data Types:
//• 1) string ==> ""
//• 2) Number ==> #
//• 3) Boolean ==> [true OR false]
//• 4) Null
//• 5) Undefined ==> ?

//»  Note:  "Symbol" and "BigInt" will be added as primitive datatypes in ES6.
//»  Note:  typeof "Null" primitive data is "object".
//»  Note:  once we have created a variable it is initiated with "undefined" value.

//✱  Example:  showing that once we have created a variable it'll be initiated with "undefined".
console.log(x); //undefined
var x = 10;
console.log(x); //10
x = 'Hello';
console.log(x); //'Hello'
//✱ ======================================================================================= ✱//

//➜ 3... Operator "typeof" to find the type of our variable.
//✱  Example:  using operator "typeof"
console.log(typeof x); //[string, boolean, null, undefined, number]
//✱ ============================= ✱//

//➜ 4... Javascript is an Object.

//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH02-VID02 "JS operators" ✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ What are operators in Javascript?

//➜ 5... we have three kind of operators in Javascript.
//•   1) Unary Operator. [only one operand]
//•   2) Binary Operator. [two operands]
//•   3) Ternary Operator. [three operands]

//➜ 6... Unary Operators. "Arithmatic Operators"
//✱  Example:  "Arithmatic Operators" [--,++]
var x = 5;
//# "prefix decrement"
console.log(--x); //4
console.log(x); //4
//# postfix decrement
console.log(x--); //4
console.log(x); //3
//✱ ==================================== ✱//

//➜ 7... Binary Operators.
//• "Arithamtic Operators" [+ , - , * , / , %]

//• "Assignment operators" [+= , -= , *= , /= , %=]
//✱  Example:  using "Assignment operators".
var x = 4;
var y = 5;
x += y; // x = x + y;
console.log(x); //9
//✱ =================================== ✱//

//• "comparison operators" [> , < , ==, ===, >=, <=]

//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH02-VID03 "Logical operators" ✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ "Logical operators" to compare more than one condition.

//➜ 8... Unary operator logical NOT [!] used to reverse the operands boolean equivalent value.
//• if "x" is (true) make it (false), and if it (false) make it (true).
//✱  Example:  using "NOT ==> !" operator.
var x = false;
console.log(!x); //true
//✱ ================================= ✱//

//➜ 9... Binary [&& , ||] [AND , OR] needs two operands or more.

//✱  Example:  using "AND ==> &&" operator.
false && false && true; //====> false

false && true && true; //=====> false

true && true && true; //======> true
//✱ ================================== ✱//

//✱  Example:  using "OR ==> ||" operator.
false || false || true; //===>  true

false || true || true; //====>  true

false || false || false; //===> false
//✱ ================================= ✱//

//»  Note:  [OR , And] works in short circuit way.

//➜ 10... Falsy Values: we will consider every value "true" except for below conditions.
//• 1) undefined
//• 2) zero ===> 0
//• 3) "" ==> empty string
//• 4) null
//• 5) false

//✱  Example:  Using "AND ==> &&" , "OR ==> ||" and "NOT ==> !".
8 && 9; //9

8 && 9 && 0; //0

8 || 9; //8

0 || 9; //9

!9; //false
//✱ ======================================================= ✱//

//»  Note:  to return the equivalent boolean value of the operand we use [!!].
//✱  Example: .
!!9; //true
//✱ ======== ✱//

//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH02-VID04 "String, special and ternary operator" ✤✤✤✤✤✤✤✤✤✤✤✤✤//

//➜ 11... string operator (+) to concatenate two strings.
//✱  Example:  concatenate two strings.
var firstName = 'Ali ';
var lastName = 'Kareem';
var fullName = firstName + lastName;
console.log(fullName); //Ali Kareem
//✱ ============================== ✱//

//➜ 12... comma (,) operator. "special operator"
//✱  Example:  using comma operator to define more than one variable.
var firstName = 'Ali ',
  lastName = 'Kareem',
  fullName = firstName + lastName;
//✱ ============================================================ ✱//

//➜ 13...Ternary operator. "special operator"
//✱  Example:    condition    ?   val1     :   val2      ;
var temp = 120;
newvar = temp > 120 ? 'red' : 'blue'; //newvar = "blue";
//✱ ================================================= ✱//

//»  Note:  Javascript "special operators" ==> (typeof) | (,) | Ternary operator

//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH02-VID05 "Data types Coercion in JS" ✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ What is "Coercion" in javascript?

//➜ 14... "Coercion" auto convert for data type.
//✱  Example:  auto converted the "number" into "string"
var x = 5; //typeof x ==> number
var y = '5'; //typeof y ==> string
console.log(x == y); //true
//✱ =============================================== ✱//

//✱  Example:  auto convert from boolean to it's equivalent number value.
3 < 2 < 1; //compared (3 < 2) ==> false
false < 1; //auto converted boolean into number ==> 0
0 < 1; // true
//✱ ================================================================ ✱//

//➜ 15... solution: Strict equality to Avoid auto coercion [===].
//»  Note:  Strict equality prevents auto coercion.
//✱  Example:  using strict equality.
var x = 5; //typeof x ==> number
var y = '5'; //typeof y ==> string
console.log(x === y); //false
//✱ ============================ ✱//

//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH02-VID06 "Conditional statements" ✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ How to control program flow?

//➜ 16... we could control program flow using conditional statements.
//• if (condition) { } else { }.
//• switch case.

//➜ 17... "if" statement.
//✱  Example:  demo for using conditional "if" statement.
if (condition) {
  //in case condition is true.
} else {
  //in case condition is false.
}
//✱ ================================================ ✱//

//➜ 18... "switch" case.
//✱  Example:  using switch case.
switch (expression) {
  case value1:
  case value3:
    //nesting values (in case "value1" or "value3" do the logic)
    break;
  case value2:
    break;
  default:
    break;
}
//✱ ======================== ✱//

//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH02-VID07 "Loop statements" ✤✤✤✤✤✤✤✤✤✤✤✤✤//

//➜ 19... "Loop statements" : block of code we need to be repeated several times.

//➜ 20... "Loop statements" : [for (){ } , while (){ } , for (in){ }, do { } while ()].

//• for loop : for (initialExpression ; condition ; increamnetExpression) { }
for (var i = 5; i < 10; i++) {
  //code statements
}

//• while loop : (condition) { }
while (condition) {
  //code statements
}

//• for in loop : for (variable in object) { }
for (variable in object) {
  //code statements
}

//• do while loop : do {} while(condition)
do {
  //code statements
} while (condition);

//✱  Example:  looping using "for" loop and writing on the DOM.
for (var i = 5; i < 10; i++) {
  document.write('the value of i is' + i + '<br>');
}
//✱ ===================================================== ✱//

//✱  Example:  looping using "while" loop and writing on the DOM.
var i = 5;
while (i < 10) {
  document.write('the value of i is' + i + '<br>');
  i++; // increamnet Expression
}
//✱ ======================================================== ✱//

//✱  Example:  stricting the user to enter value in the prompt screen using "do while" loop.
do {
  var respone = prompt('enter your name', '');
} while (!respone || respone.trim().length === 0);
//✱ =================================================================================== ✱//

//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH02-VID08 "Dialogue boxes in JS" ✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ Communicating with the user.
//✤ Dialogue boxes ["prompt", "alert", "confirm"].

//➜ 21... "prompt()" method used to get data from the user.
//»  Note:  if user click "cancel" the return value will be null.
var response = prompt('enter you name', 'ALi'); //"response" variable now has the returning value.

//➜ 22... "alert()" methid used to give the user a pop-up message.
var x = 10;
alert('value of x is: ' + x);

//➜ 23... "confirm()" method used to ask the user a simple "yes or no" question.
var action = confirm('do you want to continue?');
//»  Note:  action will be "ture" if we click "okay".
//»  Note:  action will be "false" if we click "cancel".
//✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤//
