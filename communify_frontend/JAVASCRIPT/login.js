document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});

function login() {
    const user_email = document.getElementById("user_email").value;
    const user_password = document.getElementById("user_password").value;

    const data = {
        user_email,
        user_password,
    };

    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin-':'*'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .then(response => {
        if (response.ok) { // Verifica si la respuesta tiene un estado 200-299
            return response.json().then(data => {
                window.location.href = "index.html"; // Redirige en caso de éxito
            });
        } else {
            return response.json().then(data => {
                const messageElement = document.getElementById("message");
                messageElement.innerHTML = data.message; // Muestra el mensaje de error
            });
        }
    })
    .catch(error => {
        alert("An error occurred: " + error); // Muestra un mensaje de error genérico en caso de fallo
    })
}
