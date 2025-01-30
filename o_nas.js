const menu = document.querySelector('#nav-links')

document.querySelector('#mobile-menu').addEventListener('click', function(){
    menu.classList.add('active');
});
document.querySelector('.close-nav').onclick = () => {
    menu.classList.remove('active');
}