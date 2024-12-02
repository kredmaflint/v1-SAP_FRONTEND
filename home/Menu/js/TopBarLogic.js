// TopBarLogic.js
export function redirectToAbout() {
  const pageAbout = `${window.location.origin}/home/about/acerca.html`; // Ruta absoluta generada dinámicamente
  window.location.href = pageAbout; // Redirige al archivo 'acerca.html'
}


export function topBarLogic(component) {
    // Redirigir a la página 'acerca.html'
    setTimeout(() => {
      component.title = 'Bienvenido a Mi Sitio';
    }, 3000);
    component.$emit('changeTitle', redirectToAbout);
  }  