// TopBarLogic.js
export function redirectToPage(page) {
  let pageUrl;

  if (page === 'Home') {
    pageUrl = `${window.location.origin}/home/home.html`;
  } else if (page === 'Acerca') {
    pageUrl = `${window.location.origin}/home/about/acerca.html`;
  } else if (page === 'Services') {
    pageUrl = `${window.location.origin}/home/services/servicios.html`;
  }

  if (pageUrl) {
    window.location.href = pageUrl; // Redirige a la página correspondiente
  } else {
    console.error('La página especificada no existe.');
  }
}


export function topBarLogic(component) {
    // Redirigir a la página 'acerca.html'
    setTimeout(() => {
      component.title = 'Bienvenido a Mi Sitio';
    }, 6000);
  }  