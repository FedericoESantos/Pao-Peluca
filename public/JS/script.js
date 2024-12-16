// Funcionalidad básica para añadir productos al carrito
let carrito = [];

function añadirAlCarrito(producto) {
    carrito.push(producto);
    alert(`${producto} ha sido añadido al carrito.`);
}

// Ejemplo de uso
document.querySelectorAll('.producto button').forEach(button => {
    button.addEventListener('click', () => {
        const producto = button.parentElement.querySelector('h3').innerText;
        añadirAlCarrito(producto);
    });
});