$(document).ready(function () {

    // inicio //
  
    function resizeThis() {
        var $imgH = $('.middle img').width();
        if ($(window).width() >= 768) {
            $('.left, .right').css('height', $imgH);
        } else {
            $('.left, .right').css('height', 'auto');
        }
    }

    resizeThis();
    $(window).resize(function () {
        resizeThis();
    });

    // scroll suave //
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});

// animación scroll //
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0, rootMargin: '0px 0px -50% 0px' });

document.querySelectorAll('.galeria section').forEach(function(section) {
    section.classList.add('fade-up');
    observer.observe(section);
});