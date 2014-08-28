#[jQuery Fill Plugin](https://github.com/troyk/jquery.fill)

##Overview
The jQuery Fill Plugin allows you to easily populate forms or existing DOM elements from javascript objects or other dom elements

---
 
##API

```javascript

// fill a form from an object
$('#myForm').fill({name: "Tyrone"});

// fill a form from html, data values are pulled from the text node 
// of the element.  Elements are mapped to form names via the 
// data-name attribute (can be overridden)
$('#myForm').fill($('#someDOMcontainer')); // data-name
$('#myForm').fill($('#someDOMcontainer'), 'foo'); // data-foo

// inverse of above
$('#someDOMcontainer').fill($('#myForm')); 

````

