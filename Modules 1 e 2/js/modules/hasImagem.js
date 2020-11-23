export default function hasImagem(){
    const hasImg = document.querySelectorAll('.div-imagens img');
    hasImg.forEach((item) =>{
    console.log(item,item.hasAttribute('alt'));
    });
};