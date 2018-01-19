'use strict';

const store = [
    {name: 'apples', checked: false},
    {name: 'oranges', checked: false},
    {name: 'milk', checked: true},
    {name: 'bread', checked: false}
];

console.log(store);

function renderShoppingList() {
      // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
  const shoppingListItemsString = '<li>apples</li>';

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}

function handleNewItemSubmit() {
    // this function will be responsible for when users add a new shopping list item
    console.log('`handleNewItemSubmit` ran');
  }
  
  
  function handleItemCheckClicked() {
    // this function will be responsible for when users click the "check" button on
    // a shopping list item.
    console.log('`handleItemCheckClicked` ran');
  }
  
  
  function handleDeleteItemClicked() {
    // this function will be responsible for when users want to delete a shopping list
    // item
    console.log('`handleDeleteItemClicked` ran')
  }
  
  // this function will be our callback when the page loads. it's responsible for
  // initially rendering the shopping list, and activating our individual functions
  // that handle new item submission and user clicks on the "check" and "delete" buttons
  // for individual shopping list items.
  function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();
  
  }
  
  // when the page loads, call `handleShoppingList`
  $(handleShoppingList);