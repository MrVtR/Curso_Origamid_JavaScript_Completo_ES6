export default function hrefChange(){
    const hrefMenu = document.querySelector('.menu a[href^="http"]');
    hrefMenu.setAttribute('href','https://www.google.com');
    console.log(hrefMenu);
};