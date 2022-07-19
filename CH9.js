//✤============ CH09-VID01 "View DOM Nodes" =============✤//

//➜ 1... to see our document's node format presentation of our html file we use "document".
//• we write "document" in the console.

//➜ 2... to see out document's object presentation of our html file document.
console.dir(document); //#document{}

//✤===========================================================================================✤//

//✤============ CH09-VID02 "Nodes relationships (DOM hierarchy)" =============✤//

//➜ 1... Nodes relationships (DOM hierarchy):
//• <html> : Root element
//✱  Example:  "DOM hierarchy"
<html>
  <head></head>
  <body>
    <div id='divone'></div>
    <div id='divtwo'></div>
    <div id='divthree'></div>
  </body>
</html>;
//✤===========================================================================================✤//

//✤============ CH09-VID03 "Accessing DOM Nodes (4 ways)" =============✤//

<html>
  <head></head>
  <body>
    <div id='divone' class='divs'></div>
    <div id='divtwo' class='divs'></div>
    <div id='divthree' class='divs'></div>
  </body>
</html>;

//➜ 1... to reach out the "<body></body>" tag.
document.body;

//➜ 2... reaching first child of the "<body></body>" tag.
document.body.children[0]; //<div id='divone'></div>

//➜ 3... reaching sibling of the first child of the "<body></body>" tag.
document.body.children[0].nextElementSibling; //<div id='divtwo'></div>

//➜ 4... Better way to reach our my element is using its id.
document.getElementById('divtwo'); //<div id='divtwo'></div>

//➜ 5... to reach my element using class name.
document.getElementsByClassName('divs'); //HTMLCollection(3)[]  ==> Collection contains all three "divs".

//➜ 6... reaching out elements which has the same tag name.
document.getElementsByTagName('div'); //HTMLCollection(3)[] ==> Collection contains all three "divs".

//✤===========================================================================================✤//

//✤============ CH09-VID04 "Accessing DOM Nodes (selectors)" =============✤//

//➜ 1... we could access/select DOM elements with CSS selector.
//• By Id selector:
document.querySelector('#someID'); // this is the same as [document.getElementById('someID');]
//• By class selector:
document.querySelector('.SomeClass'); // this is the same as [document.getElementsByClassName('SomeClass');]

//➜ 2... "document.querySelectorAll()" returns collection of elements.
document.querySelectorAll();
//✱  Example:  using "document.querySelectorAll()" to change the background color for all input type="text" elements.

function changeDisp() {
  var elem = document.querySelectorAll('input[type="text"]');

  for (var i = 0; i < elem.length; i++) {
    elem[i].getElementsByClassName.backgroundColor = 'red';
  }
}

//✤===========================================================================================✤//

//✤============ CH09-VID05 "Modifying Node’s content" =============✤//

//➜ 1... To change the context of a markup we use "innerHTML" propety.
//• Text will be bolded.

document.body.children[0].innerHTML = '<b>Div Element</b>';

//➜ 2... if we use "innerText" property it will be parsed as plane text.
//• "<b></b>" will appear.
document.body.children[0].innerText = '<b>Div Element</b>';

//➜ 3... to add inner content in addition to the already added we use "+=".
document.getElementById('divtwo').innerHTML += '<b>Second Div Element</b>';

//➜ 4... since we reached the element we could access its attributes like "style" attribute.
elem[0].style.display = 'none';
//✤===========================================================================================✤//

//✤============ CH09-VID05 "Node’s Class Attribute" =============✤//

<html>
  <head></head>
  <body>
    <div id='divone' class='divs'></div>
    <div id='divtwo' class='divs'></div>
    <div id='divthree' class='divs'></div>
  </body>
</html>;

//➜ 1... we could add/remove classes to/from our element.
document.getElementById('divone').classList.add('c2'); //adding class 'c2' to our element.
document.getElementById('divone').classList.remove('c2'); //removing class 'c2' from our element.

//➜ 2... to get the emplemented styles to our element.
getComputedStyle(document.getElementById('divone')).color; // "rgb(255, 0, 0)"

//✤===========================================================================================✤//

//✤============ CH09-VID06 "Create new DOM Nodes" =============✤//
//✤Creat New DOM Nodes.

<html>
  <head></head>
  <body>
    <div id='divone' class='divs'></div>
    Sample of text
    <div id='divtwo' class='divs'></div>
    {/* <!-- comment text --> */}
    <div id='divthree' class='divs'></div>
  </body>
</html>;

//➜ 1... Types of Nodes.
//• Root node: <html></html>
//• Element node: [<head></head>, <body></body>, <div></div>, ...etc]
//• Attribute node: id="divone"
//• Sample of text: Text node
//• <!-- comment text --> : comment node
//• Document node: the whole page.

//➜ 2... for each node we have a create method.
//• document.createElement()
//• document.createAttribute()
//• document.createTextNode()
//• document.createComment()

//➜ 3... we have function/methods to add our nodes to the DOM.
//• document.body.insertBefore(newNode, place)
//• "parentNode".appendChild(newNode)

function addElem() {
  var textElem = document.createTextNode('this is simple text'); //creating out text node.
  document.body.appendChild(textElem); //adding our created text node the "<body></body>" tag.
}

//✤===========================================================================================✤//

//✤============ CH09-VID07 "DOM collection" =============✤//
//✤ Accessing DOM collection.

<body>
  <img name='image01'></img>
  <img name='image02'></img>
</body>;

//➜ 1... we could access the images/form collection using "document.collectionName[index or "name"]".
//• document.images[index]
//• document.images['image01']
document.images[0]; //<img name='image01'></img>
document.images['image02']; //<img name='image02'></img>

//✤===========================================================================================✤//

//✤============ CH09-VID08 "Cookies" =============✤//

//➜ 1... "Cookies": is .txt file stored on client's machine.
//• "Cookies" follow same origin policiy: the server which has created it only can access.
//• Security wise good.

//➜ 2... we have two kinds of Cookies.
//• Session cookie: exists as long as the browser is open.
//• Persistent cookie: has expiry date.

//✤===========================================================================================✤//

//✤============ CH09-VID09 "Create and read cookies" =============✤//

//➜ 1... Example creating a cookie and setting an expiry date for it.
document.cookie = 'cookieName=value;expires=date';

//✱  Example:  creating a cookie which will expire after 3 month.
function saveInfo() {
  var date = new Date(); //creating new date with the machine date.
  date.setMonth(date.getMonth() + 3); //updating the date to be 3 Month up front.

  var value = document.getElementById('username').value; //getting the "username" the user intered in the text field.
  var email = document.getElementById('useremail').value; //getting the "email" the user intered in the text field.
  //# persistent cookie
  //creating a cookie named "usernameCookie".
  //and making it expire after 3 month.
  document.cookie = `usernameCookie=${value};expires=${date}`;
  //# persistent cookie
  //creating a cookie named "useremailAddressCookie".
  //and making it expire after 3 month.
  document.cookie = `useremailAddressCookie=${email};expires=${date}`;
}

//➜ 2... to read our created cookie.
document.cookie; //usernameCookie={value}; useremailAddressCookie={email}
//✤===========================================================================================✤//

//✤===================== CH09-VID10 "Display key value pairs of cookies" =====================✤//
//✤============ CH09-VID11 "Enhance your code using general display Cookie fun" =============✤//
//➜ 1... we could use the string methods and apply on the string retruned from
//➜ "document.cookie" to create our associative array.

//➜ 2... we could create general display cookie function like below.
function getAllCookies() {
  var associativeCookie = [];
  var splitCookie = document.cookie.split(';');
  for (var i = 0; i < splitCookie.length; i++) {
    associativeCookie[splitCookie[i].split('=')[0].trim()] =
      splitCookie[i].split('=')[1];
  }
  return associativeCookie;
}

//✤===========================================================================================✤//

//✤============ CH09-VID14 "Delete cookie (logout)" =============✤//
//➜ 1... to delete our cookie we could create a function like below.
function deleteCookie() {
  var cookie = getAllCookies(); //getting our cookie associative array.
  for (key in cookie) {
    document.cookie = `${i}=;expires=9-9-2009`;
  }
}
//✤===========================================================================================✤//
