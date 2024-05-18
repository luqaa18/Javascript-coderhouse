let user = prompt("Bienvenido a Valentime Nails, ingrese su nombre para iniciar");

while (user == ""){
    alert(`Para continuar, debes ingresar un nombre`);
    user = prompt("Ingresa un nombre")
}
alert(`Bienvenido ${user} a Valentime Nails, donde tu cuidado es nuestra prioridad 1°.`);

let services = true;
let francesas = 4000;
let semipermanente = 4200;
let esculpidas = 5000;
let polygel = 7500;

let total = 0;
let finalList= "";

while (services){
    let serviceOptions = parseInt(prompt(`${user}, a continuación elija el servicio que desea.\n1. Francesas: $4000\n2. Semipermanentes: $4200\n3. Esculpidas: $5000\n4. Polygel:$7500\n5. Terminar cotización`));
    switch (serviceOptions){
        case 1: 
            total += francesas
            finalList += "Francesas\n"
        break;
        case 2: 
            total += semipermanente
            finalList += "Semipermanentes\n"
        break;
        case 3: 
            total += esculpidas
            finalList += "Esculpidas\n"
        break;
        case 4: 
            total += polygel
            finalList += "Polygel\n"
        break;
        case 5: 
            console.log(`Los servicios que elegiste ${user.toUpperCase()}, son:\n${finalList}Total de los servicios: $${total}`)
            alert(`Los servicios que elegiste ${user}, son\n${finalList}Total de los servicios: $${total}`)
            services = false;
        break;
        default:
           alert("Ingrese una opción válida");
        break;
    }
}
alert(`Nos alegra que nos hayas elegido ${user}, esperamos volver a verte pronto!`)