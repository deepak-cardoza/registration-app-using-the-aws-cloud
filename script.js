document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Replace this URL with the actual registration API endpoint
    const registrationUrl = "https://jsonplaceholder.typicode.com/posts";

    fetch(registrationUrl, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("message").innerText = "Registration successful!";
    })
    .catch(error => console.error("Error:", error));
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Replace this URL with the actual login API endpoint
    const loginUrl = "https://jsonplaceholder.typicode.com/posts";

    fetch(loginUrl, {
        method: "POST",
        body: JSON.stringify({
            username: loginUsername,
            password: loginPassword
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("message").innerText = "Login successful!";
    })
    .catch(error => console.error("Error:", error));
});
