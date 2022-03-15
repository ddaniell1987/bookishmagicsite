const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
menu.onclick = function menu(){
    menu.classList.toggle('active');
    navigation.classList.toggle('active');

};
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});