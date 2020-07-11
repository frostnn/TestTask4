$('.main-slider').slick({
  dots: true,
  arrows: false
});

$(() => {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    let sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 1000);
  });
});