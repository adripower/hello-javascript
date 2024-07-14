function hola(nombre){
    if (nombre){
        var saludo = "holi " + nombre;
    }
    console.log(saludo)
}

hola("adri")

//--------------------------
let edad=10;

function modificador (edad){
    edad = 25;
    console.log ("dentro de la funcion "+ edad);
}
console.log(edad)
modificador(edad)

//----------------------------------------
// ! te mira el largo del array arreglo y te imprime por consola cada uno de los elementos
let arreglo =[1,2,3,4,5];
for( let i=0;i<arreglo.length; i++){
    let numero=arreglo[i];


    console.log(numero)
}

//------------------------------------
//! esta no se si esta bien del todo, el metodo map que te mira el largo del array y te lo 
//! La función map se utiliza para recorrer cada elemento del array original y copiarlo en el nuevo array.
var numero=[2,4,6,8,1,3];
var numerito =numero.map(function(x){
    return x;
})
console.log(numerito)
//! Por ejemplo, si queremos crear un nuevo array que contenga el cuadrado de cada número del array original, podemos utilizar la siguiente función callback:
function cuadrado(x) {
    return x * x;
  }
  
  var numerosCuadrados = numero.map(cuadrado);
  console.log(numerosCuadrados); // [4, 16, 36, 64, 1, 9]
//-----------------------------
let numero1 =1;
let numero2 ="2";
let numero3 =true;


console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(numero3));

//---------------------
//! para escribir texto en la pagina web a de estar enlazado a la pagina para que funcioneo en la consola de esta
// let texto =" texto que sale en la pagina web";
// document.write(texto);

//----------------------------------------

let texto1 = "Estamos viendo los strings.";
console.log(texto1[1])
let guadaLetra = texto1[1]

console.log(guadaLetra)

//--------------------------
//! aqui empiezan las array :)


let pizzaMargarita = [ "masa", "tomate", "queso", "especies"];

console.log (pizzaMargarita[0])

let pizzaMargarita2 = pizzaMargarita[2];
console.log (pizzaMargarita2)