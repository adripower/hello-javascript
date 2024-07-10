// formas de escribir
console.log("hola , Mundo")
console.log('hola , Mundo')
console.log(`hola , Mundo`)

function hola(nombre){
    if (nombre){
        var saludo = "holi " + nombre;
    }
    console.log(saludo)
}

hola("adri")


let edad=10;

function modificador (edad){
    edad = 25;
    console.log ("dentro de la funcion "+ edad);
}
console.log(edad)
modificador(edad)