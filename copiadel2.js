alert("Bienvenido a Valentime Nails");
console.log("Bienvenido a Valentime Nails");


let user = prompt("Ingrese su nombre");

let seguirCotizando = true;
let primeraVezParam = true;
let serviciosFinal = "";
let serviciosFinalList = [];
let valorTotal = 0;

class Servicio {
    id;
    nombre;
    valor;

    constructor(id, nombre, valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
    }

}

const serviciosList = [
    new Servicio(1, "Esculpidas", 5000),
    new Servicio(2, "Semipermanente", 4200),
    new Servicio(3, "Francesas", 4000),
    new Servicio(4, "Polygel", 7500)
]


const serviciosText = `Bienvenido ${user}, a continuación te mostramos nuestros servicios: \n1. Esculpidas: $5000\n2. Semipermanente: $4200\n3. Francesas: $4000\n4. Polygel: $7500`
let serviciosTextCerrar = "\n5. Cerrar ";
let serviciosTextTerminar = "\n5. Terminar cotización ";


while (seguirCotizando) {
    PreguntarServicios(primeraVezParam);

    primeraVezParam = false;
}

function PreguntarServicios(primeraVez) {
    let tipoServicio = 0;

    if (primeraVez)
        tipoServicio = parseInt(prompt(serviciosText + serviciosTextCerrar))
    else
        tipoServicio = parseInt(prompt(serviciosText + serviciosTextTerminar))

    switch (tipoServicio) {
        case 1:
        case 2:
        case 3:
        case 4:
            serviciosFinalList.push(serviciosList.find((el) => el.id === tipoServicio))
            break;
        case 5:
            serviciosFinalList.forEach(element => {
                serviciosFinal += element.nombre + ", ";
                valorTotal += element.valor;
            });


            console.log(`Los servicios que elegiste son: ${serviciosFinal}y el total de estos es: $${valorTotal}`);
            alert(`Los servicios que elegiste son: ${serviciosFinal}y el total de estos es: $${valorTotal}`);
            seguirCotizando = false
            break;
        default:
            console.log("Ingresa una opción válida")
            alert("Elegí una opción válida")
            break;
    }
}