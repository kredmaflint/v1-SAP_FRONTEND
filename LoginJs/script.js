const user = {
    username: 'admin',
    password: '1234',
    userType: 'admin',
    HomePage: './home/home.html',
  
    Credentials: function () {
      const inputUserName = document.getElementById('username').value;
      const inputPassword = document.getElementById('password').value;
  
      if (inputUserName === "" || inputPassword === "") {
        this.mostrarModal("Por favor, ingresa tu nombre de usuario y contraseña.");
      } else if (inputUserName !== this.username) {
        this.mostrarModal("Nombre de usuario incorrecto.");
      } else if (inputPassword !== this.password) {
        this.mostrarModal("Contraseña incorrecta.");
      } else {
        sessionStorage.setItem('userType', this.userType);
        window.location.href = this.HomePage;
      }
    },
  
    mostrarModal: function (message) {
      alert(message);
    }
  };  