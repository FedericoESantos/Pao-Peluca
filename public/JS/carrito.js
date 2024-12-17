let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const tablaBody = document.querySelector("tbody");
const totalElement = document.querySelector(".total");
const botonBorrarCarrito = document.querySelector("button:nth-of-type(1)"); 

function mostrarCarrito() {
    tablaBody.innerHTML = ""; 

    let total = 0;

    carrito.forEach((item) => {
        const precioNumerico = parseFloat(item.precio.replace("$", "").replace(",", ""));
        const totalPorProducto = precioNumerico * item.cantidad;
        const fila = `
            <tr>
                <td>${item.producto}</td>
                <td>${item.cantidad}</td>
                <td>${item.precio}</td>
                <td>${item.precio}</td>
            </tr>
        `;
        tablaBody.innerHTML += fila;

        total += totalPorProducto;
    });

    totalElement.innerText = `Total: $${total.toFixed(2)}`;
}

function borrarCarrito() {
    carrito = []; 
    localStorage.removeItem("carrito"); 
    mostrarCarrito(); 
    alert("El carrito ha sido vaciado.");
}

botonBorrarCarrito.addEventListener("click", borrarCarrito);

mostrarCarrito();
