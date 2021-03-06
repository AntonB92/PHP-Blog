
$(function () {
    let everythingValid = true;
    let regexBlind = /[ ]/;

    $('#username').on('keyup', function () {
        let username = $('#username').val();

        if((username.length < 5 || username.length > 15)|| username.match(regexBlind)){
            $('#usernameValid').text("The username must be between 5 and 15 symbols");
            everythingValid = false;
        } else {
            $('#usernameValid').text('');
            everythingValid = true;
        }
    });

    $('#password').on('keyup', function () {
       let password =  $('#password').val();

        if(password.length < 5 || password.match(regexBlind)){
            $('#passwordValid').text("The password must be at least 6 symbols");
            everythingValid = false;
        } else {
            $('#passwordValid').text('');
            everythingValid = true;
        }
    });

    $('#passwordConf').on('blur', function () {
        let password =  $('#password').val();
        let passwordConfirm = $('#passwordConf').val();

        if(password != passwordConfirm){
            $('#passwordConfirmValid').text("The passwords mismatch.");
            everythingValid = false;
        } else {
            $('#passwordConfirmValid').text('');
            everythingValid = true;
        }
    });

    $('#email').on('keyup', function () {
       let email = $('#email').val();
       let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

       if(! email.match(pattern)){
           $('#emailValid').text('Please enter valid email');
           everythingValid = false;
       } else {
           $('#emailValid').text('');
           everythingValid = true;
       }
    });

    $('#firstName, #lastName').on('keyup', function () {
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();

        if(firstName.match(regexBlind) || lastName.match(regexBlind)){
            $('#namesValid').text('Please enter valid names.');
            everythingValid = false;
        } else {
            $('#namesValid').text('');
            everythingValid = true;
        }
    });

    $('#registrationForm').on('submit', function () {
        if(everythingValid !== true)
            event.preventDefault();
    });
});