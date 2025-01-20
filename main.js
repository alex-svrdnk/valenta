// window.addEventListener('scroll', function() {
//     const menu = document.querySelector('.menu');
//     const horsesSection = document.querySelector('#horses');
//     const eventsSection = document.querySelector('#events');
//     const thirdSectionTop = horsesSection.getBoundingClientRect().top;
//     const fifthSectionBottom = eventsSection.getBoundingClientRect().bottom;
//     const viewportHeight = window.innerHeight;
//
//     if (thirdSectionTop < viewportHeight / 2 && fifthSectionBottom > viewportHeight / 1.85) {
//         menu.classList.add('show');
//         menu.style.top = '50%';
//         menu.style.transform = 'translateY(-50%)';
//     } else {
//         menu.classList.remove('show');
//     }
//
    if (fifthSectionBottom < viewportHeight/1.5) {
        menu.style.position = 'absolute';
        menu.style.top = `${eventsSection.offsetTop + eventsSection.offsetHeight - menu.offsetHeight}px`;
    } else {
        menu.style.position = 'fixed';
        menu.style.top = '50%';
        menu.style.transform = 'translateY(-50%)';
    }
// });
