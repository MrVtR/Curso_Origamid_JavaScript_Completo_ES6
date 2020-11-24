export default function itemMenuRemoveAdd(){
    const itemMenu = document.querySelectorAll('.menu p');
    itemMenu.forEach((item) =>{
        item.classList.remove('ativo');
    });
    itemMenu[0].classList.add('ativo');
    console.log(itemMenu);
};