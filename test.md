# This is a test markdown module

* The aim of this is to test the basic functionality.
* To see if it works.

```
module.exports.hello = function(){
	console.log("hello world");
}
```

The above code block should have been returned.

## We can also programmatically retrieve the markdown

    module.exports.md = function(){
    	return __markdown;
    }


```
var x = 1;
```
We should also be able to put `x = 2` in text, or even `x = 3;`

```js
module.exports.getx = function(){
	return x;
}
```

## Apparently you can access a __dir variable

```
console.log(__markdown);
```