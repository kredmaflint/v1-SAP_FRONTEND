const TopBar = {
    template: `
      <div class="top-bar">
        <div class="logo">
          <h1>Mi Sitio Web</h1>
        </div>
        <nav class="navigation">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Acerca</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    `,
  };
  
  const app = Vue.createApp({});
  app.component('top-bar', TopBar);
  app.mount('#vue-app');  