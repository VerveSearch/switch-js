# switch-js

A simple class that helps toogling two elements.

## Dependencies and Libraries 

1. jquery.min.js

## Usage

You can have a switch with two elements and toogle targeted elements using that switch.
You can specify target elements throught content target: 
data-target-switch1-content or data-target-switch2-content, 
or you can do it from JS.
In options elementFirst and elementSecond.
ClassName adds the class to the active switch element;
activeIndex 0 or 1, sets the active element.

```javascript

	$('.switch-js').Switch({
		className:'active-class',
		activeIndex: 1,
		labels : {
			label1 : 'Label 1',
			label2 : 'Label 2',
		},
		elementFirst : '.content1',
		elementSecond : '.content2'
	});

```
