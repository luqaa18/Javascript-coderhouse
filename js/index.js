
const start = document.getElementById("initialize");
start.addEventListener("click",sistema);


//CONSTRUCTORES DE LOS SERVICIOS Y PRODUCTOS A OFRECER
function sistema(){
    class Product {
        constructor(id, name, price) {
            this.id = id;
            this.name = name;
            this.price = price;
        }
    }
    
    class Service {
        constructor(id, name, price) {
            this.id = id;
            this.name = name;
            this.price = price;
        }
    }
    
    let productsList = [
        new Product(1, "Esmalte gelificado", 2500),
        new Product(2, "Esmalte semipermanente", 3500),
        new Product(3, "Lima", 850),
    ];
    
    let servicesList = [
        new Service(1, "Semipermanente", 6000),
        new Service(2, "Polygel", 5000),
        new Service(3, "Francesas", 3500),
        new Service(4, "Esculpidas", 7000),
    ];
    
    let shoppingCart = [];
    let continueShopping = true;
    function cartAdd(){
        let cartDetails = '';
        let total = 0;
        shoppingCart.forEach(item => {
            cartDetails += `- ${item.name}: $${item.price}\n`;
            total += item.price;
        });
        console.log(`Tu carrito:\n${cartDetails}\nTotal: $${total}`);
    }
    function displayCart() {
        // if (shoppingCart.length === 0) {
        //     console.log("Tu carrito está vacío.");
        // } else {
        //     let cartDetails = '';
        //     let total = 0;
        //     shoppingCart.forEach(item => {
        //         cartDetails += `- ${item.name}: $${item.price}\n`;
        //         total += item.price;
        //     });
        //     console.log(`Tu carrito:\n${cartDetails}\nTotal: $${total}`);
        // }
        shoppingCart.length === 0 ? console.log('Tu carrito esta vacio'):cartAdd();
    }
    
    function productsMenu() {
        let cycle = true;
        while (cycle) {
            let choice = parseInt(prompt(`A continuación se encuentran los productos que tenemos disponibles.\n\nElija una opción si quiere agregar al carrito:\n1. Esmalte gelificado: $2500\n2. Esmalte semipermanente: $3500\n3. Lima: $850\n4. Ver carrito\n5. Volver al menú anterior`));
            switch (choice) {
                case 1:
                case 2:
                case 3:
                    shoppingCart.push(productsList.find(product => product.id === choice));
                    break;
                case 4:
                    displayCart();
                    break;
                case 5:
                    cycle = false;
                    break;
                default:
                    alert("Elija una opción válida");
                    break;
            }
        }
    }
    
    function servicesMenu() {
        let cycle = true;
        while (cycle) {
            let choice = parseInt(prompt("A continuación se encuentran los servicios que ofrecemos.\n\nElija una opción si quiere agregar al carrito:\n1. Semipermanente: $6000\n2. Polygel: $5000\n3. Francesas: $3500\n4. Esculpidas: $7000\n5. Ver carrito\n6. Volver al menú anterior"));
            switch (choice) {
                case 1:
                case 2:
                case 3:
                case 4:
                    shoppingCart.push(servicesList.find(service => service.id === choice));
                    break;
                case 5:
                    displayCart();
                    break;
                case 6:
                    cycle = false;
                    break;
                default:
                    alert("Elija una opción válida");
                    break;
            }
        }
    }
    
    while (continueShopping) {
        let firstMenu = parseInt(prompt("Bienvenido a Valentime Nails, donde el cuidado de sus manos es nuestra principal prioridad\n\nA continuación, elija una opción:\n1. Ver productos\n2. Ver servicios\n3. Ver carrito\n4. Salir"));
        switch (firstMenu) {
            case 1:
                productsMenu();
                break;
            case 2:
                servicesMenu();
                break;
            case 3:
                displayCart();
                break;
            case 4:
                continueShopping = false;
                break;
            default:
                alert("Elija una opción válida");
                break;
        }
    }
    
    console.log("Gracias por visitar Valentime Nails!");

}    