import $ from 'jquery';

function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

$(main);import shoppingList from './shopping-list.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);


