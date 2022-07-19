//✤================== CH08_VID01_What is BOM? ==================✤//
//✤Broswer Object Model "BOM"

//➜ 1... Browser is the hosting environement.
//➜ 2... BOM consists of 6 Objects
//• 1) Window object the parent and has 5 childs
//•    2) History Object
//•    3) Location Object
//•    4) navigator Object
//•    5) screen Object
//•    6) document Object "DOM"
//✤===========================================================================================✤//

//✤================== CH08_VID02_Window object ==================✤//
//✤Window object

//➜ 1... methods
//• "open()" : to open new browser window.
var win;
function openNewWin() {
  //opening new window
  win = open('childWin.html', '', 'width=150,height=150');
}

//• "close()" : to close a browser window.
function closeWindow() {
  //closing the child window
  win.close();
}

//• "focus()" : to make window in focus.
function changeBgColor() {
  //# changing the background color of the child window.
  win.document.bgcolor = 'red';
  win.focus();
}

//• "moveBy()" : to move the window from its current position.
//• "moveTo()" : to move the window to a specific position.
function moveWin() {
  win.moveBy(50, 50);
  win.focus();
}

//• "resizeBy()"
//• "resizeTo()"

//• "window.scrollBy()"
//• "window.scrollTo()"
//✤===========================================================================================✤//

//✤================== CH08_VID03_Window timers ==================✤//

//➜ 1... timing methods are methods of the "window" object.
//• "setInterval(callback function , duration, parameter)"
//• "setTimeout(callback function , duration, parameter)"
var timerId;
function startAlert(x) {
  alert('Interval fired' + x);
  x++;
  timerId = setTimeout(startAlert, 2000, x);
  // timerId = setInterval(startAlert, 2000);
}
function stopAlert() {
  clearTimeout(timerId); //to clear the timer
  // clearInterval(timerId); //to clear the timer
}
//✤===========================================================================================✤//

//✤================== CH08_VID04_History ==================✤//
//✤History Object
//➜ 1... "history" Object is on of the window object children.
//• the history of the working tab.
//# properties: length
history.length; //return the number of URLs in the history list of the current browser tab

//# Methods: ["back()", "forward()", "go()"]
history.back(); //to go backward
history.forward(); //to go forward

history.go(/*No. of pages*/); // to go backward or forward with a specific number of pages.
//✤===========================================================================================✤//

//✤================== CH08_VID05_Location ==================✤//

//➜ 1... "Location" Object is on of the window object children.
//• "location" object holds info about.
//# 1) The url.
//# 2) the protocol of the URL.
//# 3) Host name.
//# 4) The query String.

location.href; //return the url ("https://domain.com")
location.protocol; //"https:"
location.host; //"domain.com"
location.hostname; //"domain.com"
location.replace('complete URL');
location.assign('complete URL'); //will remove all history in forward

location.search; //return the query string as string value

location.reload();
//✤===========================================================================================✤//

//✤================== CH08_VID06_Navigator ==================✤//
//✤Navigator object
//➜ 1... "Navigator" object holds all info about the browser.
//• properties:
//# navigator.language : to know the language of the browser.
//# navigator.cookieEnabled : to know if the client allows cookies or not.
//# navigator.platform : to know the operating system.
navigator.appCodeName; //"Mozilla"
navigator.userAgent; //"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
//✤===========================================================================================✤//

//✤================== CH08_VID07_Document ==================✤//
//✤ DOM all the html document
//✤ Accessing DOM Nodes
//✤ Modyfying Node's Content
//✤ Remove DOM nodes
//✤ Create New DOM Nodes
//✤===========================================================================================✤//
