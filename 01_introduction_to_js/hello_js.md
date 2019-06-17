---
layout: default
parent: '/01_introduction_to_js/README'
parent_name: 'back'
---
# Hello JS
## History, Syntax
Created by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich),initially released on the year 1995 to support browser scripting for Netscape browser. Initially took its syntax standards from the Infamous `Java`(that's it has nothing more to do with java).
Initially called under other names **Mocha**,**LiveScript**.. got renamed to **Javascript**.
### Standardization
In November 1996, Netscape submitted JavaScript to [ECMA International](https://en.wikipedia.org/wiki/Ecma_International) to carve out a standard specification, which other browser vendors could then implement based on the work done at Netscape. This led to the official release of the language specification *ECMAScript* published in the first edition of the **ECMA-262** standard in June 1997, with JavaScript being the most well known of the implementations. *ActionScript* and *JScript* were other well-known implementations of ECMAScript.
There on many standard developments are done and latest release being *ECMAScript 2018*
### Characteristics
Javascript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
## Internet & How browser works
The Internet(can be called interconnected network) is the global system of interconnected computer networks that use the Internet protocol suite (TCP/IP) to link devices worldwide. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies.
### WWW
The World Wide Web (WWW), commonly known as the Web, is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs, such as https://www.example.com/), which may be interlinked by hypertext, and are accessible over the Internet. The resources of the WWW may be accessed by users by a software application called a web browser.
### How a browser works
Before reading the contents of how browser works, please watch the following video, it helps you to understand the contents much better
<iframe height="360" src="https://www.youtube.com/embed/uE3UPEK26U0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%"></iframe>
A browser is an application used to locate, retrieve and display content on the World Wide Web, including Web pages, images, video and other files. Considering client/server model, the browser is a client that run on a computer that contacts the Web server and requests information. The Web server sends the information back to the Web browser which displays the results on the computer or other Internet-enabled device that supports a browser.
<div style="width: 100%; background: url('/browser_work.png') no-repeat center center; background-size: contain;height: 350px; background-repeat: none;">
</div>
```sequence
User Interface->Browser Engine: ->
Browser Engine->Data Persistence: ->
User Interface->UI Backend: ->
Browser Engine->Rendering Engine: ->
Rendering Engine->Networking: ->
Rendering Engine->Javascript Interpreter: ->
Rendering Engine->UI Backend: ->
```

* **The User Interface**: The user interface is the space where User interacts with the browser. It includes the address bar, back button, home button, refresh and stop etc. Every other part, except the window where requested web page is displayed, comes under it.
* **The Browser Engine**: The browser engine works as a bridge between the User interface and the rendering engine. According to the inputs from various user interfaces, it queries and manipulates the rendering engine.
* **The Rendering Engine**: The rendering engine, as the name suggests is responsible for rendering the requested web page on the browser screen. The rendering engine interprets the HTML, XML documents and images that are formatted using CSS and generates the layout that is displayed in the User Interface. However, using plugins or extensions, it can display other types data also. Different browsers user different rendering engines: 
    * Internet Explorer: Trident 
    * Firefox & other Mozilla browsers: Gecko
    * Chrome & Opera 15+: Blink
    * Chrome (iPhone) & Safari: Webkit
* **Networking**: Component of the browser which retrieves the URLs using the common internet protocols of HTTP or FTP. The networking component handles all aspects of Internet communication and security. The network component may implement a cache of retrieved documents in order to reduce network traffic.
* **JavaScript Interpreter**: It is the component of the browser which interprets and executes the javascript code embedded in a website. The interpreted results are sent to the rendering engine for display. If the script is external then first the resource is fetched from the network. Parser keeps on hold until the script is executed.
* **UI Backend**: UI backend is used for drawing basic widgets like windows. This backend exposes a generic interface that is not platform specific. It underneath uses operating system user interface methods.
* **Data Persistence/Storage**: This is a persistence layer. Browsers support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem. It is a small database created on the local drive of the computer where the browser is installed. It manages user data such as cache, cookies, bookmarks and preferences.

#### Rendering engine
The networking layer will start sending the contents of the requested documents to the rendering engine in chunks of 8KBs.

The rendering engine parses the chunks of HTML document and convert the elements to DOM nodes in a tree called the "content tree" or the "DOM tree". It also parses both the external CSS files as well in style elements.

While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

After the construction of the render tree, it goes through a "layout process" of the render tree. When the renderer is created and added to the tree, it does not have a position and size. The process of calculating these values is called layout or reflow. This means giving each node the exact coordinates where it should appear on the screen. The position of the root renderer is 0,0 and its dimensions are the viewport–the visible part of the browser window. All renderers have a "layout" or "reflow" method, each renderer invokes the layout method of its children that need layout.

The next stage is painting. In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI backend layer.

The rendering engine always tries to display the contents on the screen as soon as possible for better user experience. It does not wait for the HTML parsing to complete before starting to build and layout the render tree. It parses and displays the content it has received from the network, while rest of the contents stills keeps coming from the network.
### Syntax
We will be discussing the syntax of the JS in the following [section](#differences-between-html-css-and-js)
## Differences between HTML, CSS and JS
### HTML
HTML is the standard markup language for creating Web pages. HTML stands for Hyper Text Markup Language.
* HTML elements are the building blocks of HTML pages
* HTML elements are represented by tags
* HTML tags label pieces of content such as "heading", "paragraph", "table", and so on
* Browsers do not display the HTML tags, but use them to render the content of the page

A standard HTML Document looks like:
```html
 <!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>

        <h1>My First Heading</h1>
        <p>My first paragraph.</p>

    </body>
</html> 
```
#### Example Explained

* The `<!DOCTYPE html>` declaration defines this document to be HTML5
* The `<html>` element is the root element of an HTML page
* The `<head>` element contains meta information about the HTML document
* The `<title>` element specifies a title for the document
* The `<body>` element contains the visible page content
* The `<h1>` element defines a heading
* The `<p>` element defines a paragraph

<iframe height="360" src="https://www.youtube.com/embed/PORRrz3Y8Vc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%"></iframe>

#### HTML all-in-all
##### HTML Elements

An HTML element usually consists of a start tag and end tag, with the content inserted in between:

`<tagname>Content here...</tagname>`

The HTML element is everything from the start tag to the end tag:

`<p>A paragraph.</p>  `

|Start tag | Element content       |  End tag|
 ----------|-----------------------|--------- 
|`<h1>`    |  First Heading        |  `</h1>`|
|`<span>`  |  First text cotaine   |`</span>`|
|`<br>`    |                       |         |

* Its standard to follow lowercase while using tags
* Do not forget the end tag for content tags(`<p>, <div>...`)
* Elements have attributes which provide information about element
* attributes comes in name/value pair like `name="value"`
* always use quotes for value in attributes.
* HTML Headings are defined with the <h1> to <h6> tags
* HTML text can be formatted using the following tag
    * `<b>` - Bold text - <b>bold</b>
    * `<strong>` - Important text - <strong>strong</strong>
    * `<i>` - Italic text - <i>italic</i>
    * `<em>` - Emphasized text - <em>Emphasized</em>
    * `<mark>` - Marked text - <mark>marked</mark>
    * `<small>` - Small text - <small>small</small>
    * `<del>` - Deleted text - <del>deleted</del>
    * `<ins>` - Inserted text - <ins>Inserted</ins>
    * `<sub>` - Subscript text - H<sub>2</sub>O
    * `<sup>` - Superscript text - 2<sup>3</sup>
* `class` attribute is used to define equal styles for elements with same class name.
* The `id` attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).

##### attributes

|tag  | attribute(s) | example                                  |
 -----|-----------|------------------------------------------
|`<a>`|*href*     |`<a href="https://example.com">link</a> ` |
|`<img>`|*src*,*width*, *height*, *alt*   |`<img src="lion_king.png" alt="lion image" width="500" height="600"/>`|
|`<div>`, `<p>`...|*style*|`<p style="color:red">I am a paragraph</p>`|

##### Empty elements
Elements with no contents are called empty elements
```html
Hello<br /><!-- breaks the line -->World!
<hr /><!-- draws a horizontal rule -->
```


### CSS

* **CSS** stands for **C**ascading **S**tyle **S**heets
* CSS describes *how HTML elements are to be displayed on window*
* CSS can control the layout of multiple web pages all at once
* External stylesheets are stored in CSS *files*

<iframe width="640" height="360" src="https://www.youtube.com/embed/Y02yI1OfZjI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%"></iframe>

#### Why CSS?

CSS is used to define styles for your web pages, including the design and layout in display for different screen sizes.

The following link contains the free CSS for beginners PDF document from Tutorialspoint:
* [abs link](https://www.tutorialspoint.com/css/css_tutorial.pdf)
* [relative link](/css_tutorial.pdf)

### JS

JavaScript is the programming language of HTML and the Web. To Simply explain what javascript does is it can programmatically control the HTML document like changing the appearance of page and what not it can do anything.
We will be learning Javascript in depth through the following chapters

## Understanding Browser Console
Web browsers provide us with the 