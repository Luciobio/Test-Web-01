
const tarjetasPrincipales = [
    {
      
        nombre: "Eventos",
        image: '/eventos/WhatsApp Image 2023-09-19 at 12.17.33 AM.jpeg'
    },

    {
       
        nombre: "Deportes",
        image: '/deportes/WhatsApp Image 2023-09-19 at 12.16.52 AM (4).jpeg'
    },

    {
       
        nombre: "Sesiones",
        image: '/sesiones/WhatsApp Image 2023-09-19 at 12.18.36 AM (1).jpeg'
    },

    {
        
        nombre: "Paisajes",
        image: '/paisajes/paisa.jpeg'
    },
]

const crearSeccion = document.getElementById('Secciones');

for(let i = 0; i < tarjetasPrincipales.length; i++) {
    const tarjeta = tarjetasPrincipales[i];

    const tarjetaHTML = `
    <div class="flex justify-center items-center flex-col gap-2">
    <a class="order" href="${tarjeta.nombre.toLowerCase()}.html"><img class="w-72" src= "${tarjeta.image}" alt= "${tarjeta.nombre}"></a>
    <h2 class="text-2xl uppercase" style="font-family: 'Recursive', sans-serif;">${tarjeta.nombre}</h2>
    </div>


    `;

    crearSeccion.innerHTML += tarjetaHTML;
}















































// let mostrarCategorias = document.getElementById('flex-mostrar');
// let cambiarPropiedad = document.getElementById('mostrar');

// let menuAbierto = false;

// mostrarCategorias.addEventListener('click', () => {
//     if (!menuAbierto) {
//         cambiarPropiedad.style.opacity = '1'; // Establece una altura máxima
//         menuAbierto = true;
//     } else {
//         cambiarPropiedad.style.opacity = '0'; // Restablece la altura máxima a 0
//         menuAbierto = false;
//     }
// });