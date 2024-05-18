class Products {
    constructor(product, price){
        this.product = product;
        this.price = price;
    }
}

class Services {
    constructor(service, price){
        this.service = service;
        this.price = price;
    }
}

let products = [];
let services = [];
let shoppingCart = [];
let total = [];
let cycle = true;

products.push(new Products ("Esmalte gelificado", 2500));
products.push(new Products ("Esmalte semipermanente", 3500));
products.push(new Products ("Lima", 850));

services.push(new Services ("Semipermanente", 5000));
services.push(new Services ("Polygel", 6000));
services.push(new Services ("Francesas", 3500));
services.push(new Services ("Esculpidas", 7000));

//Este es el menu de los productos
function productsMenu(){
    while (cycle){
        let productsMenu = parseInt(prompt(`A continuación se encuentran los productos que tenemos disponibles.\n\nElija una opción si quiere agregar al carrito:\n1. Esmalte gelificado\n2. Esmalte semipermanentes\n3. Limas\n4. Ver carrito\n5. Volver al menú anterior`));
        switch (productsMenu){
            case 1:
                shoppingCart.push(products[0]);
                break;
            case 2:
                shoppingCart.push(products[1]);
                break;
            case 3:
                shoppingCart.push(products[2]);
                break;
            case 4:
                console.log(shoppingCart);
                break;
            case 5: 
                cycle = false;
            break;
            default: 
                prompt("Elija una opción válida")
            break;
        }
    }
}
//Este es el menu de los servicios
function servicesMenu(){
    while (cycle){
        let servicesMenu = parseInt(prompt("A continuación se encuentran los servicios que ofrecemos.\n\nEl mismo podrá ser elegido y agregado al carrito:\n1. Semipermanente\n2. Polygel\n3. Francesas\n4. Esculpidas\n5. Ver carrito\n6. Volver al menú anterior"));
        switch (servicesMenu){
            case 1:
                shoppingCart.push(services[0]);
                break;
            case 2:
                shoppingCart.push(services[1]);
                break;
            case 3:
                shoppingCart.push(services[2]);
                break;
            case 4:
                shoppingCart.push(services[3]);
                break;
            case 5:
                console.log(shoppingCart);
                break;
            case 6: 
                cycle = false;
            break;
            default: 
                prompt("Elija una opción válida")
            break;
        }
    }
}

//Este es el menu principal
while(cycle){
    let firstMenu = parseInt(prompt("Bienvenido a Valentime Nails, donde el cuidado de sus manos es nuestra principal prioridad\n\nA continuación, elija una opción:\n1. Ver productos\n2. Ver servicios\n3. Ver carrito\n4. Salir"));
    switch(firstMenu){
        case 1: 
            productsMenu();
            cycle = true;
            break;
        case 2: 
            servicesMenu();
            cycle = true;
            break;
        case 3:
            console.log(shoppingCart);
            break;
        case 4:
            cycle = false;
            break;
        default:
        
            break;
        
    }
}
