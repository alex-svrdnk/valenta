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
});

