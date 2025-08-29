
1. Q: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById(): it can finds one element with a specific "ID". ID is a unique number for an element, which sets it apart from all other elements.

getElementsByClassName(): It can finds all elements with a specific Class Name. A class is like a category, so multiple elements can belong to the same one. That is, it is used to select elements of the same type together.

querySelector(): It finds the First element that matches a specific CSS selector. It's more powerful because it can find an element by its ID, class, or tag name.

querySelectorAll(): It finds all elements that match a specific CSS selector. To select multiple elements with a lot of flexibility, we use it.

So the difference is clear, getElementById() is for when we want to find a single, specific element. getElementsByClassName() is for finding everyone in a certain group/class. querySelector() is like finding the first element who matches a description. querySelectorAll() is for finding those elements who matches that description. 

2. Q: How do you create and insert a new element into the DOM?

step-1: create the element,like: document.createElement("tag")
example:  document.createElement("p")

step-2: add content if any. like: element.textContent = "text..."

step-3: Find parent element. Select existing element where to place/put the new one.

step-4: Insert new element. like: parent.appenedChild(newelement)

3. Q: What is Event Bubbling and how does it work?
When a user interacts with an element on a web page, an event is triggered. Event bubbling is the second phase of the event flow. For example, if you have a <div> that contains a <p>, and you click on the <p>, the click event is first handled by the <p> element. The event then "bubbles up" to the <div>, which can also handle the same event. This process continues up the DOM tree.

Importance:
Event bubbling is what makes event delegation possible. Instead of adding listeners to each child, put a single listener on the parent.  This parent listener can then detect and handle events from all of its children because the events will bubble up to it. This approach is more efficient, especially when dealing with a large number of dynamic elements that are added to the page also handles an event on a specific element without having its parents react to it.


4. Q : What is Event Delegation in JavaScript? Why is it useful? 
Event Delegation in JavaScript is a technique where a single event listener attaches to a parent element instead of adding listeners to multiple child elements. The event bubbles up from the child to the parent. The parent listener then identifies which child caused the event.

usefulness:
1. Simplifies code by managing events in one place.
2. Works with dynamic elements since newly added children are automatically handled.
3. Reduces memory usage by having fewer listeners in the DOM.

5. Q: What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the browser's default action for an event. It's like telling a link "don't navigate" or a form "don't submit". 
Example: document.querySelector("form").addEventListener("submit", function(e) {
e.preventDefault(); 
});
Here, this method stops the form from submitting

stopPropagation() stops the event from bubbling up to parent elements. It's like telling a click "don't go any further up the family tree".
Example:   document.querySelector("button").addEventListener("click", function(e) {
e.stopPropagation(); 
Here, this method Stops the event from reaching parent elements

    e.preventDefault(); // stops form from submitting
 
