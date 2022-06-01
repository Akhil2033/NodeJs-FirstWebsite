window.onload = pageload;
function pageload(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-content');

    burger.onclick = function(){
        nav.classList.toggle('burger-active');
    }
}
