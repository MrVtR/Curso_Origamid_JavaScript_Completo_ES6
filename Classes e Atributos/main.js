const itemMenu = document.querySelectorAll('.menu p');
itemMenu.forEach((item) =>{
    item.classList.add('ativo');
});
console.log(itemMenu);

itemMenu.forEach((item) =>{
    item.classList.remove('ativo');
});
itemMenu[0].classList.add('ativo');
console.log(itemMenu);

const hasImg = document.querySelectorAll('.div-imagens img');
hasImg.forEach((item) =>{
    console.log(item,item.hasAttribute('alt'));
});

const hrefMenu = document.querySelector('.menu a[href^="http"]');
hrefMenu.setAttribute('href','https://www.google.com');
console.log(hrefMenu);



