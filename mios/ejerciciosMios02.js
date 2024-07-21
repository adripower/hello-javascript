//!objetos


let nombre= "Paco"

let usuario ={
    //propiedades
    nombre:"adrian",
    edad: 45,
    ciudad : "las palmas",
    telefonos: {
        telefono1 : 343434343, 
        telefono2 :89879871},
    idiomas: ["españo","ingles","frances",],
};

console.log(nombre);
console.log(usuario.nombre);
console.log(usuario.telefonos.telefono1)

usuario.edad = 40;
let newEdad =usuario.edad;
console.log(usuario.edad)
delete usuario.edad;
console.log(newEdad)

//05:03:00  cap38