---
layout: default
---
# Integrating third party libraries without package manager
Considering that you have a layout file i.e., `index.html` or any html file available.
## Using `script` tag
Your Sample `index.html` might look like a file below.
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns ="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
        <title>Test</title>
    </head>
    <body>
        <h1>sample document</h1>
    </body>
</html>
```
Lets say we want to integrate a js library like `jQuery`, copy the cdn link from the web or download the files. For now lets integrate the files using the cdn link.
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns ="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
        <title>Test</title>
        <!-- place the script tag below to integrate the jquery lib into page -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>
    <body>
        <h1>sample document</h1>
    </body>
</html>
```
like wise we can use the relative paths in the `src` to load the libs.
