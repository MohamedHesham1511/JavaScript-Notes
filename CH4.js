//✤================== CH04-VID01 'Built-in Object' ==================✤//
//✤ 'JS Built-in Objects'

//• 1)  String
//• 2)  Number
//• 3)  Array
//• 4)  Date
//• 5)  Math
//• 6)  Boolean
//• 7)  RegExp
//• 8)  Error
//• 9)  Function
//• 10) Object

//➜ 1... "String" Object.
//• Properties: "length" ==> gives the length of the String.

//# using literal creation ==> type will be "string" (recommended)
var mystr = 'sc welcome to Javascript world!!'; //using literal creation
console.log(typeof mystr); //string
console.log(mystr.length); //29

//# using constructor ==> type will be "object".
var newStr = new String('JavaScript String Object'); //using constructor
console.log(typeof newStr); //object

//# using String Function ==> type will be "string".
var str = String('String Function'); //using String Function ===> same as literal creation
console.log(typeof str); //string

//✤===========================================================================================✤//

//✤================== CH04-VID02 'String methods (functions)' ==================✤//

//➜ 1... "charAt()" string function/method.
//• return the character at specific index.
//✱  Example:  using the "charAt()" string function to get the character at index "0" for the string "mystr".
mystr = 'sc welcome to Javascript world!!';
console.log(mystr.charAt(0)); //s
console.log(mystr.charAt(mystr.length - 1)); //'!'

//➜ 2... "indexOf()" string function/method.
//• return the index of a specific character.
//✱  Example:  using the "indexOf()" string function to get the index of a specific string.
mystr = 'welcome to Javascript world!!';
console.log(mystr.indexOf('j')); //-1  ==> because "mystr" does not contains a small 'j' character.
console.log(mystr.indexOf('J')); //11
mystr = 'Sc welcome to JavaScript world!!';
console.log(mystr.indexOf('Sc')); //0  ==> first appearance of 'Sc' string.

//➜ 3... "lastIndexOf()" string function/method.
//• return the index of the last appearance of specific string.
//✱  Example:  using the "lastIndexOf()" string function to get the index of the last appearance of specific string.
mystr = 'Sc welcome to JavaScript world!!';
console.log(mystr.lastIndexOf('Sc')); //18 ==> the last appearance of the "Sc" string.

//➜ 4... "substring()" string function/method.
//• to cut a specific part from our string.
//✱  Example:  using the "substring()" string function to cut a specific part from our string.
mystr = 'Sc welcome to JavaScript world!!';
console.log(mystr.substring(4, 10)); //elcome

//➜ 5... "split()" string function/method.
//• return an array from our string.
//✱  Example:  using the "split()" string function to return an array from our string after splitting by a specific string.
mystr = 'welcome to Javascript world!!';
console.log(mystr.split(' ')); //["welcome","to","Javascript","world!!"]
console.log(mystr.split('')); //["s", "c", " ", "w", "e", "l", "c", "o", "m", "e", " ", "t", "o", " ", "J", "a", "v", "a", "s", "c", "r", "i", "p", "t", " ", "w", "o", "r", "l", "d", "!", "!"]
//»  Note:  splitting by an empty string will return an array which contains all the characters in the string.
//»  Note:  All string function will not affect the real string
//» they return new string or new array (new output).
//✤===========================================================================================✤//

//✤====================== CH04-VID03 'RegExp used in replace function' ======================✤//

//➜ 1... "replace()" string function/method.
//✱  Example:  using the "replace()" to exchange specific part of our string with another string.
mystr = 'sc welcome to Javascript world!!';
console.log(mystr.replace('sc', '_')); //"_ welcome to Javascript world!!"

//»  Note:  to make it global we should use "RegExp".

//➜ 2... "RegExp" : on of Javascript built-in objects.
//• [RegExp ===> /pattern/flag]
//• [flag ===> (i,m,g)] ===> [(i = ignore case sensitivity) , (m = multiple lines) , (g = make it global)]
//✱  Example:  exchanging the 'sc' accross the whole string with the character '_'.
mystr = 'sc welcome to Javascript world!!';
console.log(mystr.replace(/sc/g, '_')); //_ welcome to Java_ript world!!
//✤===========================================================================================✤//

//✤====================== CH04-VID04 'Array' ======================✤//

//➜ 1... "Array" Object.
//• properties : "length" => returns the number of the elements in that array

//# using literal creation. (recommended)
var myArr = [1, 2, 'abc', , , 90, 101, [55, 'mno', false], 'xyz'];
console.log(myArr[0]); // 1
console.log(myArr[4]); // undefined
console.log(myArr.length); //9
console.log(myArr[7]); // [55, "mno", false]
console.log(myArr[7][0]); // 55
console.log(myArr[7][1]); // "mno"
console.log(myArr[7][3]); // undefined
console.log(myArr[7][4]); // undefined
console.log(myArr[7].length); // 3

myArr[7][8] = 222;
console.log(myArr[7].length); // 9

//# using constructor ==> type will be "object".
var colorArray = new Array(); //typeof colorArray 'object'.
colorArray[0] = 'red';
colorArray[1] = 'blue';
colorArray[2] = 'green';

//# Dense Array
var colorArray = new Array('red', 'blue', 'green');
//✤===========================================================================================✤//

//✤====================== CH04-VID05 'Array methods (functions)' ======================✤//

//➜ 1... "join()" Array function/method.
//• turns the array into string with joining parameter by default it's comma ",".
//✱  Example:  using "join()" Array function to turn our array into a string separated with specific character.
var newArr = [1, 2, 3, 5, 10, 11, 7, 26];
console.log(newArr.join()); //"1,2,3,5,10,11,7,26"
console.log(newArr.join('**')); //"1**2**3**5**10**11**7**26"
console.log(newArr.join('*_*')); //1*_*2*_*3*_*5*_*10*_*11*_*7*_*26"
console.log(newArr.join('')); //"12351011726"
console.log(typeof newArr.join('**')); //string

//➜ 2... "push()" Array function/method: to add element at the end of the array.
//➜ 3... "pop()" Array function/method: to remove the last element in the array.
newArr = [1, 2, 3, 5, 10, 11, 7, 26];
console.log(newArr.pop()); //26
console.log(newArr); //[1, 2, 3, 5, 10, 11, 7]

//➜ 4... "shift()" Array function/method: to remove the first element in the array.
//➜ 5... "unshift" Array function/method: to add element at the begining of the array.
newArr = [1, 2, 3, 5, 10, 11, 7];
newArr.shift();
console.log(newArr); //[2, 3, 5, 10, 11, 7]
newArr.unshift('abc'); //["abc", 2, 3, 5, 10, 11, 7]

//➜ 6... "reverse()" Array function/method: to reverse our array.
//»  Note:  the original array will be affected.
newArr = ['abc', 2, 3, 5, 10, 11, 7];
console.log(newArr.reverse()); //[7, 11, 10, 5, 3, 2, "abc"]

//➜ 7... "sort()" Array function/method: to sort the arrray according to the unicode.
newArr = [7, 11, 10, 5, 3, 2];
console.log(newArr.sort()); //[10, 11, 2, 3, 5, 7]

//»  Note:  to make it work as we need we have to send a call back function to function "sort()" array function.
newArr = [10, 11, 2, 3, 5, 7];
function comparisonFun(a, b) {
  return a - b;
}
console.log(newArr.sort(comparisonFun)); //[2, 3, 5, 7, 10, 11]
//✤===========================================================================================✤//

//✤====================== CH04-VID06 'Associative Array' ======================✤//
//✤ key value pairs.

//➜ 1... 'Associative Array': it's a way to save our data in from of key-value pairs.
//✱  Example:  creating "Associative Array" (key-value) pairs data stored.
var associativeArray = new Array();
var x = 'first value';
associativeArray[x] = 1000; //the key here is "first value"
associativeArray['new element'] = 'abc';
associativeArray['username'] = 'Ali';
associativeArray['user age'] = 25;
associativeArray['userSkills'] = ['swim', 'dance', 'read', 'play'];

//»  Note:  we can't use the properties and methods of the array on the associative array.
//» array's properties and methods will only work with the array which has elements stored by "index" not by "key-value" pairs.
console.log(associativeArray.length); //0

//»  Note:  to loop on the associative array we use [for (key in array){ }].
//✱  Example:  looping on an Associative array.
for (key in associativeArray) {
  console.log(key + ': ' + associativeArray[key]);
}
//✤===========================================================================================✤//

//✤====================== CH04-VID07 'Date Object' ======================✤//

//➜ 1... "Date" object is used to stores the date and time based on the user's current time zone.

//# using Constructor.
var myDate = new Date(); //the date which will be stored in "myDate" variable is the data of my machine now.

//# Day numerical equivalent value.
//• 0 ==> Sunday
//• 1 ==> Monday
//• ............
//• 6 ==> Saturday

//# Month numerical equivalent value.
//• 0 ==> January
//• 1 ==> February
//• ..............
//• 11 ==> December

//# Year numerical equivalent value.
//• 0 ===> 1900
//• 1 ===> 1901
//• ...........
//• 119 ===> 2019

//# Hours numerical equivalent value. [0 : 23]

//# Minutes or Seconds numerical equivalent value. [0 : 59]

//➜ 2...  Date Methods.
//• 1) "get..()" methods.
var today = new Date();
console.log(today); //Sun May 30 2021 13:04:17 GMT+0200 (Eastern European Standard Time)
today.getDate(); //30
today.getMonth(); //4
today.getYear(); //121          [to get the actual year we should add 1900]
today.getFullYear(); //2021

//• 2) "Set..()" methods.
today.setDate(15);
console.log(today); //Sat May 15 2021 13:04:17 GMT+0200 (Eastern European Standard Time)
today.setMonth(10);
console.log(today); //Mon Nov 15 2021 13:04:17 GMT+0200 (Eastern European Standard Time)

//• 3) "to..()" methods.
today.toDateString(); //"Mon Nov 15 2021"
today.toLocaleDateString(); //"11/15/2021"
//✤===========================================================================================✤//
