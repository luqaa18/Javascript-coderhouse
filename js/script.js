// Carrito
let carrito = [];

// Fetch para obtener los productos de la API
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        products.forEach(product => {
            const contenedorTarjetas = document.getElementById('contenedorTarjetas');
            const contenedor = document.createElement('div');
            contenedor.className = 'col-md-4 tarjeta';
            contenedor.innerHTML = `
            <img src=${product.image} alt="${product.title}">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <button id="botonAdd${product.id}">Agregar al carrito</button>`;
            contenedor.querySelector(`#botonAdd${product.id}`).addEventListener('click', () => addToCart(product));
            contenedorTarjetas.appendChild(contenedor);
        });
        loadCart();
        renderCart();
    })
    .catch(error => alert("No se pudieron obtener los productos"));

// Funciones para guardar y cargar carrito en localStorage
function saveCart() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function loadCart() {
    const savedCart = localStorage.getItem('carrito');
    if (savedCart) {
        carrito = JSON.parse(savedCart);
    }
}

const cuentaCarrito = document.getElementById('cuenta-carrito');
function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem('carrito')) || [];
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    cuentaCarrito.innerText = cuenta;
}

// Función para agregar productos al carrito
function addToCart(item) {
    const itemInCart = carrito.find(cartItem => cartItem.id === item.id);

    if (itemInCart) {
        itemInCart.cantidad += 1;
    } else {
        carrito.push({ ...item, cantidad: 1 });
    }
    saveCart();
    renderCart();
    actualizarNumeroCarrito();
}

// Función para eliminar productos del carrito
function removeFromCart(id) {
    const itemInCart = carrito.find(cartItem => cartItem.id === id);
    if (itemInCart) {
        if (itemInCart.cantidad > 1) {
            itemInCart.cantidad -= 1;
        } else {
            carrito = carrito.filter(cartItem => cartItem.id !== id);
        }
    }
    saveCart();
    renderCart();
    actualizarNumeroCarrito()
}

//uso de libreria SweetAlert2, para confirmar la compra
function finalizarCompra() {
    Swal.fire({
        title: "¿Queres confirmar la compra?",
        showDenyButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Listo! Ya sabemos donde vivis. No preguntes cómo");
            localStorage.clear();
            carrito = [];
            renderCart();
            actualizarNumeroCarrito();
            setTimeout(() => {
                location.reload();
            }, 2000);
        } else if (result.isDenied) {
            Swal.fire("No se realizó la compra\nSeguí comprando");
        }
    });
}

// Función para renderizar el carrito
function renderCart() {
    const cartContainer = document.getElementById('carrito');
    cartContainer.innerHTML = '';

    if (carrito.length === 0) {
        cartContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        return;
    }

    //seccion del precio total de la compra
    const totalPrice = carrito.reduce((total, item) => total + (item.price * item.cantidad), 0);
    const totalPriceElement = document.createElement('div');
    totalPriceElement.className = 'd-flex justify-content-between'
    totalPriceElement.innerHTML = `<strong>Total: $${totalPrice.toFixed(2)}</strong>
    <button onclick="finalizarCompra()">Finalizar compra</button>`;

    cartContainer.appendChild(totalPriceElement);

    carrito.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('carrito-item');

        cartItem.innerHTML = `
            <img class='img-carrito' src="${item.image}" alt="${item.title}" />
            <span>${item.title} (x${item.cantidad}) - $${(item.price * item.cantidad).toFixed(2)}</span>
            <button class='boton-carrito' onclick="removeFromCart(${item.id})"><</button>
            <span>${item.cantidad}</span>
            <button class='boton-carrito' onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})">></button>
            `;
        cartContainer.appendChild(cartItem);
    });
    actualizarNumeroCarrito()
}