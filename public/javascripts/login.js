$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return decodeURIComponent(results[1]) || 0;
}

$(document).ready(() => {
    /**
    * Event handler for when the user attempts to login
    */
    $('#log-form').submit((event) => {
        event.preventDefault();

        const email = event.target.inputEmail.value;
        const password = event.target.inputPassword.value;

        if(email.length == 0 || password.length == 0) {
            swal('Error',
                'Please enter an email and password.', //TODO: this should be from a file
                'error');

            return;
        }

        $.ajax({
            type: 'POST',
            url: '/api/login',
            dataType: 'json',
            data: {
                email,
                password
            },
            success(token) {
                var returnUrl = $.urlParam("returnUrl");
                if(returnUrl.length > 0) {
                    $(location).attr('href', returnUrl);
                }
                else {
                    $(location).attr('href', '/');
                }
            },
            error(errMsg) {
                swal('Oops...',
                    errMsg.responseJSON.body,
                    'error');
            }
        });
    });
});