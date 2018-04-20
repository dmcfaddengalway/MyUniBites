jQuery(document).ready(($) => {
    $(window).scroll(() => {
        const scrollPos = $(window).scrollTop();
        const navbar = $('.navigation');
        const button = $('.specialButton');

        if(scrollPos > 50) {
            navbar.addClass('alt-color');
            button.addClass('alt-border');
        } else{
            navbar.removeClass('alt-color');
            button.removeClass('alt-border');
        }
    });
});