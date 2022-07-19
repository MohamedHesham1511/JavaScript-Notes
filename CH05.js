//✤================== CH05_VID01 'Error object' ==================✤//
//✤ Error types:

//• 1) SyntaxError
//• 2) TypeError
//• 3) RangeError
//• 4) ReferenceError: Invalid reference is used
//• 5) EvalError: Raised by eval when used incorrectly
//• 6) URIError: Raised when encodeURI() or decodeURI() are used incorrectly

//✱  Example:  generating ['syntax error' , 'type error', 'range error']
<body>
  <input type='button' value='syntax error' onclick="alert('hello'"></input>
  <input
    type='button'
    value='type error'
    onclick="console.logg('error')"
  ></input>
  <input
    type='button'
    value='range error'
    onclick='console.log((123.45).toFixed(101))'
  ></input>
</body>;

//➜ 1... creating and Error object using constructor function "Error()".
var myError = new Error('custom Error');
throw myError; //will throw the error in the concole with the message 'custom Error'.

//✱  Example:  prompt the user to enter a value between 10 and 20 and throwing an Error in case not within range.
var result = parseInt(prompt('enter value between 10 and 20', '15'));
if (result < 10) {
  throw 'less than expected';
} else if (result > 20) {
  throw new RangeError('out of range');
} else {
  alert('value within accepted range');
}
//✱ ========================================================================================================= ✱//

//➜ 2... properties of "Error" object: [name , message]
var myError = new Error('custom Error');
myError.name; //"Error"
myError.message; //"custom Error"

//✤===========================================================================================✤//

//✤================== CH05_VID02_Error handling (try..catch..finally) ==================✤//
//✤ JS Error handling.

//➜ 1... Handling errors using: try { } catch (error) { }.
try {
  //Run some code
} catch (error) {
  //»  Note:  Implicitly an Error object is sent to catch() method.
  //Run some code
} finally {
  //»  Note:  if error happen in catch or not finally will be executed.
  //run some code
}

//✱  Example:  demo handling error using try { } catch (error) { }.
try {
  var result = parseInt(prompt('enter value between 10 and 20', '15'));
  if (result < 10) {
    throw 'less than expected';
  } else if (result > 20) {
    throw new RangeError('out of range');
  } else {
    alert('value within accepted range');
  }
  console.log('inside try block');
} catch (e) {
  //»  Note:  "instanceof" is an operator used to detect object type created from specific constructor.
  if (e instanceof RangeError) {
    console.log('this is range error');
    console.log(e.name);
    console.log(e.message);
  } else if (e == 'less than expected') {
    console.log('low value');
  }
  //!  warning:  if we have an error inside the catch(){ } block,
  //! JS engine will stop execution of code after executing finally{ } code statements.
  //console.logg("catch error occured");
  console.log('catch block executed after error caught');
} finally {
  //»  Note:  if error happen in catch or not finally will be executed.
  console.log('done');
}
//»  Note:  will be executed only if no error happen in catch block.
console.log('after finally block');
//✱ ================================================================ ✱//

//✤===========================================================================================✤//

//✤================== CH05_VID03_Error handling (onError) ==================✤//

//➜ 1... "onerror" event: way two of handeling errors.  "old standard way to catch errors"
//• used to retrieve more information about the error and prevent the error from appearing in the console.
//»  Note:  the "onerror" handler function gets implicitly five parameters.
//» a) message: the message of the error.
//» b) url: the page where the error did occur.
//» c) line: the line at which the error happened.
//» d) column: the column which the error happened.
//» e) error: the error object.
//✱  Example:  using "onerror" handler to handle errors.
onerror = handleErr;
function handleErr(message, url, line, column, error) {
  return true; // Suppress error. "prevent error from appearning in the console"
  return false; // means still show the red error in the console.
}
//✱ ================================================================ ✱//

//✤===========================================================================================✤//
