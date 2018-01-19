'use strict';

/* 
To complete this challenge requires:

Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
Linking to your application JavaScript file from the index.html page.
Using this and event delegation
Requirements
In terms of user experience, your shopping list app must allow users to:

  ONE. enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
  TWO. check and uncheck items on the list by clicking the "Check" button
  THREE. permanently remove items from the list

  Additionally:

You must use a CDN-hosted version of jQuery *
Put your application code in a file called index.js and link to it in index.html *
Be sure to put both script elements at the bottom of the <body> element. *
Do not alter index.html or main.css other than adding the links to the external JavaScript inside index.html. Write JavaScript code that works with the existing HTML and CSS to implement the required features. *
Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
*/



// ONE
// listen for the button to be clicked *
// when clicked find the text in the input field *
// add the chosen text to the list *

$('#js-shopping-list-form').submit(function (event) {
  event.preventDefault();
  let shoppingItem = $('.js-shopping-list-entry').val();
  $('ul').append(`<li>
        <span class="shopping-item">${shoppingItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
});



// TWO
$('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

/*
$('.shopping-list') // look out for something with this class
.on('click', // when you click something with the class above...
'.shopping-item-toggle', // look for an element with this class that's INSIDE the shopping-list class.
function (event) { // now do this
  $(this) // this = event.currentTarget. SO, listen up for the event.currentTarget
  .closest // find the closest PARENT element with the following characteristics
  ('li') // characteristics = <li>
  .find // find the closest CHILD element with the following characteristics
  ('.shopping-item') // characteristics = shopping-item class
  .toggleClass('shopping-item__checked'); // add the class inside the ()
});
*/



// THREE
$('.shopping-list').on('click', '.shopping-item-delete', function (event) {
  $(this).closest('li').remove();
});