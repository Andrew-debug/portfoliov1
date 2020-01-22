window.addEventListener('scroll', function(){
    const sideNav = document.getElementById('side-nav');

    if(window.pageYOffset < 500){
        sideNav.style.visibility = 'hidden';
        sideNav.style.opacity = '0';

    } else {
        sideNav.style.visibility = 'visible';
        sideNav.style.opacity = '1';
    }
})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.main section').each(function(i) {
            if ($(this).position().top <= windscroll) {
                $('.dot-nav a.active').removeClass('active');
                $('.dot-nav a').eq(i).addClass('active');
            }
        });
    } 

}).scroll();
