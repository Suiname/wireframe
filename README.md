# Mario Maker Database

This is a website meant to provide a platform to collect, review, and share Mario Maker levels.

#### UI Constructors
I made one UI component constructor that takes a string for input, if you input 'search' it'll create a search input box component, if you input anything else it'll create a component for all the text boxes in the content class.  The search bar component creates:

1. a searchbox object which has a domElement set to the first input element
2. a listener event for the search box
3. a render function which takes a value and sets the text inside the search box to that value.


The text box component creates:

1. a textbox object object which has an array of domElements which contain every tag on the page of class 'content' so we are able to modify all text
2. a render method which loops through the array of all elements with class name content and then calls the string replace method on all text inside these elements to add some CSS that makes the text appear highlighted in purple.


![Mario Maker](screen.png)
