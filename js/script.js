class Servicio {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}
class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const listaServicios = [
    new Servicio('Esculpidas', 7000, './assets/img/esculpidas.png'),
    new Servicio('Francesas', 3500, './assets/img/francesas.png'),
    new Servicio('Polygel', 5000, './assets/img/polygel.png'),
    new Servicio('Semipermanente', 6000, './assets/img/semipermanente.png')
];

const listaProductos = [
    new Producto('EsmalteGel', 2500, './assets/img/esmalteGel.png'),
    new Producto('EsmalteUV', 3500, './assets/img/esmalteUV.png'),
    new Producto('Lima', 500, './assets/img/lima.png'),
];

// Carrito de compras
let cart = [];

// Función para agregar productos al carrito
function addToCart(item) {
    const itemInCart = cart.find(cartItem => cartItem.nombre === item.nombre);

    if (itemInCart) {
        itemInCart.cantidad += 1;
    } else {
        cart.push({ ...item, cantidad: 1 });
    }

    saveCart();
    renderCart();
}

// Función para eliminar productos del carrito
function removeFromCart(nombre) {
    const itemInCart = cart.find(cartItem => cartItem.nombre === nombre);

    if (itemInCart) {
        if (itemInCart.cantidad > 1) {
            itemInCart.cantidad -= 1;
        } else {
            cart = cart.filter(cartItem => cartItem.nombre !== nombre);
        }
    }

    saveCart();
    renderCart();
}
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}


// Función para renderizar el carrito
function renderCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img class='img' src="${item.imagen}" alt="${item.nombre}" />
            <span>${item.nombre} (x${item.cantidad}) - $${(item.precio * item.cantidad).toFixed(2)}</span>
            <button class='botonSP' onclick="removeFromCart('${item.nombre}')">-</button>
            <span>${item.cantidad}</span>
            <button class='botonSP' onclick="addToCart({nombre: '${item.nombre}', precio: ${item.precio}, imagen: '${item.imagen}'})">+</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    const totalPrice = cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    const totalPriceElement = document.createElement('div');
    totalPriceElement.innerHTML = `<strong>Total: $${totalPrice.toFixed(2)}</strong>`;
    cartContainer.appendChild(totalPriceElement);
}

// Función para crear los elementos de la tienda (servicios y productos)
function createStore() {
    const contenedorS = document.getElementById("container-servicios");
    listaServicios.forEach(servicio => {
        const containerServices = document.createElement('div');
        containerServices.classList.add("containerServices");
        containerServices.innerHTML = `
            <img class='img' src="${servicio.imagen}" alt="${servicio.nombre}" />
            <h3>${servicio.nombre}</h3>
            <p>$${servicio.precio.toFixed(2)}</p>
            <button class='boton'>Agregar al carrito</button>
        `;
        containerServices.querySelector('.boton').addEventListener('click', () => addToCart(servicio));
        contenedorS.appendChild(containerServices);
    });

    const contenedorP = document.getElementById("container-productos");
    listaProductos.forEach(producto => {
        const containerProducts = document.createElement('div');
        containerProducts.classList.add("containerProducts");
        containerProducts.innerHTML = `
            <img class='img' src="${producto.imagen}" alt="${producto.nombre}" />
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toFixed(2)}</p>
            <button class='boton'>Agregar al carrito</button>
        `;
        containerProducts.querySelector('.boton').addEventListener('click', () => addToCart(producto));
        contenedorP.appendChild(containerProducts);
    });
}

// Inicializar la tienda y cargar el carrito desde localStorage
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderCart();
    createStore();
});
