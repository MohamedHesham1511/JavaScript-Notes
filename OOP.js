//✤============ Introduction =============✤//

//➜ 1... OOP Pilars.
//• 1) Inheritance
//• 2) Encapsulation
//• 3) Polymarphism

//➜ 2... Js trys to simulate OOP.

//➜ 3... Javascript doesn't have a concept of classes.
//»  Note:  Although ES6 introduces javascript class expression and class declaration.

//➜ 4... Classes are functions in Javascript.
//✤===========================================================================================✤//

//✤============ CH12-VID01 "Creating an instance using Factory pattern" =============✤//

//➜ 1... we create instant of object in javascript with [Factory function OR Constructor function].
//• Factory function.

var student = function (name, age) {
  var name = name ? name : 'abc'; //setting default value for name.
  var age = age !== undefined ? age : 10; //setting default value for age.
  return {
    name: name,
    age: age,
  };
};

var me = student('Ali', 10); // creating instant/object of "student"
console.log(me.name); //Ali
console.log(me.age); //10
console.log(me.address); //undefined
//✤===========================================================================================✤//

//✤============ CH12-VID02 "Creating an instance using constructor pattern" =============✤//

//• Constructor function
var Employee = function (name, salary, dept, id) {
  this.empName = name;
  this.dept = dept;
  this.salary = salary;
  this.empID = id ? id : 'SD-SA-0101';

  this.displayInfo = function () {
    return `this is emp ${this.empID} his name is ${this.empName}`;
  };
};

var emp1 = new Employee('Kareem', 2000, 'SD'); //creating instant/object of Employee
emp1; //Employee {empName: "Kareem", dept: "SD", salary: 2000, empID: 'SD-SA-0101'}

emp1.displayInfo(); //"this is emp SD-SA-0101 his name is Kareem"
//✤===========================================================================================✤//

//✤============ CH12-VID03 "Functional shared pattern & prototype property" =============✤//

//➜ 1... prototype property
var Employee = function (name, salary, dept, id) {
  this.empName = name;
  this.dept = dept;
  this.salary = salary;
  this.empID = id ? id : 'SD-SA-0101';

  //!  warning:  every time we create an object a function for each object will be created
  //! so we will implement it on it's prototype property.
  // this.displayInfo = function () {
  //   return `this is emp ${this.empID} his name is ${this.empName}`;
  // };
};

//»  Note:  here we are adding a function on the prototype of Employee object.
Employee.prototype.displayInfo = function () {
  return `this is emp ${this.empID} his name is ${this.empName}`;
};

var emp1 = new Employee('Kareem', 2000, 'SD');

emp1.displayInfo(); //"this is emp SD-SA-0101 his name is Kareem"

//»  Note:  It's prefered to define all properties in the constrcutor,
//»  but all methods to be implemented on its prototype property.
//✤===========================================================================================✤//

//✤============ CH12_VID04_Prototype chaining & Overriding =============✤//

//➜ 1... the object starts to search in the prototype chain for the "toString()"
//➜ if not found will go level up in the hierarchy and search.
//# this output came from the object Object which is the parent of all objects.
//# this output came from the protoype chain
emp1.toString(); //[object Object]

//➜ 2... to override the "toString()" function.
emp1.prototype.toString = function () {
  return `I am ${this.empName} working in ${this.dept} my ID is ${this.empID} and
  my salary is ${this.salary}`;
};
//»  Note:  Now we implemented the concept of "overriding", and function overriding is
//» an example of Polymarphism. (OOP concept)
//✤===========================================================================================✤//

//✤============ CH12_VID05_Constructor overloading =============✤//

//➜ 1... to implement the idea of constructor overloading we have to set default values to the input parameters.
var Employee = function (name, salary, dept, id) {
  this.empName = name ? name : 'Nour';
  this.dept = dept ? dept : 'SD';
  this.salary = salary ? salary : 2000;
  this.empID = id ? id : 'SD-SA-0101';
};
//»  Note:  Now we implemented the concept of "overloading",and Constructor overloading is
//» an example of Polymarphism. (OOP concept)
//✤===========================================================================================✤//

//✤============================ CH12_VID06_Functions overloading ============================✤//

//➜ 1... we could implement function overloading by making the funciton accepts arguments
//➜ and deals with this arguments if exist.
Employee.prototype.displayInfo = function (greetings, repeatNum) {
  var returnValue = `this is emp ${this.empID} his name is ${this.empName}`;

  if (greetings && typeof greetings == 'string') {
    returnValue = `${greetings} ${returnValue}`;
  }
  if (repeatNum && typeof repeatNum == 'number') {
    returnValue.repeat(repeatNum);
  }
  return returnValue;
};

//➜ 2... "Overloading" occurs when more than one method within the same class have the same method name
//➜ but different in parameters (counts and types).

//➜ 3... "Overriding" occurs when two methods having the same method name and parameters,
//➜ where on eof the methods is implemented in the parent class while the other is implemented
//➜ in the child class, so that child class provides a specific implementation of a method
//➜ that is already provided its parent class.
//✤===========================================================================================✤//

//✤===================== CH12-VID07 "Private member & privileged method" =====================✤//

//➜ 1... we could define private memeber and privileged method like below.
//• with the help of "closure" we could achieve creating "Private member & privileged method"
//# constructor
var Employee = function (name, salary, dept, id, yearBorn) {
  this.empName = name ? name : 'Nour';
  this.dept = dept ? dept : 'SD';
  this.salary = salary ? salary : 2000;
  this.empID = id ? id : 'SD-SA-0101';
  //# private member
  var yearBorn = yearBorn ? yearBorn : '1990';
  //# privileged method
  this.getYearBorn = function () {
    return yearBorn;
  };
};
//✤===========================================================================================✤//

//✤===================== CH12-VID08 "Private member setter" =====================✤//
//➜ 1... we could create private memebr setter method like below.
//# constructor
var Employee = function (name, salary, dept, id, yearBorn) {
  this.empName = name ? name : 'Nour';
  this.dept = dept ? dept : 'SD';
  this.salary = salary ? salary : 2000;
  this.empID = id ? id : 'SD-SA-0101';
  //# private member
  var yearBorn = yearBorn ? yearBorn : '1990';
  //# privileged method "getter"
  this.getYearBorn = function () {
    return yearBorn;
  };
  //# privileged method "setter"
  this.setYearBorn = function (value) {
    yearBorn = value;
  };
};
//✤===========================================================================================✤//

//✤===================== CH12-VID09 "Private method part1" =====================✤//
//➜ 1... to create a private mehtod/function we have only to add a function inside the constructor function.
//# constructor
var Employee = function (name, salary, dept, id, yearBorn) {
  this.empName = name ? name : 'Nour';
  this.dept = dept ? dept : 'SD';
  this.salary = salary ? salary : 2000;
  this.empID = id ? id : 'SD-SA-0101';
  //# private member
  var yearBorn = yearBorn ? yearBorn : '1990';
  //# privileged method "getter"
  this.getYearBorn = function () {
    return yearBorn;
  };
  //# privileged method "setter"
  this.setYearBorn = function (value) {
    yearBorn = value;
  };
  //# private/inner method.
  function welcoming() {
    alert(`welcome ${name} you were born in ${yearBorn}`);
  }
  welcoming();
};

//✤===========================================================================================✤//

//✤===================== CH12-VID10 "Private method part2" =====================✤//
//➜ 1... with binding "this" to the caller object.
//# constructor
var Employee = function (name, salary, dept, id, yearBorn) {
  this.empName = name ? name : 'Nour';
  this.dept = dept ? dept : 'SD';
  this.salary = salary ? salary : 2000;
  this.empID = id ? id : 'SD-SA-0101';
  //# private member
  var yearBorn = yearBorn ? yearBorn : '1990';
  //# privileged method "getter"
  this.getYearBorn = function () {
    return yearBorn;
  };
  //# privileged method "setter"
  this.setYearBorn = function (value) {
    yearBorn = value;
  };
  //# private/inner method.
  function welcoming() {
    alert(`welcome ${name} you were born in ${yearBorn} check ${this.empName}`);
  }
  this.welcomingExec = function () {
    return val();
  };
  //# hard binding.
  var val = welcoming.bind(this);
};
//✤===========================================================================================✤//

//✤===================== CH12-VID11 "This and closure" =====================✤//

//➜ 1... closure issue.
var Employee = function (name, salary, dept, id, yearBorn) {
  this.empName = name ? name : 'Nour';
  this.dept = dept ? dept : 'SD';
  this.salary = salary ? salary : 2000;
  this.empID = id ? id : 'SD-SA-0101';

  this.show = function () {
    var that = this; //to solve "this" issue.
    window.setTimeout(function () {
      console.log(that.empName);
      console.log(this.empName); //undefined
    }, 2000);
  };
};

//➜ 2... All primitives are immutable.
//➜ 3... All objects are reference value.

//✤===========================================================================================✤//

//✤===================== CH12-VID12 "Reference value" =====================✤//
//➜ 1... All primitives are immutable.
//➜ 2... All objects are reference value.
//✤===========================================================================================✤//

//✤===================== CH12-VID13 "Prototype Chain and __proto__" =====================✤//
//➜ 1... to get what is defined on the prototype chain of an object.
//• "object.__proto__". (1st level)
//• "object.__proto__.__proto__". (2nd level)

//✤===========================================================================================✤//

//✤===================== CH12-VID14 "Objects hierarchy with Object Object" =====================✤//
//➜ 1... parent object of all object is "object Object".
//✤===========================================================================================✤//

//✤===================== CH12-VID15 "Inheritance part1" =====================✤//
//➜ 1... Inheritance in Javascript is implemented using prototype "prototypal Inheritance".

//✤===========================================================================================✤//
