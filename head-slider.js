const texts = {
    horses: {
        head: 'hodowla Bydła <br>i mięso ekologiczne',
        desc: 'Nasze gospodarstwo specjalizuje się w hodowli krów Red Angus.\n' +
            '                    Dzięki starannemu doborowi pasz i ekologicznej hodowli zapewniamy najwyższej \n' +
            '                    jakości mięso, które łączy doskonały smak z troską o środowisko naturalne.'
    },
    meat: {
        head: 'konie i stajnia',
        desc: 'Nasza stajnia to miejsce, gdzie pasja do koni łączy się z profesjonalizmem. Oferujemy jazdę konną dla początkujących i zaawansowanych, malownicze trasy do przejażdżek oraz warsztaty opieki nad końmi. Przyjdź i odkryj magię kontaktu z tymi niezwykłymi zwierzętami!'
    },
    events: {
        head: 'eventy i domki',
        desc: 'Odpocznij wśród natury, wynajmując komfortowy domek lub biorąc udział w organizowanych przez nas wydarzeniach. Oferujemy spotkania medytacyjne, warsztaty oraz kameralne eventy w otoczeniu malowniczych pól i lasów. Sprawdź naszą ofertę i znajdź swój idealny sposób na relaks!'
    }
}

$(() => {
    let bg = 'horses';
    $('.main-section-item').on('click', function () {
        bg = $(this).data('bg');
        $('.head-slide').removeClass('active-head-slide');
        $('.main-section-item').removeClass('selected-menu-item');
        $(`.head-slide[data-bg="${bg}"]`).addClass('active-head-slide');
        $(this).addClass('selected-menu-item');
        $('#main-header').html(texts[bg].head);
        $('#main-desc').text(texts[bg].desc);
    });

    $('#mobile-menu').on('click', () => {
        $('#nav-links').addClass('active');
    });

    $('#href-head').on('click', function () {
        $(this).find('a').attr('href', `#${bg}`);
    })


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 8 * 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

