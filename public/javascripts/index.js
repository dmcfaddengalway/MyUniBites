$(document).ready(() => {
    getComments();
});

function getComments() {
    $.get('/api/getComments', (data) => {
        let recentReviews = '';

        for(let i = 0; i < 3; i++) {
            recentReviews +=
                `<div class="col-lg-3 col-xs-7 col-lg-offset-0 col-xs-offset-2 toRight">
                    <h1 class="subHeaderLower">${data[i].user_name}</h1>
                    <p class="captionLower">${data[i].comment}</p>
                </div>
                <div class="col-xs-1"></div>`;
        }

        $('#recentReviews').html(recentReviews);

        if(!showPosts) {
            $('#feedPosts').hide();
        } else{
            $('#feedPosts').show();
        }

        setTimeout(getComments, 10000);
    });
}

jQuery(document).ready(($) => {
    $('.live-search-list li').each(function () {
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });

    $('.live-search-box').on('keyup', function () {
        const searchTerm = $(this).val().toLowerCase();

        $('.live-search-list li').each(function () {
            if($(this).filter(`[data-search-term *= ${searchTerm}]`).length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else{
                $(this).hide();
            }
        });
    });
});

$('.dropdown-menu li a').on('click', function () {
    const selectedValue = $(this).val();
    $('.live-search-box').val($(this).text());
});