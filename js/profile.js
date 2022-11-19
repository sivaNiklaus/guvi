let b = localStorage.getItem("myValue");
// localStorage.removeItem("myValue");
let userName = document.querySelector('.name-user');
let age = document.querySelector('.age-user');
let dob = document.querySelector('.dob-user');
let mobile = document.querySelector('.mobile-user');
let nameUpdate = document.querySelector('.btn-name');
let ageUpdate = document.querySelector('.btn-age');
let dobs = document.querySelector('.btn-dob');
let mobileUpdate = document.querySelector('.btn-mobile');
let logout = document.querySelector('.btn-logout');

let error = document.querySelector('.error-message');
let vals = document.querySelector('.value');

console.log(b);
if (b != null) {
    // localStorage.setItem("myValue", b);


    var dataChange = {
        email: b
    };
    console.log(dataChange);

    $.ajax({
        url: "/guvi-main/php/profile.php",
        type: "POST",
        data: {
            email: b
        },
        async: true,
        success: function (response) {
            if (response) {
                let a = JSON.parse(response);
                userName.textContent = a.name;
                age.textContent = a.age;
                dob.textContent = a.date;
                mobile.textContent = a.mobile;
                dataChange.name = a.name;
                dataChange.age = a.age;
                dataChange.mobile = a.mobile;
                dataChange.date = a.date;
            }
            else {
                console.log(response);
                error.textContent = response;

            }
        }
    });

    ageUpdate.addEventListener('click', function () {
        let changes = prompt("Enter the value");
        dataChange.age = changes;
        console.log(dataChange.age);
        change();
    });
    mobileUpdate.addEventListener('click', function () {
        let cha = prompt("Enter the value");
        dataChange.mobile = cha;
        console.log(dataChange.mobile);
        change();
    });
    nameUpdate.addEventListener('click', function () {
        let changess = prompt("Enter the value");
        dataChange.name = changess;
        change();
    });
    dobs.addEventListener('click', function () {
        let changessss = prompt("Enter the value");
        dataChange.date = changessss;
        change();
    });
}
else {
    location.href = '/guvi-main/index.html';
}
//function to update
function change() {

    $.ajax({
        url: "/guvi-main/php/profileUpdate.php",
        type: "POST",
        data: dataChange,
        async: true,
        success: function (response) {
            if (response) {
                let q = JSON.parse(response);
                console.log(response);
                userName.textContent = q.name;
                age.textContent = q.age;
                dob.textContent = q.date;
                mobile.textContent = q.mobile;
                dataChange.age = q.age;
                console.log(dataChange);

            }
            else {
                console.log(response);
                error.textContent = response;

            }
        }
    });
}


logout.addEventListener('click', function () {
    localStorage.removeItem("myValue");
    location.href = '/guvi-main/index.html';
});
