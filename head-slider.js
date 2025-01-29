$(() => {
    $('.main-section-item').on('click', function () {
        const bg = $(this).data('bg');
        $('.head-slide').removeClass('active-head-slide');
        $('.main-section-item').removeClass('selected-menu-item');
        $(`.head-slide[data-bg="${bg}"]`).addClass('active-head-slide');
        $(this).addClass('selected-menu-item');
    });

    $('#mobile-menu').on('click', () => {
        $('#nav-links').addClass('active');
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

