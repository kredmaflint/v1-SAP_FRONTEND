import { topBarLogic, redirectToPage, logout } from './js/TopBarLogic.js';

const TopBar = {
  template: `
    <div class="top-bar">
      <div class="logo" @click="toggleLogoutButton">
        <h1>{{ title }}</h1>
      </div>
      <nav class="navigation">
        <ul>
          <li><a href="#" @click="changeTitle('Home')">Inicio</a></li>
          <li v-if="isUserOrAdmin"><a href="#" @click="changeTitle('Solicitudes')">Solicitudes</a></li>
          <li v-if="isAdmin"><a href="#" @click="changeTitle('ControlPresupuestal')">Control Presupuestal</a></li>
          <li v-if="isAdmin"><a href="#" @click="changeTitle('Adquisiciones')">Adquisiciones</a></li>
        </ul>
      </nav>
      <button class="logout-button" :class="{ visible: showLogoutButton }" @click="logout">Cerrar sesión</button>
    </div>
  `,
  data() {
    return {
      title: 'Mi Sitio Web',
      showLogoutButton: false,
      isAdmin: false, // Propiedad para determinar si el usuario es admin
      isUserOrAdmin: false, // Propiedad para mostrar elementos comunes a admin y user
    };
  },
  methods: {
    changeTitle(newTitle) {
      this.title = newTitle;
      redirectToPage(newTitle);
      topBarLogic(this);
    },
    logout() {
      logout();
    },
    toggleLogoutButton() {
      this.showLogoutButton = !this.showLogoutButton;
    }
  },
  created() {
    topBarLogic(this);
    const userType = sessionStorage.getItem('userType');
    if (userType) {
      this.isAdmin = (userType === 'admin');
      this.isUserOrAdmin = (userType === 'admin' || userType === 'user'); // Mostrar elementos comunes a admin y user
    }
  },
};

const app = Vue.createApp({});
app.component('top-bar', TopBar);
app.mount('#vue-app');