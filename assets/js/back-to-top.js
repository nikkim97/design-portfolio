// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$('#back-to-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop : 0}, 800);
}); 