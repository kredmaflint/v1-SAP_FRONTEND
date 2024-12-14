const user = {
  HomePage: './home/home.html',

  Credentials: async function () {
    const inputUserName = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    if (inputUserName === "" || inputPassword === "") {
      this.mostrarModal("Por favor, ingresa tu nombre de usuario y contraseña.");
      return;
    }

    try {
      // Realiza la solicitud POST a la URL de autenticación
      const response = await fetch('http://localhost:8000/Auth/Auth.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserName: inputUserName,  
          Password: inputPassword  
        })
      });

      const responseText = await response.text(); // Obtenemos la respuesta como texto
      console.log(responseText); // Muestra el texto de la respuesta para depuración

      if (!response.ok) {
        this.mostrarModal("Error en la solicitud: " + response.status);
        return;
      }

      // Intentamos parsear la respuesta a JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        this.mostrarModal("Error al procesar la respuesta: " + e.message);
        return;
      }

      if (data.success) {
        if (data.message === 'Autenticación exitosa') {
          sessionStorage.setItem('userType', data.userType); // Asume que la API devuelve el rol del usuario
          window.location.href = this.HomePage;
        } else if (data.message === 'Usuario creado exitosamente') {
          this.mostrarModal("Usuario creado exitosamente, ahora puedes iniciar sesión.");
        }
      } else {
        this.mostrarModal(data.message || "Nombre de usuario o contraseña incorrectos.");
      }
    } catch (error) {
      this.mostrarModal("Error de conexión: " + error.message);
    }
  },

  mostrarModal: function (message) {
    alert(message);
  }
};