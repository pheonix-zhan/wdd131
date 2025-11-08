// how to declare variables

const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector('_____'); //to fill in the blank to reference the html element that is a unordered list

//creating li element that will hold each entry's chapter title and an assocate delete button
const li = document.createElement('li');

// create a delete button
const deleteButton = document.createElement('button');

//put values in li element. variables textContent or innerHTML.
// textContent is preferred over innerHTML becuase it is more secure.
// if you need to include html tags the use innerhtml
//textcontent will not render html tags. it will display them as text

li.textContent = input.value;

// populate the button textConr with an x
deleteButton.textContent = '❌';

//append the li element variable withthe delete button
li.append(deleteButton);

//append the li element variable to the unordered list in your html
list.append(li);

// creatin click even listener for the add chapter button using an addeventlistener
button.addEventListener('click', function(){})// code to run when the button is clicked


