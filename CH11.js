//✤============ CH11-VID01 "Ajax & XHR object" =============✤//

//➜ 1... In 2005 "AJAX" was introduced to us.

//➜ 2... "AJAX" : Asynchronous Javascript and XML.
//• with "AJAX" we can retrieve data from a URL without having to reload our page.

//➜ 3... Synchronous : means that we only can make a request at a time and wait for its response to
//➜ make another request.
//• -------- Request A --------->
//• <------- Response A ---------

//• -------- Request B --------->
//• <------- Response B ---------

//• -------- Request C --------->
//• <------- Response C ---------

//➜ 4... Asynchronous : means that we can make alot of requests regardles the order and without waiting
//➜ for the 1st request's response.
//• -------- Request A --------->
//• -------- Request B --------->
//• -------- Request C --------->

//• <------- Response C ---------
//• <------- Response A ---------
//• <------- Response B ---------

//➜ 5... to make "AJAX" request we need "XHR" object.
//• "XHR" : XML Http Request. (API has "properties" and "methods")

//➜ 6... properties
//• "readyState":
//# 0 = Uninitialized
//# 1 = Loading
//# 2 = Loaded
//# 3 = Interactive
//# 4 = Complete

//• "status": return the status as a number.
//# 200 = "OK"
//# 404 = "Not Found"
//»  Note:  1xx ranges : Informational
//»         2xx ranges : Success
//»         3xx ranges : Redirection
//»         4xx ranges : Client error
//»         5xx ranges : Server error

//• "statusText": return the status as a string.
//# "OK" = 200
//# "Not Found" = 404

//• "responseText" : return the response as a string.

//➜ 7... methods.
//• "open(method, "URL" [options])"
//# method: ("GET", "POST")

//• "send("content")"

//✤===========================================================================================✤//

//✤============ CH11-VID02 "Make Ajax request using XHR object" =============✤//
//➜ 1... creating our "xhr" object.
var xhr = new XMLHttpRequest(); //creating our xhr object.
var response;
//# adding "onreadystatechange" event handler function
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      response = xhr.responseText; //retrieving our response data
    }
  }
};

xhr.open('GET', 'url'); //
xhr.send(''); //sending our http request
//✤===========================================================================================✤//

//✤============ CH11-VID03 "JSON" =============✤//
//➜ 1... "JSON" : Javascript Object Notation.
//» [
//»   {
//»     'name': 'Mohamed',
//»     'age': 25,
//»     'salary': 500,
//»   },
//»   {},
//»   {},
//» ];

//➜ 2... To convert from JSON object into JS object.
JsObject = JSON.parse(JsonObject);

//➜ 3... To convert from JS object into Json Object.
JsonObject = JSON.stringify(JsObject);

//✤===========================================================================================✤//
