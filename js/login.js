let error = document.querySelector('.error-message');
$('#login-submit').click(function (e) {
    e.preventDefault();

    var email = $('#email').val();
    var password = $('#password').val();
    localStorage.setItem("myValue", email);
    $.ajax({
        url: "/guvi/php/login.php",
        type: "POST",
        data: {
            email: email,
            password: password
        },
        async: true,
        success: function (response) {
            if (response == "true") {
                location.href = '/guvi/profile.html';
            }
            else if (response == "false") {
                error.textContent = "Account Not found";
            }
            else {
                console.log(response);
                error.textContent = "Error occured";

            }
        }
    });
});
