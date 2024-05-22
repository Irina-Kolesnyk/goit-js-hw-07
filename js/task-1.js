const categoriesElem = document.querySelectorAll('ul#categories >.item');
console.log(`Number of categories: ${categoriesElem.length}`);

const categoryItems = categoriesElem.forEach(elem => {
    const categoryTitle = elem.querySelector('h2').textContent;
    const categoryList = elem.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Element: ${categoryList}`);
});

