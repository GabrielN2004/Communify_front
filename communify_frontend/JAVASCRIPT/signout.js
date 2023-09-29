document.getElementById("logoutForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    logout(); // Llama a la función logout
});

function logout() {
    // No parece que necesites enviar datos en esta solicitud GET, por lo que no es necesario el cuerpo (body)
    // Si solo estás cerrando la sesión del usuario, puedes simplificar esto aún más

    fetch('http://127.0.0.1:5000/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // No es necesario configurar 'Access-Control-Allow-Origin' aquí, es responsabilidad del servidor
        },
        credentials: 'include' // Para enviar las cookies de sesión
    })
    .then(response => {
        if (response.ok) {
            // Si la respuesta es exitosa (estado 200-299), redirige al usuario a la página de inicio de sesión
            window.location.href = "iniciarsesion.html";
        } else {
            // Si hay un error, muestra un mensaje de error
            return response.json().then(data => {
                const messageElement = document.getElementById("message");
                messageElement.innerHTML = data.message;
            });
        }
    })
    .catch(error => {
        alert("An error occurred: " + error); // Manejo genérico de errores
    });
}