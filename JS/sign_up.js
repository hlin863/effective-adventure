document.getElementById("sign_up").addEventListener("click", function() {

    var first_name = document.getElementById("first-name").value;
    var last_name = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log("Details: " + first_name + " " + last_name + " " + email + " " + password);

})