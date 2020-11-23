export default function itemMenuAdd(){
    const itemMenu = document.querySelectorAll('.menu p');
    itemMenu.forEach((item) =>{
        item.classList.add('ativo');
    });
    console.log(itemMenu);
};