$(() => {
    let bg = '';
    $('.main-section-item').each(function(){
        $(this).on('click', function(){
           bg = $(this).data('bg');
           $('.head-slide').each(function(){
               $(this).removeClass('active-head-slide');
           });
           $(`.head-slide[data-bg="${bg}"]`).addClass('active-head-slide');
        })
    })
})