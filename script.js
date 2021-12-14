$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position > 500) {
        $('.nav-menu').addClass('custom-nav');
    }
    else {
        $('.nav-menu').removeClass('custom-nav');
    }
});

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if (position >= 600) {
        $('.img-fluid').addClass('img');
        $('.img-fluid').addClass('text-amination');
    }
    else {
        $('.img-fluid').addClass('img');
        $('.img-fluid').removeClass('text-amination');
    }
})





























