 function generarGaleria(contenedorId, imagenes) {
    const contenedor = document.getElementById(contenedorId);
    const paginaDescarga = document.getElementById("pagina-descarga"); // Obtener la página de descarga por su ID

    imagenes.forEach(imagenSrc => {
        const imagenHTML = `
            <div class="grid gap-4 relative">
                <img src="${imagenSrc}" class="h-auto max-w-full rounded-lg p-5 imagen-galeria" data-src="${imagenSrc}" alt="Imagen">
                ${paginaDescarga ? `<a href="${imagenSrc}" download class="absolute top-2 right-3 p-2 bg-blue-500 text-white rounded-sm"><i class="fas fa-download"></i></a>` : ''}
            </div>
        `;
        contenedor.insertAdjacentHTML('beforeend', imagenHTML);
    });

    const imagenesGaleria = contenedor.querySelectorAll('.imagen-galeria');
    const fondoNegro = document.getElementById('fondo-negro');
    const imagenExpandida = document.getElementById('imagen-expandida');
    const cerrar = document.getElementById('cerrar');
    const body = document.body;
    
    imagenesGaleria.forEach(imagen => {
        imagen.addEventListener('click', () => {
            fondoNegro.style.display = 'flex';
            const imagenSeleccionada = imagen.getAttribute('data-src');
            body.style.overflow = "hidden";
            imagenExpandida.src = imagenSeleccionada;
        });
    });
    
    cerrar.addEventListener('click', () => {
        cerrarImagen();
    });
    
    fondoNegro.addEventListener('click', () => {
        cerrarImagen();
    });
    
    function cerrarImagen() {
        fondoNegro.style.display = 'none';
        imagenExpandida.src = '';
        body.style.overflow = "visible";
    }
    

}


        
        // Agregar eventos clic para expandir y cerrar la imagen

       
    