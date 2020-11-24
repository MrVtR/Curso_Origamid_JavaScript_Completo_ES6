const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor,color,margin} = btnStyles;

console.log(backgroundColor);
console.log(color);
console.log(margin);

let cursoAtivo = 'Javascript';
let cursoInativo = 'HTML';

[cursoAtivo,cursoInativo]=[cursoInativo,cursoAtivo];
console.log(cursoAtivo,cursoInativo);

const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
console.log(bobCor);