document.write('<script src="JS/user.js"></script>');
document.write(
    '<script src="https://cdn.bootcss.com/FileSaver.js/2014-11-29/FileSaver.js"></script>');

document.getElementById('sign-up').addEventListener("click", function() {

    var first_name = document.getElementById("first-name").value;
    var last_name = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log("Details: " + first_name + " " + last_name + " " + email + " " + password);

    // Create a new user
    var user = new User(first_name, last_name, email, password);

    console.log("User: " + user.getFirstName() + " " + user.getLastName() + " " + user.getEmail() + " " + user.getPassword());

    // initialise userEntry to store the JSON structure
    const userEntry = {
        "first_name": user.getFirstName(),
        "last_name": user.getLastName(),
        "email": user.getEmail(),
        "password": user.getPassword()
    }

    // convert the userEntry to JSON format
    const userJSON = JSON.stringify(userEntry);

    // create a new file
    var blob = new Blob([userJSON], {type: "text/plain;charset=utf-8"});

    saveAs(blob, "File/user.json");

})