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

    $.post('/api/addComment', { comment: event.target.inputPost.value }, (result) => {
        $('#charRemaining').html(totalCharacters);
        event.target.reset();
        getComments();

        //alert(result.id);
        console.log('saved comment with id %d', result.id);
    });
});

$('#feedPosts').click((event) => {
    console.log(event.target.name);
    if(event.target.name) {
        debugger;
        $.ajax({
            url: `/api/removeComment/${event.target.name}`,
            type: 'DELETE',
            success(result) {
                getComments();
            }
        });
    }
});

function getComments() {
    $.get('/api/getComments', (data) => {
        let posts = '';
        for(let i = 0; i < data.length; i++) {
            posts += `<div class='row well text-left'><div class='col-xs-9'>${data[i].comment}</div><div class='col-xs-3'>` + `<button type='button' name='${data[i]._id}' class='btn btn-danger'>` + 'Delete</button></div></div></div>';
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

$(function() {
    rating = $(".rating").val();
    console.log(rating);
});
