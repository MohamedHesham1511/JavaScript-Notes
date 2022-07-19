//✤✤✤✤✤✤✤✤✤✤✤✤✤ CH01-VID03 "Adding Javascript to web page" ✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ where we can write Javascript code within our HTML document?

//➜ 1... Any where in the html file between "<script></script>" tags either in "header" or "body" sections.
//✱  Example:  To write on the Web Page DOM using "document.write()" method.
document.write('Hello JavaScript');
//✱=====================================================================✱//

//➜ 2... As the Value of the event handler attributes.
//✱  Example:  Adding the "onclick" event handler to a "<h1></h1>" tag.
<h1 onclick="alert('')">Demo #1</h1>;
//✱================================================================✱//

//»  Note:  HTML ignores white characters.
//»  Note:  we could write HTML markups within the javascript.

//✱  Example:  Sending "<br>" HTML tag within the string sent to "document.write()" function.
document.write('<br> this is demo#1');
//✱======================================================================================✱//

//➜ 3... In an external file and refer to it using the "src" attribute.
//✱  Example:  Creating new ".js" file and refer to it using the "src" attribute in out html document.
<script src='filepath.js'></script>;
//✱===============================================================================================✱//

//✤✤✤✤✤✤✤✤✤✤✤✤✤✤ CH01-VID04 "How Java script is executing" ✤✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ "Parser"

//➜ 4... Parser is supported in the engine of the browser which translates the HTML markups and javascript code to its equivalent output.
//• 1) HTML parser.
//• 2) Javascript parser.

//✤✤✤✤✤✤✤✤✤✤✤✤✤✤ CH01-VID05 "Development tool and console environment" ✤✤✤✤✤✤✤✤✤✤✤✤✤✤//
//✤ press "F12" to use the dev-tool of google chrome browser.

//➜ 5... "Console" terminal tab is a running environment for the javascript in the browser dev-tool.
//• Any javascript statements written into it will give us its output.

//➜ 6... To write in the "console" from a ".js" file we use "console.log()" API/function.
//✱  Example:  writing 'display in console only' string in our browser's console terminal.
console.log('display in console only');
//✱===================================================================================✱//

//➜ 7... write in the "console" in form of an Error (Red).
console.error('error');

//➜ 8... write in the "console" in form of warrning (Yellow)
console.warn('Warn');

//➜ 9... To define styling to the message we write in the console we use ['%c'].
//✱  Example:  Using '%c' to add styling to our console message.  ===> console.log('%c our console message', 'styling');
console.log('%c error message', 'color:red;background:yellow;');
//✱=================================================================================================================✱//
//✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤//
