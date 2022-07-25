const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const products = ingredients.map(el => {

  const productList = document.createElement('li');
  productList.classList.add('item');
  productList.textContent = el;
  return productList;
}
)

const ul = document.querySelector('ul')
ul.append(...products)


