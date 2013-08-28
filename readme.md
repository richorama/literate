# literate

Write your code in markdown, then use literate to 'require' the module. The JavaScript you have written in code blocks will be scraped out and returned as the module at runtime.

# Install

```
$ npm install literate
```

# Example Usage

## Creating a markdown module

Create a markdown file for you documenation and code (`your_module.md`):
```
# This is an example module.

First it logs to the console:

    console.log("hello world")

It exports a function as an example.

    module.exports.useAsNormal = function()}{
      return "foo";
    }

You can also set a variable like this `var x = 2`, 
and write it out with a `console.log(x)`.
```
## Calling the module

In your main file (`server.js`), instead of using require directly, use `literate` to load the module:
```js
var your_module = require('literate')('./your_module');
your_module.useAsNormal();
```

## Runtime inspection of the Markdown

The markdown is available to the module at runtime on a `__markdown` variable:

```
# Retrieve documentation at runtime

    module.exports.markdown = function(){
      return __markdown;
    }
```

# Todo

At the moment block are not supported, so you have to write your program in sequence.

# License

MIT
