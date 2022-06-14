document.write('<script src="JS/user.js"></script>');
document.write('<script src="JS/require.js"></script>');

document.getElementById('sign-up').addEventListener("click", function() {

    var first_name = document.getElementById("first-name").value;
    var last_name = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log("Details: " + first_name + " " + last_name + " " + email + " " + password);

    // Create a new user
    var user = new User(first_name, last_name, email, password);

    console.log("User: " + user.getFirstName() + " " + user.getLastName() + " " + user.getEmail() + " " + user.getPassword());

    // let userFile = require("File/user.json");

    const userFile = require(["./user.json"], (json) => { console.log(json); });

    const userEntry = {
        "first_name": user.getFirstName(),
        "last_name": user.getLastName(),
        "email": user.getEmail(),
        "password": user.getPassword()
    }

    const userJSON = JSON.stringify(userEntry);

    userFile.writeFile("./user.json", userJSON, function(err) {
        if (err){
            console.log(err);
        } else {
            console.log("User created");
        }
    });

})