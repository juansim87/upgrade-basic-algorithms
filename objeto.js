const videojuego = {
    tipo: 'metroidvania',
    coop: false,
    duracion: 60,
    nota: 9.5,
};


const propiedad = prompt('¿Qué propiedad quieres saber?');

console.log(videojuego[propiedad]);
console.log(videojuego.coop)