let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function añadirAlCarrito(producto, precio) {
        const productoExistente = carrito.find(item => item.producto === producto);
        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            carrito.push({ producto, precio, cantidad: 1 });
        }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto} ha sido añadido al carrito.`);
}

document.querySelectorAll('.producto button').forEach(button => {
    button.addEventListener('click', () => {
        const producto = button.parentElement.querySelector('h2').innerText;
        const precio = button.parentElement.querySelector('p:nth-of-type(2)').innerText;
        añadirAlCarrito(producto,precio);
    });
});

