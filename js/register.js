
let submitButton = document.querySelector('.btn-action');
let error = document.querySelector('.error-message');

//functions submit listener
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let name = $("#username").val();
    let date = $('#dob').val();
    let age = $('#age').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let cpassword = $('#cpassword').val();
    let mobile = $('#mobile').val();

    if (password != cpassword)
        alert('password does not match with confirm password');
    else {
        $.ajax({
            url: "/guvi-main/php/register.php",
            type: "POST",
            data: {
                name: name,
                age: age,
                date: date,
                email: email,
                password: password,
                mobile: mobile,
            },
            async: true,
            success: function (response) {
                if (response) {
                    error.textContent = response;

                }
                else {
                    error.textContent = response;

                }
            }
        });


    }
});
