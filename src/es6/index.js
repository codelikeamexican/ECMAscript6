function newFunction(name,age,country){
var name = name || 'oscar';
var age = age || 32;
var country = country || 'mx';
console.log(name, age, country);
}

//es6

function newFuncion2(name = 'oscar', age=32, country ='fr'){
    console.log(name,age,country);
}

newFuncion2(); // me devuelve los parametos por defecto
newFuncion2('Ricardo',23,'co');


//LET y CONST, Multilínea, Spread Operator y Desestructuración//

let lorem = "Lorem Ipsum es simplemente el texto de relleno \n" + "something else";

//es6
let lorem2 = `otra frase
y ahora es otra frase`;

console.log(lorem);
console.log(lorem2)


let person = {
    'name': 'gerardo',
    'age': 24,
    'country': 'MX'
}

console.log(person.age, person.name);

//es6
let{name,age,country} = person;

console.log(name,age,country);


let {name} = person;

let team1 = ['oscar','julian','paulina'];
let team2 = ['adriana','rosy','ivan'];

let education = ['david', ...team1, ...team2]; //uniendo arrays

console.log(education);

{
    var global = "Global var";
}

{
    let globalLet = "Glocablet";
}

console.log(global); //scope global 
console.log(globalLet); //scope local


const a = 'b';

a = 'a'; //const cannot be overrite

var a = 'b';

a = 'a'; 
console.log(a);
