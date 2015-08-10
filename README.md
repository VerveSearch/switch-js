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

----------------------------------------
  <div class="switch-js" data-target-switch1-content=".content1" data-target-switch2-content=".content2">
    <span class="switch-state-1 waves-effect waves-light btn-large"></span><span class="switch-state-2 waves-effect waves-light btn-large"></span>
  </div>
  <div>
    <div class="content1">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </div>
    <div class="content2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    </div>
  </div>
----------------------------------------

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
