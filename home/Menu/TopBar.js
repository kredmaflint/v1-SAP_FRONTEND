// TopBar.js
import {topBarLogic, redirectToAbout} from './js/TopBarLogic.js';
const TopBar = {
  template: `
    <div class="top-bar">
      <div class="logo">
        <h1>{{ title }}</h1>
      </div>
      <nav class="navigation">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about" @click="changeTitle('Acerca')">Acerca</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  `,
  data() {
    return {
      title: 'Mi Sitio Web',
    };
  },
  methods: {
    changeTitle(newTitle) {
      this.title = newTitle;
      if (newTitle === 'Acerca') {
        redirectToAbout();
        topBarLogic(this);
      }
    },
  },
  created() {
    // Llamar a la lógica del TopBar al crear el componente
    topBarLogic(this);
  },
};

const app = Vue.createApp({});
app.component('top-bar', TopBar);
app.mount('#vue-app');