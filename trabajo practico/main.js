// Array de actividade
const actividades = [
    {
        id: 1,
        nombre: "tirolesa",
        precio: 5000,
        imagen: "./img/tirolesa.jpg",
    },
    {
        id: 2,
        nombre: "trekking",
        precio: 5000,
        imagen: "./img/trekking.jpg",
    },
    {
        id: 3,
        nombre: "mountain bike",
        precio: 5000,
        imagen: "./img/m.bike.jpg",
    },
];

// Inicializar el carrito desde el almacenamiento local
let misActividades = JSON.parse(localStorage.getItem('misActividades')) || [];

// Función para guardar el carrito en el almacenamiento local
function guardarMisActividadesEnLocalStorage() {
    localStorage.setItem('misActividades', JSON.stringify(misActividades));
}

// Función para agregar tarjetas de actividades al contenedor
function agregarTarjetas(container, actividades) {
    for (const actividad of actividades) {
        let contenedor = document.createElement("div");
        contenedor.classList.add("card");
        contenedor.innerHTML = `
                <img src="${actividad.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${actividad.nombre}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the
                        bulk of the card's content.</p>
                    <p>precio: $${actividad.precio}</p>
                    <button class="btn btn-primary agregar" data-product-id="${actividad.id}">agregar</button>
                </div>
                `;
        container.appendChild(contenedor);
    }
}

// Seleccionar el contenedor de actividades
const contenedorActividades = document.querySelector("#actividades");

// Agregar tarjetas al contenedor de actividades
agregarTarjetas(contenedorActividades, actividades);

// Función para mostrar las actividades en "Mis actividades"
function mostrarMisActividadesEnHTML() {
    const contenedorMisActividades = document.querySelector(".container-carrito");

    // Vacía el contenedor antes de agregar las actividades seleccionadas
    contenedorMisActividades.innerHTML = '';

    if (misActividades.length === 0) {
        // Si el carrito está vacío, muestra un mensaje
        contenedorMisActividades.innerHTML = '<p>No tienes actividades en el carrito.</p>';
    } else {
        // Si hay actividades en el carrito, muestra cada una
        misActividades.forEach(actividad => {
            const cardActividad = document.createElement("div");
            cardActividad.classList.add("card-carrito");
            cardActividad.innerHTML = `
                    <img src="${actividad.imagen}" alt="">
                    
                    <div>
                        <p>Actividad</p>
                        <p>${actividad.nombre}</p>
                    </div>
                    <div>
                        <p>Precio</p>
                        <p>$${actividad.precio}</p>
                    </div>
                    <div>
                        <p>Cantidad</p>
                        <p>${actividad.cantidad}</p>
                    </div>
                    <button class="btn btn-danger eliminar-actividad" data-product-id="${actividad.id}">Eliminar</button>
                    `;

            contenedorMisActividades.appendChild(cardActividad);
        });
    }

    // Función para eliminar una unidad de una actividad del carrito
function eliminarUnidadDeActividad(actividad) {
    // Buscar la actividad en el carrito por ID
    const actividadEnCarrito = misActividades.find(item => item.id === actividad.id);

    if (actividadEnCarrito) {
        // Si la actividad está en el carrito y tiene una cantidad mayor a 1, disminuye la cantidad
        if (actividadEnCarrito.cantidad > 1) {
            actividadEnCarrito.cantidad -= 1;
        } else {
            // Si la cantidad es 1, elimina la actividad del carrito
            const indice = misActividades.indexOf(actividadEnCarrito);
            misActividades.splice(indice, 1);
        }

        // Actualizar el almacenamiento local con el carrito modificado
        guardarMisActividadesEnLocalStorage();

        // Volver a mostrar las actividades en "Mis actividades"
        mostrarMisActividadesEnHTML();
        actualizarTotalCarrito();
    }
}

// Agregar un evento a los botones "eliminar-actividad"
const eliminarBotones = document.querySelectorAll(".eliminar-actividad");
eliminarBotones.forEach(button => {
    button.addEventListener("click", (event) => {
        const productoId = parseInt(event.target.getAttribute("data-product-id"));

        // Buscar la actividad por ID en el array de actividades
        const actividad = actividades.find(a => a.id === productoId);

        if (actividad) {
            // Eliminar una unidad de la actividad del carrito
            eliminarUnidadDeActividad(actividad);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "actividad eliminada"
              });
        }
    });
});
}

// Llama a la función para mostrar los productos del carrito al cargar la página
mostrarMisActividadesEnHTML();

// Agregar un evento a los botones "agregar"
const agregarButtons = document.querySelectorAll(".agregar");
agregarButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const productoId = parseInt(event.target.getAttribute("data-product-id"));
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "actividad agregada"
          });

        // Buscar la actividad por ID en el array de actividades
        const actividad = actividades.find(a => a.id === productoId);

        if (actividad) {
            // Agregar la actividad al carrito (en este caso, al array misActividades)
            agregarActividadAlCarrito(actividad);

            // Actualizar la vista del carrito
            mostrarMisActividadesEnHTML();
        }
    });
});

// Función para agregar una actividad al carrito
function agregarActividadAlCarrito(actividad) {
    // Buscar la actividad en el carrito por ID
    const actividadEnCarrito = misActividades.find(item => item.id === actividad.id);

    if (actividadEnCarrito) {
        // Si la actividad ya está en el carrito, aumenta la cantidad
        actividadEnCarrito.cantidad += 1;
    } else {
        // Si la actividad no está en el carrito, agrégala con cantidad 1
        misActividades.push({ ...actividad, cantidad: 1 });
    }

    // Guardar el carrito actualizado en el almacenamiento local
    guardarMisActividadesEnLocalStorage();
    actualizarTotalCarrito();
}

// Función para eliminar una unidad de una actividad del carrito
function eliminarUnidadDeActividad(actividad) {
    
    // Buscar la actividad en el carrito por ID
    const actividadEnCarrito = misActividades.find(item => item.id === actividad.id);

    if (actividadEnCarrito) {
        // Si la actividad está en el carrito y tiene una cantidad mayor a 1, disminuye la cantidad
        if (actividadEnCarrito.cantidad > 1) {
            actividadEnCarrito.cantidad -= 1;
        } else {
            // Si la cantidad es 1, elimina la actividad del carrito
            const indice = misActividades.indexOf(actividadEnCarrito);
            misActividades.splice(indice, 1);
        }

        // Actualizar el almacenamiento local con el carrito modificado
        guardarMisActividadesEnLocalStorage();

        // Volver a mostrar las actividades en "Mis actividades"
        mostrarMisActividadesEnHTML();
        actualizarTotalCarrito();
    }
}

// Obtener elementos del DOM
const totalCarrito = document.getElementById("totalCarrito");
const totalCarritoValor = document.getElementById("totalCarritoValor");
const comprarCarritoButton = document.getElementById("comprarCarrito");
const vaciarCarritoButton = document.getElementById("vaciarCarrito");

// Función para calcular el total del carrito
function calcularTotalCarrito() {
    let total = 0;
    for (const actividad of misActividades) {
        total += actividad.precio * actividad.cantidad;
    }
    return total;
}

// Función para actualizar el contenido del "Total Carrito"
function actualizarTotalCarrito() {
    const total = calcularTotalCarrito();
    totalCarritoValor.textContent = `$${total}`;
}

// Mostrar el "Total Carrito" al cargar la página
actualizarTotalCarrito();

// Agregar un evento al botón "Comprar Carrito" (puedes implementar la lógica de compra aquí)
const formComprarCarrito= document.querySelector("#formComprarCarrito")
// Agregar un evento al botón "Comprar Carrito"
comprarCarritoButton.addEventListener("click", (e) => {
    // Remover la clase "ocultar" del botón "Comprar Carrito"
    formComprarCarrito.classList.remove("ocultar");

    // Implementa la lógica de compra aquí
});

// Agregar un evento al botón "Vaciar Carrito"
vaciarCarritoButton.addEventListener("click", () => {
    Swal.fire({
        title: "elinimar actividades",
        text: "¿estas seguro de elinimar todas las actividades?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si",
        cancelButtonText:"no"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "has eliminado todas tus actividades",
            icon: "success"

          });
        misActividades = [];
    // Actualizar el almacenamiento local
    guardarMisActividadesEnLocalStorage();
    // Actualizar el contenido del "Total Carrito"
    actualizarTotalCarrito();
    // Actualizar la vista de "Mis actividades"
    mostrarMisActividadesEnHTML();}
      });
    // Vaciar el carrito
    
});
   
  

