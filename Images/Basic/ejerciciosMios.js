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

let arreglo =[1,2,3,4,5];
for( let i=0;i<arreglo.length; i++){
    let numero=arreglo[i];


    console.log(numero)
}