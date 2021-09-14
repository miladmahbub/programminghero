document.getElementById('login-submit').addEventListener('click', function () {
    const emailfield = document.getElementById('user-email');
    //    user email
    const useremail = emailfield.value;
    //    console.log(useremail);


    // get user password 

    const passwordfield = document.getElementById('user-password');
    const userpassword = passwordfield.value;
    // console.log(userpassword);

    // check email and password 
    if (useremail == "miladmahbub99@gmail.com" && userpassword == "123456") {
        window.location.href = 'banking.html';
    }

});