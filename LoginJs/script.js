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
      const response = await fetch('http://localhost:8000/src/Auth.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserName: inputUserName,  
          Password: inputPassword  
        })
      });

      if (!response.ok) {
        this.mostrarModal("Error en la solicitud: " + response.status);
        return;
      }

      const data = await response.json();

      if (data.success) {
        sessionStorage.setItem('userType', data.userType); // Asume que la API devuelve el rol del usuario
        window.location.href = this.HomePage;
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