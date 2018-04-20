const totalCharacters = 140;
let showPosts = false;

$(document).ready(() => {
    $('#postForm').keyup((event) => {
        const inputText = event.target.value;
        $('#charRemaining').html(totalCharacters - inputText.length);
    });

    getComments();
});

$('#postForm').submit((event) => {
    event.preventDefault();
    $.post('/api/addComment',
        {
            comment: event.target.inputPost.value,
            rating: $("input[name='rating']:checked").val()
        }, (result) => {
        $('#charRemaining').html(totalCharacters);

        // reset the form
        event.target.reset();
        $("input[name='rating']").prop('checked', false);

        getComments();

        //alert(result.id);
        console.log('saved comment with id %d', result.id);
    });
});

function getStarsHtml(rating){
    var html = ""
    for(var i = 0; i < rating; i++){
        html += '<span class="fa fa-star"></span>';
    }
    return html;
}

function getComments() {
    $.get('/api/getComments', (data) => {
        let posts = '<div class="col-sm-12"><p class="title">Reviews</p></div>';

        for(let i = 0; i < 3; i++) {
            if(typeof(data[i].rating) == "undefined") {
                data[i].rating = 1;
            }

            posts +=
                `<div class="col-sm-4">
                    <p>${data[i].user_name}</p>
                    <p>"${data[i].comment}"</p>
                ` + getStarsHtml(data[i].rating) + `
                </div>`;
        }

        $('#cafereviews').html(posts);
        $('#count').html(data.length);

        if(!showPosts) {
            $('#feedPosts').hide();
        } else{
            $('#feedPosts').show();
        }

        setTimeout(getComments, 10000);
    });
}