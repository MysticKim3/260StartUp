### Github project
Order of using git
- git pull
- change code
- git commit
- git push  
- Always pull first to ensure a conflict isn't created, if conflict is created, then resolve merge conflict by combining different versions.
### EC2 Instance
- IP address of server: 3.221.169.128
- command remote shell into server: ssh -i {key} ubuntu@3.221.169.128
- use http to access server before https is set up
### How to deploy (Manually)
- Be in project directory on local machine
- ssh -i key ubuntu@website
- rm -rf services/simon/public  (or services/startup/public)
- mkdir -p services/simon/public (or services/startup/public)
- exit
- scp -r -i key * ubuntu@website:services/simon/public (or services/startup/public)
### CSS styling
- div elements work really well in flex designs
- flex-direction can organize in rows or columns
- can specify padding for elements to give spacing in layout

## Midterm Study Guide
Link element:
- <link rel="stylesheet" href="styles.css">: links to an external source like to add CSS

Div tag:
- divison/section in HTML, container for HTML elements, styled by class/id attribute

#title vs .grid selector:
- .grid: selects all elements with class="grid"
- #title: selects id with id="title"

Padding vs margin:
- margin: space around an element, pushes other elements away
- padding: space btn element and content inside it, shrinks content inside or increases element size(default)

Flex display:
- direction: row/column
- flex: 0 80 px; won't grow, starting height of 80 px
- flex: 1; one unit of growth

CSS padding:
- can specify top/right/bottom/left
- length px/pt/cm etc. or % of width of containing element

Arrow syntax function:
- gets rid of function name, returns by default
- Ex: hello = function() {return "Hello World!";} -> hello = () => "Hello World!";
- Ex with variable: hello = val => "Hello" + val;

Map with array:
- run a function to map an array to a new array
- Ex: a = [1,2,3], a.map(i => i+i), new array = [2,4,6]

getElementByID & addEventListener:
- getElementByID: gets element with specified ID or null if it doesn't exist
- document.addEventListener(event, function): event: "click", function can be any function that does something

#selector in Javascript:
- queryselector(): # selects element with id matching what is after #

DOM:
- document, document.queryselectro(), interface that allows the elements of a document to be modified
- can find/change/add/delete elements, can have event handlers, can find HTML objects

Default span CSS display property value:
- inline, only takes up as much space as necessary, does not start on newline

CSS to make all div elements have red background:
- div { background-color: red; }

Display image with hyperlink in HTML:
- ```<a href="website"> <img src="image.jpg" width="100" height="132"> </a>```

Ordering of box models, inside to out, of CSS box model:
- content is surrounded by padding is surrounded by border is surrounded by margin

Set text to green, don't affect double text:
- can use specific id #id to change certain text element
- possibly [text~="troubl"] { color: green; }

Use Javascript to select element with id="byu" and change text color to green:
- #byu { color: green; }

Opening HTML tag for:
- Paragraph:```<p>```
- Ordered list: ```<ol>```
- Unordered list: ```<ul>```
- Second level heading: ```<h2>```
- First level heading: ```<h1>```
- Third level heading: ```<h3>```

Declare document type to be HTML:
- ```<!DOCTYPE html>```

Valid Javascript syntax for __ statements:
- if: if (condition) { do_something; }
- else: else { do_something_else; }
- for: for (let i = 0; i < 5; i++) { do_something; }
- while: while (i < cars.length) { do_something; increment i; }
- switch: switch (var) { case 1: do_something; break; case 2: do_something_else; break; default: do_unknown_thing; }

Syntax for creating Javascript object:
- const objectName = { var1: "String1", var2: "String2"};
- Use var to be able to change object, set objectName[var3] = "String3"

Add new properties to Javascript objects:
- access: objectName.property, objectName["property"]
- add: objectName.property = "Property" or objectName["property"] = "new thing"

Tag to include Javascript on HTML page:
- ```<script>```
- ```<script src="login.js"></script>```

Javascript set one word to new word:
- ```text.replace("animal", "crow");``` (must set string to returned string, won't change the passed in string just returns new one)
- ele.value = return value

JSON description:
- Javascript Object Notation
- str = JSON.stringify(Object)
- obj = JSON.parse(Json)
- turn object to json to store in local storage, use parse() to turn it back after retrieving it
- valid data types: string/number/object/array/boolean/null, not function/date/undefined

What does console command __ do:
- pwd: displays current working directory's path
- cd: naviagate between different folders, change working directory
- ls: display information about files in current directory
- vim: opens the vim text editor (has modes)
- nano: opens nano text editor (doesn't have a mode)
- mkdir: create directory
- mv: rename and replace the files, move/rename file/directory
- rm: delete files
- man: show a command's manual
- ssh: secure shell, securely connect to remote server/system
- ps: display processes in terminal
- wget: downlaod files from the internet/URL
- sudo: runs command as a superuser

What command creates a remote shell session:
- ssh user_name@host

What does the -la parameter do for ls command:
- a: show all, do not ignore entries starting with .
- l: use long listing format

What are the aspects of banana.fruit.bozo.click:
- top level domain: .click
- sub domain: banana.fruit
- root domain: bozo

Is a web certificate necessary to use HTTPS:
- Yes

Can DNS A record point to IP Address or another A record:
- Points to a domain name or IP address/host, only holds IPv4 address
- Can also point to another DNS

Port __ is reserved for which protocol:
- 443: HTTPS services/traffic
- 80: HTTP services/traffic
- 22: SSH communication, remote admin access to the VM

How promises work:
- asynchronously execute code
- ```
  function pickupPizza() {
  const order = createOrder();

  // Promise
  placeOrder(order)
    .then((order) => makePizza(order))
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });
  }```
```
function makePizza(order) {
return new Promise((resolve, reject) => {
    doWork(order, 1000, 4000, resolve, reject, `pizza was burnt`);
  });
}```
