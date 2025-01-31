const menu = document.querySelector('#nav-links');

function closeMenu(){
    menu.classList.remove('active');
}

document.querySelector('#mobile-menu').addEventListener('click', function(){
    menu.classList.add('active');
});
document.querySelector('.close-nav').addEventListener('click', closeMenu)

document.querySelector('#how-to-get-link').addEventListener('click', closeMenu);