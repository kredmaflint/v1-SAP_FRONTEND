// TopBarLogic.js
export function redirectToPage(page) {
  let pageUrl;

  if (page === 'Home') {
    pageUrl = `${window.location.origin}/home/home.html`;
  } else if (page === 'Solicitudes') {
    pageUrl = `${window.location.origin}/home/Solicitudes/solicitud.html`;
  } else if (page === 'ControlPresupuestal') {
    pageUrl = `${window.location.origin}/home/ControlPresupuestal/control.html`;
  } else if (page === 'Adquisiciones') {
    pageUrl = `${window.location.origin}/home/Adquisiciones/Adquisiciones.html`;
  }

  if (pageUrl) {
    window.location.href = pageUrl; 
  } else {
    console.error('La página especificada no existe.');
  }
}

export function topBarLogic(component) {
  setTimeout(() => {
    component.title = 'Bienvenido a Mi Sitio';
  }, 6000);
}

export function logout() {
  console.log('Cerrando sesión...');
  sessionStorage.removeItem('userType'); 
  window.location.href = `${window.location.origin}/index.html`; 
}