// Effect light gold
function shinyGold() {
    $('.gold .shiny').animate({
        left: '+=400px'
    }, 3000).animate({
        left: '-6rem'
    }, 0);
    setTimeout('shinyGold()', 1000);
}

// Effect light ctrBtn
function ctrBtn() {
    $('.ctrbtn .shiny').animate({
        left: '86rem'
    }, 3000).animate({
        left: '2rem'
    }, 0);
    setTimeout('ctrBtn()', 1000);
}

setTimeout(function() {
    shinyGold();
    ctrBtn();
}, 500);

// Scroll back to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 1400) {
        $('.fixed2').fadeIn(500);
    } else {
        $('.fixed2').fadeOut(500);
    }
});

try {
    $('.fadeFocus1').crossfade({
        threshold: 2,
        backgroundPosition: 'center center'
    });
} catch(e) {}

// Fade scroll
window.onload = function() {
    $(window).scroll(function() {
        $('.fadeDown, .fadeDown-time').each(function() {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 300) {
                $(this).addClass('ef-slide');
            }
        });
    }).trigger("scroll");
}

$(function() {
    // Hover wrap images
    $('img').hover(
        function() {
            $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
        },
        function() {
            $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
    );
});
