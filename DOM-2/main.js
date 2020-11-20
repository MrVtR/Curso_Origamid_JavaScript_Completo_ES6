const img = document.querySelectorAll('img');
console.log(img);

const imagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens);

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

const seletor = document.querySelector('.seletor h2');
console.log(seletor);

const p = document.querySelectorAll('p');
console.log(p[p.length-1]);