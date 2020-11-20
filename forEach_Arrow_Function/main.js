const p = document.querySelectorAll('p');

p.forEach((paragrafos) => console.log(paragrafos));

p.forEach((paragrafos) => console.log(paragrafos.innerText));

const imgs = document.querySelectorAll('img');
imgs.forEach((item, index) =>{
    console.log(item,index);
});

let i = 0;
imgs.forEach(() =>{
    console.log(i++);
});

imgs.forEach(() => i++);

console.log(i);