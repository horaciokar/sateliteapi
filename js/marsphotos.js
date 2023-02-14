window.addEventListener('load', obtenerDatos);

function obtenerDatos() {

    const Nasa_API = 'mVrCaupicmefXa0Hht210JRrbaFPgOQKPe5FbobX';
    const ruta = `https://api.nasa.gov/mars-photos/api/v1/rovers/&api_key=${Nasa_API}`;

    fetch(ruta)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado))
   }


   function mostrarDatos({ media_type, multimedia, url }) {

    
    const camara = document.querySelector('#c_camera');
    
    if (media_type == 'video') {
       multimedia.innerHTML = `
      < iframe class="embed-responsive-item" style="height: 500px; width: 80%" src="${url}" allowfullscreen></iframe>
      `;
    } else {
          multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`;
    }
  }