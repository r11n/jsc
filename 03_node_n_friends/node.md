---
layout: default
---
# What is node.js?

Built on Chrome V8 javascript engine Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

## Javascript Everywhere
Node.js represents a "JavaScript everywhere" paradigm, unifying web application development around a single programming language, rather than different languages for server- and client-side scripts.

A simple server can be created from the following code without any further configuration if node and dependencies are available in your system.
```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
Node takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library.

## Installation
### Windows
* goto [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and make sure that **LTS** is selected and select the type of installer based on the os architecture(msi extension is preferred).
* Double click the downloaded file. follow all the steps.
* once the installation is done, that's it `node` command will be available in your command prompt.

### Ubuntu
* Add Node.js PPA
```sh
sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```
* Install node.js
```sh
sudo apt-get install nodejs
```
* check the version
```sh
node -v 
# v10.16.0
```
### Mac
* goto [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and make sure that **LTS** is selected and download the pkg.
* install the from the downloaded pkg file.