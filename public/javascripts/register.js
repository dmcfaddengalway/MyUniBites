$(document).ready(() => {
    /**
    * Event handler for when the user attempts to register
    */
    $('#reg-form').submit((event) => {
        event.preventDefault();

        //data checking

        const full_name = event.target.inputFullName.value;
        const email = event.target.inputEmail.value;
        const password = event.target.inputPassword.value;
        const confirm_password = event.target.inputConfirmPassword.value;

        let message = '';
        if(full_name.length == 0) {
            message += 'Please enter a full name.<br/>';
        }
    
        if(email.length == 0) {
            message += 'Please enter an email.<br/>';
        }

        if(password.length == 0) {
            message += 'Please enter a password.<br/>';
        }

        if(confirm_password.length == 0) {
            message += 'Please enter the confirmation password.<br/>';
        }

        if(password.length > 0 && confirm_password != password) {
            message += 'Password and password confirmation do not match.<br/>';
        }

        if(message.length > 0) {
            swal('Errors',
                message,
                'error');

            return;
        }

        $.ajax({
            type: 'POST',
            url: '/api/register',
            dataType: 'json',
            data: {
                full_name,
                email,
                password,
                confirm_password
            },
            success(token) {
                $(location).attr('href', '/feed');

                //Redirect to a login page
            },
            error(errMsg) {
                swal('Oops...',
                    errMsg.responseJSON.body,
                    'error');
            }
        });
    });
});