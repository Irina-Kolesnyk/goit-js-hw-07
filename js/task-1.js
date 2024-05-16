// const link = document.querySelector(".link"); console.log(link.classList); //
// ["link", "is-active", length: 2, value: "link is-active"]



// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів
// li.item. Для кожного елемента li.item у списку ul#categories знайде й виведе в
// консоль текст заголовка елемента (тегу
// <h2>
//   ) і кількість елементів у категорії (усіх
//   <li>
//     , вкладених у нього). На що буде звертати увагу ментор при перевірці:
//     Кількість категорій, їх назва та кількість елементів отримані за допомогою
//     властивостей і методів DOM-елементів Дані за кожною категорією були отримані
//     й виведені в консоль у тілі циклу або методу forEach() У консолі має бути
//     виведено наступне повідомлення:
  
const categoriesElem = document.querySelector('#categories');
console.log(categoriesElem);
const liElem = document.querySelectorAll('.item');
console.log(liElem);
const titleElem = document.querySelector('h2');
console.log(titleElem);
const lastLiElem = document.querySelector('ul > li:last-child');
console.log(lastLiElem);