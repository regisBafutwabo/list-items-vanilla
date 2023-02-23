# list-items-vanilla
This web app generates a list of 100 items that are interactive on hover and click

## How to Run

``` 
    npm i

    npm run start
```

## Main Functions Description

- `createListItem` : function that creates a list item element, adds some content to it, and attaches event listeners for mouseover, mouseout, and click events.
  
- `onClickItem` : event handler that is triggered when an item is clicked. It adds the `clicked` class to the clicked item, removes the event listener for clicks, and hover from the clicked item, displays the overlay element, and adds a click event listener to it.
  
- `onOverlayIn` : function that is triggered when the `overlay` element is displayed. It gets the clicked item from the DOM and updates the styles of the clicked item to display it as a full-size element in the center of the screen.
  
- `shiftItems` : function that takes an object as a parameter that includes the item that triggered the function and a type that determines whether to shift or unshift the other items in the list. When called with type="shift", the function shifts the hovered item to the right, adds some styles to it, and shifts the previous and next items to the right. When called with type="unshift", the function resets the styles of the hovered item and the previous and next items.
  
- `onOverlayOut` : event handler that is triggered when the mouse clicks onto the overlay element. It hides the overlay element, removes the clicked class from the clicked item, calls the shiftItems function with the clicked item and type="unshift" as parameters, and updates the styles of the clicked item to return it to its original position.

- `onMouseOut` and `onMouseOver` : event handlers that calls the shiftItems function with the hovered item and type of `unshift` or `shift` as parameters (Default type is `shift`)