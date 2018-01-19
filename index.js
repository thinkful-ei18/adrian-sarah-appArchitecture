'use strict';

const STORE = {
  items: [
  // These are our items prior to adding the isEditing property!!!
  // {name: "apples", checked: false},
  // {name: "oranges", checked: false},
  // {name: "milk", checked: true},
  // {name: "bread", checked: false}

    {name: 'apples', checked: false, isEditing: false},
    {name: 'oranges', checked: false, isEditing: false},
    {name: 'milk', checked: true, isEditing: false},
    {name: 'bread', checked: false, isEditing: false}
  ]
};


function generateItemElement(item, itemIndex, template) {
  // convert to if and else statement with condition based on isEditing
  
  // old return statement!
  // return `
  //   <li class="js-item-index-element" data-item-index="${itemIndex}">
  //     <span class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}
  //     </span>
  //     <div class="shopping-item-controls">
  //     <!-- new edit buttons -->
  //       <button class="shopping-item-edit js-item-edit">
  //           <span class="button-label">Edit</span>
  //       </button>
  //       <button class="shopping-item-toggle js-item-toggle">
  //           <span class="button-label">check</span>
  //       </button>
  //       <button class="shopping-item-delete js-item-delete">
  //           <span class="button-label">delete</span>
  //       </button>
  //     </div>
  //   </li>`;
}


function generateShoppingItemsString(shoppingList) {
  console.log('Generating shopping list element');

  const items = shoppingList.map((item, index) => generateItemElement(item, index));
  
  return items.join('');
}


function renderShoppingList() {
  // render the shopping list in the DOM
  console.log('`renderShoppingList` ran');
 
  const shoppingListItemsString = generateShoppingItemsString(STORE.items);

  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}


function addItemToShoppingList(itemName) {
  console.log(`Adding "${itemName}" to shopping list`);
  STORE.items.push({name: itemName, checked: false});
}

function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    console.log('`handleNewItemSubmit` ran');
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}

function toggleCheckedForListItem(itemIndex) {
  console.log('Toggling checked property for item at index ' + itemIndex);
  STORE.items[itemIndex].checked = !STORE.items[itemIndex].checked;
}

function getItemIndexFromElement(item) {
  const itemIndexString = $(item)
    .closest('.js-item-index-element')
    .attr('data-item-index');
  return parseInt(itemIndexString, 10);
}

function handleItemCheckClicked() {
  $('.js-shopping-list').on('click', '.js-item-toggle', event => {
    console.log('`handleItemCheckClicked` ran');
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    toggleCheckedForListItem(itemIndex);
    renderShoppingList();
  });
}

function removeListItem(itemIndex) {
  console.log('Delete clicked for item at index ' + itemIndex);
  STORE.items.splice(itemIndex, 1);
}

function handleDeleteItemClicked() {
  $('.js-shopping-list').on('click', '.js-item-delete', event => {
    console.log('`handleItemDeleteClicked` ran');
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    removeListItem(itemIndex);
    renderShoppingList();
  });
  console.log('`handleDeleteItemClicked` ran');
}


function handleStartEditItem() {
  $('.js-shopping-list').on('click', '.js-item-edit', event => {
    console.log('`handleStartEditItem` ran');

    STORE.items[itemIndex].isEditing = true;
    renderShoppingList();
    // if (isEditing === true) {
    // condition to go inside of generateItems
    // }

  });
}

function handleSubmitEditItem() {}

function handleCancelEditItem() {}



// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  handleStartEditItem();
}

// when the page loads, call `handleShoppingList`
$(handleShoppingList); 