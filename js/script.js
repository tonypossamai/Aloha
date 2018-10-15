$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    groupCells: true
    // contain: true
});

$(function () {
    console.log('Welcome to Aloha!');
    $('.sign-up').on('submit', 'form', function () {
        event.preventDefault();
        const $emailInput = $('#email');
        if ($emailInput.val().length != 0) {
            alert('Thanks for subscribing!');
        } else {
            alert('Please enter a valid email');
        }
    });
    $('#features').click(function() {
        $('html, body').animate({
            scrollTop: $("#test").offset().top
        }, 1000);
      });

    $('#shop').click(function() {
        $('html, body').animate({
            scrollTop: $(".container").offset().top
        }, 1000);
      });
});

