// store the elements into variable. incase you re going to mention them alot//

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/*? what does toggle mean
we could seperate and remove statements.
toggle adds class of it does not currently exist or remove the class if it does exist.
The CSS class rules will handle the different views, lay outs and displays.
Javascript only applies the class value or not*/