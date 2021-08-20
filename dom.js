//////query selctor///////


// const para = document.querySelector('body > h1');
// console.log(para);

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para);
// });

// const errors = document.querySelectorAll('.error'); //select ojly classes with name error

// console.log(errors);

///////adding cintent to html and browser /////
// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText += 'ninjas are awesome!';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'newtxt';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2>this new h2</h2>';

// const people = ['mario','luigi','json'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// })

////geteing and setting attributes////

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.thenetninja.co.uk');
// link.innerText = 'this is net ninja web site';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class','success');
// msg.setAttribute('style','color: green;');

/////adding css styles

// const title = document.querySelector('h1');
// // title.setAttribute('style','nargin: 50px');
// console.log(title.style);
// title.style.margin = '50px';
// title.style.color = 'maroon';
// title.style.fontSize = '50px';

////adding and removing classes
// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.remove('error');
// content.classList.add('success');

// const content = document.querySelectorAll('p');
// //console.log(content);
// content.forEach(para => {
//     const arr = para.innerText.split(' ');
//     // console.log(arr);
//     // console.log('success' in arr);
//     // if('success' in arr){
//     //     para.classList.add('success');
//     // } else if('error' in arr){
//     //     para.classList.add('error');
//     // }
//     if(para.textContent.includes('error')){
//         para.classList.add('error');
//     } else if (para.textContent.includes('success')){
//         para.classList.add('success');
//     }
// })

////adding a toggle method

// const title = document.querySelector('h1');
// title.classList.toggle('title');
// const title = document.querySelector('.title');
// title.classList.toggle('name');
// title.classList.toggle('name');

/////lec52 parents, child and siblings
// const article = document.querySelector('article');
// console.log(article.children); //return html collection
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// })

const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
console.log(title.parentElement.parentElement);
