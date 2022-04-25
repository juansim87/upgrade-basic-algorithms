//Variables//

//1.1//
let myFavoriteHero = 'Hulk';

//1.2//
let x = 50;

//1.3//
let h = 5;
let y = 10;

//1.4//
let z = h + y;
console.log(z);

//Variables avanzadas//

//2.1//
const character = {name: 'Jack Sparrow', age: 10}
character.age = 25;
console.log(character);

//2.2//
let firstName = 'Jon'; 
let	lastName = 'Snow'; 
let	age = 24;
console.log('Soy ' + firstName, lastName + ', tengo ' + age + ' años y me gustan los lobos');

//2.3//
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log (toy1.price + toy2.price);

//2.4//
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice= 25000;
car1.finalPrice= car1.basePrice + globalBasePrice;
car2.finalPrice=car2.basePrice + globalBasePrice;
console.log(car1.finalPrice, car2.finalPrice);

//Operadores//

//3.1//
alert(10*5);

//3.2//
alert(10/2);

//3.3//
alert(15/9);

//3.4//
let y = 10;
let z = 5;
let x = (y+z)

//3.5//
let y = 10;
let z = 5;
let x = (y+z);

//Arrays//

//4.1//
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//4.2//
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0]= 'IRONMAN';
console.log(avengers);

//4.3//
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
alert(avengers.length)

//4.4//
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

//4.5//
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[4]);

//4.6//
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

  //1.1//
  for (let x = 0; x <= 9 ; x++) {
    console.log(x)

  //1.2//
  for (let x = 0; x <= 9 ; x++) {
    if (x/2==0) {
    console.log(x)
    }
};

  //1.3//
  for (let x = 0; x <= 10 ; x++) {
    if (x == 10) {
        console.log(x,'Dormido!')   
    }
    else {
        console.log(x,'Intentando dormir')
    }
};