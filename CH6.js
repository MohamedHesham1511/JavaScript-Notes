//✤================== CH06_VID01_fact about function ==================✤//

//➜ 1... Function could be:
//• 1) Assign function into variable.
//• 2) Assign function into array element.
//• 3) Return function from another function.

//✱  Example:  creating a function using "function statement"
//»  Note:  function statement is HOISTED.
function fun1(a, b) {
  return a + b;
}
//✱ ====================================================== ✱//

//✱  Example:   Assigning function to a variable "Anonymous function".
//»  Note:  function expression NOT HOISTED.
//# literal function creation
var myFun = function (a, b) {
  return a + b;
};
//»  Note:  to access this function.
myFun(10, 11); //21
//✱ ============================================================= ✱//

//✱  Example:  Assign function into array element.
var arr = [
  1,
  2,
  3,
  'abc',
  function (a, b) {
    return a + b;
  },
  'xyz',
];
//»  Note:  to access this function.
var funelement = arr[4];
console.log(funelement(10, 11)); //21
console.log(arr[4](10, 11)); //21
//✱ ========================================== ✱//

//✱  Example:  return function from a function.
function newAddingFunction(x, y, z) {
  return function () {
    return x + y + z;
  };
}
var result = newAddingFunction(1, 2, 3);
console.log(result()); //6
//✱ ========================================== ✱//

//✤===========================================================================================✤//

//✤================== CH06_VID02 Object Object (custom object creation) ==================✤//

//➜ 1... To create custom objects in JS.

//• 1) constructor.
//✱  Example:  creation for "obj" object using constructor.
//# "using dot notation"
var obj = new Object();
obj.nameProp = 'Javascript';
obj.typeProp = 'scripting language';
//✱ =================================================== ✱//

//• 2) literal creation. (recommended)
//✱  Example:  creation for "myObj" object using literal creation and dot notation to create its properties.
//# "using dot notation"
var myObj = {};

myObj.objName = 'custom Object';
myObj.objAge = 10;
myObj.skills = ['web', 'programming'];

myObj.display = function () {
  return 'this is a function in object';
};

var result = myObj.display();
console.log(result); //"this is a function in object"
//✱ ===================================================================================================== ✱//

//✱  Example:  creation for "myObj" object using literal creation and subscript notation to create its properties.

//# using subscript notation.
var myObj = {};

myObj.objName = 'custom Object';

myObj['address'] = '123 st.';

//different ways to define properties
var loc = 'location';
myObj.location = '';
myObj['location'] = '';
myObj[loc] = 'Cairo';

console.log(myObj.address); //"123 st."
console.log(myObj.loc); //undefined
console.log(myObj.location); //Cairo
console.log(myObj['objName']); //custom Object
//✱ =========================================================================================================== ✱//

//➜ 2... we could define the properties of an object within its curly brackets.
var customObj = {
  name: 'abc',
  age: 15,
  city: 'Alex.',
  info: function () {
    //some code logic
    //»  Note:  "this" keyword refers to the caller object.
    return `this is ${this.name} of age ${this.age} lives in ${this.city}`;
  },
};
//✤===========================================================================================✤//

//✤================== CH06_VID03 Creating object by factory & constructor function ==================✤//
//✤ Creating object by factory & constructor function.

//➜ 1... Creating an object using Factory function.
//»  Note:  as naming convension factory method/function should be camelCase.
//✱  Example:  creating an "employee()" factory function/method.
function employee(name, department, salary) {
  return {
    empName: name,
    empDept: department,
    empSalary: salary,
    empInfo: function () {
      //»  Note:  "this" keyword refers to the caller object.
      return `${this.empName} works in dept ${this.empDept}`;
    },
  };
}
var emp = employee('Ali', 'SD', 5000);
console.log(emp.empName); //Ali
console.log(emp.empDept); //SD
console.log(emp.empInfo()); //Ali works in dept SD
//✱ ======================================================= ✱//

//➜ 2... Creating an object using constructor method which should starts with capital letter.
//»  Note:  as naming convension constructor method/function should starts with capital letter.
//✱  Example:  creating an "Employee()" constructor function/method.
function Employee(name, dept, salary) {
  //»  Note:  "this" refers to the caller object.
  this.empName = name;
  this.empDept = dept;
  this.salary = salary;
}
//»  Note:  we should use the "new" keyword when using constructor method/function.
var me = new Employee('Mona', 'MD', 5000);
console.log(me); //Employee {empName: "Mona", empDept: "MD", salary: 5000}
console.log(me.empDept); //MD
console.log(me['empName']); //Mona
//✱ ============================================================ ✱//

//✤===========================================================================================✤//

//✤================== CH06-VID04 "object object methods" ==================✤//

//➜ 1... object methods.
//• "hasOwnProperty()": checks if the object has a specific property or not.
//• "toString()": to return the string presentation of our object.

//✱  Example:  using "hasOwnProperty()" and "toString()" on our custom created object.

function Employee(name, dept, salary) {
  this.empName = name;
  this.empDept = dept;
  this.salary = salary;
}
var me = new Employee('Mona', 'MD', 5000);

me.hasOwnProperty('empName'); //true
me.hasOwnProperty('empname'); //false

me.toString(); //[object Object]
//»  Note:  "toString()" came from the parent Object.
//»  Note:  object Object is the parent of all objects so any child object will inherit all its properties and methods.
//✱ ============================================================================== ✱//

//➜ 2... static function (Class Methods).
//• "keys()": return an array of key for a specific object.
//• "values()": return an array of values for a specific object.

//✱  Example:  using "keys()" and "values()" on our custom created object.

function Employee(name, dept, salary) {
  this.empName = name;
  this.empDept = dept;
  this.salary = salary;
}

var me = new Employee('Mona', 'MD', 5000);

Object.keys(me); //["empName", "empDept", "salary"]
Object.values(me); //["Mona", "MD", 5000]
//✱ ================================================================== ✱//

//➜ 3... we could delete properties from object using "delete" operator.
//✱  Example:  using "delete" operator to delete "empName" property.
function Employee(name, dept, salary) {
  this.empName = name;
  this.empDept = dept;
  this.salary = salary;
}

var me = new Employee('Mona', 'MD', 5000);

console.log(me.empName); //Mona
delete me.empName;
console.log(me.empName); //undefined
//✱ ============================================================= ✱//

//➜ 4... To loop on an object we use "for (var property in object) { }".
//✱  Example:  looping on a custom created object using "for ( in ) { }".
function Employee(name, dept, salary) {
  this.empName = name;
  this.empDept = dept;
  this.salary = salary;
}

var me = new Employee('Mona', 'MD', 5000);

for (var property in me) {
  //# prop : is the property name.
  console.log(property + ':' + me[property]);
}
//empName:Mona
//empDept:MD
//salary:5000
//✱ ================================================================= ✱//
//✤===========================================================================================✤//

//✤================== CH06-VID05 "Data descriptor (defineProperty method)" ==================✤//

//✤ How to make Property can't be enumerated ?
//✤ How to prevent deleting property of an object ?
//✤ How to make Property value can't be changed ?

//➜ 1... we could use "defineProperty()" Object's method to configur an object's single property.
//• defineProperty(objectName, propertyName, {'accessor descriptor' OR 'data descriptor'})
//# data descriptor
dataDescriptor = {
  value: undefined, //default     "the value of the property"
  writable: false, //default      "the value of our property could be changed or not"
  configurable: false, //default  "prevent "delete" operator"
  enumrable: false, //default     "could we iterate on our object using "for ( in ) { }" or not"
};
//✱  Example:  configuring object's property using "data descriptor"
var name = 'Ali';
var age = 10;
var address = '123 st.';

var obj = {};

Object.defineProperty(obj, 'name', {
  value: name,
  writable: false, //"writable" controls if we can modify the property or not.
  configurable: false, //"configurable" to be able to delete the property or not.
  enumerable: true, //could we iterate on the preoperties or not.
});

console.log(obj.name); //Ali
obj.name = 'Mostafa';
console.log(obj.name); //Ali   (because writable is equal to false)
//✱ ============================================================ ✱//

//➜ 2... "defineProperties()": Object's method used to configure multiple properties of an object.
defineProperties(objName, {
  propName: {
    value: undefined, //default     "the value of the property"
    writable: false, //default      "the value of our property could be changed or not"
    configurable: false, //default  "prevent "delete" operator"
    enumrable: false, //default     "could we iterate on our object using (for in) or not"
  },
  propName2: {
    value: undefined, //default     "the value of the property"
    writable: false, //default      "the value of our property could be changed or not"
    configurable: false, //default  "prevent "delete" operator"
    enumrable: false, //default     "could we iterate on our object using (for in) or not"
  },
});
//✱  Example:  configuring multiple properties using "defineProperties()"
var name = 'Ali';
var age = 10;
var address = 'abc st.';

var obj = {};

Object.defineProperties(obj, {
  //# data descriptor
  name: {
    value: name,
    writable: false,
    configurable: true,
    enumerable: false,
  },
  //# data descriptor
  age: {
    value: age,
    writable: false,
    configurable: true,
    enumerable: false,
  },
  //# data descriptor
  address: {
    value: address,
    writable: true,
  },
});
console.log(obj.age); //10
console.log(obj.address); //abc st.
obj.address = '123 st.';
console.log(obj.address); //123 st.
console.log(obj.name); //Ali
obj.name = 'kareem';
console.log(obj.name); //Ali   (because name property has writable = false)
//✱ =============================================================== ✱//

//✤===========================================================================================✤//

//✤================== CH06-VID06 "Accessor descriptor (defineProperty method)" ==================✤//

//➜ 1... we could use "defineProperty()" Object's method to configur an object's single property.
//• defineProperty(objectName, propertyName, {'accessor descriptor' OR 'data descriptor'})
//# accessor descriptor
accessorDescriptor = {
  get: undefined, //default       "make it readable or not"
  set: undefined, //default       "make it editable/writable"
  configurable: false, //default  "prevent "delete" operator"
  enumrable: false, //default     "could we iterate on our object using (for in) or not"
};

//✱  Example:  configuring multiple properties using "defineProperties()"
//✱ and using mix between "accessor descriptor" and "data descriptor".
var name = 'Ali';
var age = 10;
var address = 'abc st.';
var department = 'SD';

var obj = {};

Object.defineProperties(obj, {
  //# data descriptor
  name: {
    value: name,
    writable: false,
    configurable: true,
    enumerable: false,
  },
  //# data descriptor
  age: {
    value: age,
    writable: false,
    configurable: true,
    enumerable: false,
  },
  //# data descriptor
  address: {
    value: address,
    writable: true,
  },
  //# accessor descriptor
  dept: {
    get: function () {
      return department;
    },
    set: function (val) {
      dept = val;
    },
  },
  display: {
    get: function () {
      return function () {
        return `this is ${this.name} his age is ${this.age} lives in ${this.address} `;
      };
    },
  },
});
console.log(obj.dept); //SD
obj.dept = 'SA';
console.log(obj.dept); //SA

//➜ 2... we have other useful methods for the "Object" object.
//• Object.seal(myObj)
//• Object.freeze(myObj)
//✤===========================================================================================✤//
