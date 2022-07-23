const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

const text = document.querySelectorAll('h2');
const uniqCategory = document.querySelectorAll('ul');

console.log(`Category: ${text[0].textContent}`);
console.log(`Elements: ${uniqCategory[1].querySelectorAll('li').length}`);

console.log(`Category: ${text[1].textContent}`);
console.log(`Elements: ${uniqCategory[2].querySelectorAll('li').length}`);

console.log(`Category: ${text[2].textContent}`);
console.log(`Elements: ${uniqCategory[3].querySelectorAll('li').length}`);