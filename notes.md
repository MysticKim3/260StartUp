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
- 

Div tag:
- 

#title vs .grid selector:
Padding vs margin:
Flex display:
CSS padding:
Arrow syntax function:
Map with array:
getElementByID & addEventListener:
#selector in Javascript:
DOM:
Default span CSS display property value:
CSS to make all div elements have red background:
Display image with hyperlink in HTML:
Ordering of box models, inside to out, of CSS box model:
Set text to green, don't affect double text:
Use Javascript to select element with id="byu" and change text color to green:
Opening HTML tag for:
- Paragraph:
- Ordered list:
- Unordered list:
- Second level heading:
- First level heading:
- Third level heading:
Declare document type to be HTML:
Valid Javascript syntax for __ statements:
- if:
- else:
- for:
- while:
- switch:
Syntax for creating Javascript object:
Add new properties to Javascript objects:
Tag to include Javascript on HTML page:
Javascript set one word to new word:
JSON description:
What does console command __ do:
- pwd
- cd
- ls
- vim
- nano
- mkdir
- mv
- rm
- man
- ssh
- ps
- wget
- sudo
What command creates a remote shell session:
What does the -la parameter do for ls command:
What are the aspects of banana.fruit.bozo.click:
- top level domain:
- sub domain:
- root domain:
Is a web certificate necessary to use HTTPS:
Can DNS A record point to IP Address or another A record:
Port __ is reserved for which protocol:
- 443:
- 80:
- 22:
How promises work:
