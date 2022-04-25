//Variables

//1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavoriteHero = 'Hulk';

//1.2 Crea una variable llamada x, asigna el valor 50 a ella.
let x = 50;

//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
let h = 5;
let y = 10;

//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = h + y;
console.log(z);

//Variables avanzadas//

//2.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.//
const character = {name: 'Jack Sparrow', age: 10}
character.age = 25;
console.log(character);

//2.2 Declara 3 variables con los nombres y los valores siguientes
let firstName = 'Jon'; 
let	lastName = 'Snow'; 
let	age = 24;
//Muéstralos por consola de esta forma: 'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

console.log('Soy ' + firstName, lastName + ', tengo ' + age + ' años y me gustan los lobos.');

//2.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log (toy1.price + toy2.price);

//2.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice= 25000;
car1.finalPrice= car1.basePrice + globalBasePrice;
car2.finalPrice=car2.basePrice + globalBasePrice;
console.log(car1.finalPrice, car2.finalPrice);

//Operadores//

//3.1 Multiplica 10 por 5 y muestra el resultado mediante alert.

alert(10*5);

//3.2 Divide 10 por 2 y muestra el resultado en un alert.
alert(10/2);

//3.3 Muestra mediante un alert el resto de dividir 15 por 9.
alert(15/9);

//3.4 Usa el correcto operador de asignación que resultará en x = 15, teniendo dos variables y = 10 y z = 5.
let y = 10;
let z = 5;
let x = (y+z)

//3.5 Usa el correcto operador de asignación que resultará en x = 50, teniendo dos variables y = 10 y z = 5.
let y = 10;
let z = 5;
let x = (y+z);

//Arrays//

//4.1/ Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//4.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0]= 'IRONMAN';
console.log(avengers);

//4.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
alert(avengers.length)

//4.4 Añade 2 elementos al array: "Morty" y "Summer"
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

//4.5 Elimina el último elemento del array y muestra el primero y el último por consola
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[4]);

//4.6 Elimina el segundo elemento del array y muestra el array por consola
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);

//Condicionales//

const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
};

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
};

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
  };

if (number3 != number1) {
    console.log("number3 es distinto number1");
  }; 

  if (/* COMPLETAR */) {
    console.log("number3 por 5 es igual a number1");
  }
  
  if (/* COMPLETAR */) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }
  
  if (number 2 / 2 == number1 || number 1 / 5 == number 3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  };


  //Bucles//

  //1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
  for (let x = 0; x <= 9 ; x++) {
    console.log(x)

  //1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
  cuando el resto del numero dividido entre 2 sea 0.
  for (let x = 0; x <= 9 ; x++) {
    if (x/2==0) {
    console.log(x)
    }
};

  //1.3Crea un bucle para conseguir dormir contando ovejas. Este bucle empieza en 0 y termina en 10.
  //Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle y cambia el mensaje en la última vuelta a 'Dormido!'.
  for (let x = 0; x <= 10 ; x++) {
    if (x == 10) {
        console.log(x,'Dormido!')   
    }
    else {
        console.log(x,'Intentando dormir')
    }
};